import { v2 as cloudinary } from 'cloudinary'
import { env } from '../config/env'

const isConfigured =
  Boolean(env.cloudinaryCloudName) &&
  Boolean(env.cloudinaryApiKey) &&
  Boolean(env.cloudinaryApiSecret)

if (isConfigured) {
  cloudinary.config({
    cloud_name: env.cloudinaryCloudName,
    api_key: env.cloudinaryApiKey,
    api_secret: env.cloudinaryApiSecret,
    secure: true,
  })
}

export function ensureCloudinaryConfigured() {
  if (!isConfigured) {
    throw new Error('Cloudinary is not configured. Set CLOUDINARY_* env variables.')
  }
}

export async function uploadResumeBuffer(
  buffer: Buffer,
  fileName: string,
  folder = 'gv-resumes',
) {
  ensureCloudinaryConfigured()

  return new Promise<{ secureUrl: string; publicId: string }>((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        resource_type: 'raw',
        folder,
        public_id: fileName.replace(/\.[^/.]+$/, ''),
      },
      (error, result) => {
        if (error || !result) {
          reject(error ?? new Error('Cloudinary upload failed'))
          return
        }
        resolve({ secureUrl: result.secure_url, publicId: result.public_id })
      },
    )
    stream.end(buffer)
  })
}
