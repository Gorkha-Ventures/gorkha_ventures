import bcrypt from 'bcryptjs'
import { Router } from 'express'
import passport from '../config/passport'
import { env } from '../config/env'
import {
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken,
} from '../lib/jwt'
import { prisma } from '../lib/prisma'

export const authRouter = Router()

authRouter.get('/google', passport.authenticate('google', { scope: ['profile', 'email'], session: false }))

authRouter.get(
  '/google/callback',
  passport.authenticate('google', { session: false, failureRedirect: `${env.clientUrl}/?error=auth_failed` }),
  async (req, res, next) => {
    try {
      if (!req.user) {
        return res.redirect(`${env.clientUrl}/?error=auth_failed`)
      }

      const accessToken = signAccessToken({
        sub: req.user.id,
        email: req.user.email,
        role: req.user.role,
      })

      const refreshToken = signRefreshToken({
        sub: req.user.id,
        type: 'refresh',
      })

      const tokenHash = await bcrypt.hash(refreshToken, 10)
      const expiresAt = new Date(Date.now() + env.refreshTokenTtlDays * 24 * 60 * 60 * 1000)

      await prisma.refreshToken.create({
        data: {
          userId: req.user.id,
          tokenHash,
          expiresAt,
        },
      })

      const redirectUrl = new URL('/auth/callback', env.clientUrl)
      redirectUrl.searchParams.set('accessToken', accessToken)
      redirectUrl.searchParams.set('refreshToken', refreshToken)
      return res.redirect(redirectUrl.toString())
    } catch (error) {
      return next(error)
    }
  },
)

authRouter.post('/refresh', async (req, res) => {
  const token = req.body?.refreshToken as string | undefined
  if (!token) {
    return res.status(400).json({ error: 'refreshToken is required' })
  }

  try {
    const payload = verifyRefreshToken(token)
    const user = await prisma.adminUser.findUnique({
      where: { id: payload.sub },
      include: { refreshTokens: true },
    })
    if (!user) return res.status(401).json({ error: 'Invalid token' })

    let matched: string | null = null
    for (const item of user.refreshTokens) {
      if (item.expiresAt <= new Date()) continue
      // Sequential check keeps logic simple and explicit for token rotation.
      const ok = await bcrypt.compare(token, item.tokenHash)
      if (ok) {
        matched = item.id
        break
      }
    }

    if (!matched) {
      return res.status(401).json({ error: 'Invalid token' })
    }

    const accessToken = signAccessToken({
      sub: user.id,
      email: user.email,
      role: user.role,
    })
    return res.json({ accessToken })
  } catch (_error) {
    return res.status(401).json({ error: 'Invalid or expired refresh token' })
  }
})

authRouter.post('/logout', async (req, res) => {
  const token = req.body?.refreshToken as string | undefined
  if (token) {
    const allTokens = await prisma.refreshToken.findMany()
    for (const stored of allTokens) {
      const matched = await bcrypt.compare(token, stored.tokenHash).catch(() => false)
      if (matched) {
        await prisma.refreshToken.delete({ where: { id: stored.id } })
        break
      }
    }
  }
  return res.json({ ok: true })
})
