const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001'

export default function Home() {
  return (
    <main className="auth-page">
      <section className="auth-card">
        <h1 className="auth-title">GV Admin</h1>
        <p className="auth-subtitle">
          Sign in with Google to access form submissions.
        </p>
        <a className="auth-button" href={`${API_BASE}/api/auth/google`}>
          Continue with Google
        </a>
      </section>
    </main>
  )
}
