import { AdminRole } from '@prisma/client'

declare global {
  namespace Express {
    interface User {
      id: string
      email: string
      role: AdminRole
      name: string
    }
    interface Request {
      auth?: {
        sub: string
        email: string
        role: string
      }
    }
  }
}

export {}
