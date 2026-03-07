import passport from 'passport'
import { Strategy as GoogleStrategy, Profile } from 'passport-google-oauth20'
import { env } from './env'
import { prisma } from '../lib/prisma'
import { AdminRole } from '@prisma/client'

export type AuthenticatedAdmin = {
  id: string
  email: string
  role: AdminRole
  name: string
}

passport.use(
  new GoogleStrategy(
    {
      clientID: env.googleClientId,
      clientSecret: env.googleClientSecret,
      callbackURL: env.googleCallbackUrl,
    },
    async (_accessToken: string, _refreshToken: string, profile: Profile, done) => {
      try {
        const email = profile.emails?.[0]?.value?.toLowerCase()
        if (!email) return done(new Error('Google account has no email'))

        const isAllowed =
          env.adminAllowedEmails.length === 0 || env.adminAllowedEmails.includes(email)
        if (!isAllowed) return done(new Error('This email is not allowed for admin access'))

        const user = await prisma.adminUser.upsert({
          where: { email },
          create: {
            email,
            name: profile.displayName || email,
            googleId: profile.id,
            role: AdminRole.ADMIN,
          },
          update: {
            name: profile.displayName || email,
            googleId: profile.id,
          },
        })

        const admin: AuthenticatedAdmin = {
          id: user.id,
          email: user.email,
          role: user.role,
          name: user.name,
        }
        done(null, admin)
      } catch (error) {
        done(error as Error)
      }
    },
  ),
)

export default passport
