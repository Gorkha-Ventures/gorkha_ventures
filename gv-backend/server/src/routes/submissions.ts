import { Prisma, SubmissionType } from '@prisma/client'
import { Router } from 'express'
import multer from 'multer'
import { z } from 'zod'
import { uploadResumeBuffer } from '../lib/cloudinary'
import { prisma } from '../lib/prisma'

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 8 * 1024 * 1024 },
})

const baseSchema = z.object({
  name: z.string().trim().min(2),
  email: z.string().trim().email(),
  number: z.string().trim().min(6),
})

const founderSchema = baseSchema.extend({
  formType: z.literal('founder'),
  ideaDetails: z.string().trim().min(10),
  stage: z.string().trim().min(1),
})

const msmeSchema = baseSchema.extend({
  formType: z.literal('msme'),
  industry: z.string().trim().min(2),
  challenge: z.string().trim().min(5),
})

const investorSchema = baseSchema.extend({
  formType: z.literal('investor'),
  focusIndustry: z.string().trim().optional(),
})

const talentSchema = baseSchema.extend({
  formType: z.literal('talent'),
  desiredRole: z.string().trim().min(2),
})

const submissionSchema = z.discriminatedUnion('formType', [
  founderSchema,
  msmeSchema,
  investorSchema,
  talentSchema,
])

export const submissionsRouter = Router()

submissionsRouter.post('/', upload.single('resume'), async (req, res, next) => {
  try {
    const payload = submissionSchema.parse(req.body)
    let resumeMeta:
      | {
          resumeUrl: string
          resumePublicId: string
          resumeFileName: string
          resumeMimeType: string
          resumeSize: number
        }
      | undefined

    if (payload.formType === 'talent') {
      const file = req.file
      if (!file) {
        return res.status(400).json({ error: 'Resume file is required for talent form.' })
      }

      const uploadResult = await uploadResumeBuffer(
        file.buffer,
        `${Date.now()}-${file.originalname}`,
      )

      resumeMeta = {
        resumeUrl: uploadResult.secureUrl,
        resumePublicId: uploadResult.publicId,
        resumeFileName: file.originalname,
        resumeMimeType: file.mimetype,
        resumeSize: file.size,
      }
    }

    const source = typeof req.body.source === 'string' ? req.body.source : payload.formType

    const created = await prisma.submission.create({
      data: {
        type:
          payload.formType === 'founder'
            ? SubmissionType.FOUNDER
            : payload.formType === 'msme'
              ? SubmissionType.MSME
              : payload.formType === 'investor'
                ? SubmissionType.INVESTOR
                : SubmissionType.TALENT,
        source,
        name: payload.name,
        email: payload.email,
        number: payload.number,
        ideaDetails: payload.formType === 'founder' ? payload.ideaDetails : null,
        stage: payload.formType === 'founder' ? payload.stage : null,
        industry: payload.formType === 'msme' ? payload.industry : null,
        challenge: payload.formType === 'msme' ? payload.challenge : null,
        focusIndustry: payload.formType === 'investor' ? payload.focusIndustry ?? null : null,
        desiredRole: payload.formType === 'talent' ? payload.desiredRole : null,
        resumeUrl: resumeMeta?.resumeUrl ?? null,
        resumePublicId: resumeMeta?.resumePublicId ?? null,
        resumeFileName: resumeMeta?.resumeFileName ?? null,
        resumeMimeType: resumeMeta?.resumeMimeType ?? null,
        resumeSize: resumeMeta?.resumeSize ?? null,
        payload: payload as unknown as Prisma.InputJsonValue,
      },
      select: {
        id: true,
        type: true,
        status: true,
        createdAt: true,
      },
    })

    return res.status(201).json({
      message: 'Submission received successfully.',
      submission: created,
    })
  } catch (error) {
    return next(error)
  }
})
