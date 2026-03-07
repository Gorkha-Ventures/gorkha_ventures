import { NextFunction, Request, Response } from 'express'
import { verifyAccessToken } from '../lib/jwt'

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization
  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const token = authHeader.replace('Bearer ', '').trim()
  try {
    const payload = verifyAccessToken(token)
    req.auth = payload
    next()
  } catch (_error) {
    return res.status(401).json({ error: 'Invalid or expired token' })
  }
}
