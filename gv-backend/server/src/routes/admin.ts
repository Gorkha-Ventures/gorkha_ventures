import { Prisma, SubmissionStatus, SubmissionType } from '@prisma/client'
import { Router } from 'express'
import { z } from 'zod'
import { requireAuth } from '../middleware/auth'
import { prisma } from '../lib/prisma'

const listQuerySchema = z.object({
  type: z.nativeEnum(SubmissionType).optional(),
  status: z.nativeEnum(SubmissionStatus).optional(),
  q: z.string().optional(),
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(20),
})

export const adminRouter = Router()
adminRouter.use(requireAuth)

adminRouter.get('/me', async (req, res) => {
  const user = await prisma.adminUser.findUnique({
    where: { id: req.auth!.sub },
    select: { id: true, email: true, name: true, role: true, createdAt: true },
  })
  if (!user) {
    return res.status(404).json({ error: 'Admin user not found' })
  }
  return res.json({ user })
})

adminRouter.get('/submissions', async (req, res, next) => {
  try {
    const query = listQuerySchema.parse(req.query)
    const where: Prisma.SubmissionWhereInput = {
      ...(query.type ? { type: query.type } : {}),
      ...(query.status ? { status: query.status } : {}),
      ...(query.q
        ? {
            OR: [
              { name: { contains: query.q, mode: 'insensitive' } },
              { email: { contains: query.q, mode: 'insensitive' } },
              { number: { contains: query.q, mode: 'insensitive' } },
            ],
          }
        : {}),
    }

    const skip = (query.page - 1) * query.limit
    const [items, total] = await Promise.all([
      prisma.submission.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip,
        take: query.limit,
      }),
      prisma.submission.count({ where }),
    ])

    return res.json({
      items,
      page: query.page,
      limit: query.limit,
      total,
      totalPages: Math.ceil(total / query.limit) || 1,
    })
  } catch (error) {
    return next(error)
  }
})

adminRouter.get('/submissions/:id', async (req, res) => {
  const item = await prisma.submission.findUnique({
    where: { id: req.params.id },
  })
  if (!item) {
    return res.status(404).json({ error: 'Submission not found' })
  }
  return res.json({ item })
})

adminRouter.patch('/submissions/:id/status', async (req, res, next) => {
  try {
    const body = z.object({ status: z.nativeEnum(SubmissionStatus) }).parse(req.body)
    const updated = await prisma.submission.update({
      where: { id: req.params.id },
      data: { status: body.status },
    })
    return res.json({ item: updated })
  } catch (error) {
    return next(error)
  }
})
