import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import passport from './config/passport'
import { env } from './config/env'
import { errorHandler, notFound } from './middleware/error'
import { adminRouter } from './routes/admin'
import { authRouter } from './routes/auth'
import { healthRouter } from './routes/health'
import { submissionsRouter } from './routes/submissions'

const app = express()

const allowedOrigins = [env.clientUrl, env.publicFrontendUrl].filter(Boolean)

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) return callback(null, true)
      return callback(new Error('Origin not allowed by CORS'))
    },
    credentials: true,
  }),
)

app.use(helmet())
app.use(morgan('dev'))
app.use(express.json({ limit: '2mb' }))
app.use(express.urlencoded({ extended: true }))
app.use(passport.initialize())

app.get('/', (_req, res) => {
  res.json({ ok: true, service: 'gv-backend-server' })
})

app.use('/health', healthRouter)
app.use('/api/auth', authRouter)
app.use('/api/submissions', submissionsRouter)
app.use('/api/admin', adminRouter)

app.use(notFound)
app.use(errorHandler)

app.listen(env.port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on http://localhost:${env.port}`)
})
