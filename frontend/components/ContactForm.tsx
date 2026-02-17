'use client'

import { useState } from 'react'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const payload = {
      formType: 'contact',
      source: 'contact',
      name: data.get('name'),
      email: data.get('email'),
      company: data.get('company') || undefined,
      message: data.get('message'),
    }
    setStatus('sending')
    setErrorMessage('')
    try {
      const res = await fetch(`${API_URL}/api/submissions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok) {
        setStatus('error')
        setErrorMessage(json.error || res.statusText || 'Something went wrong')
        return
      }
      setStatus('success')
      form.reset()
    } catch (err) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'Network error')
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="name" className="form-label">Name</label>
        <input id="name" name="name" type="text" className="form-input" placeholder="Your name" required disabled={status === 'sending'} />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">Email</label>
        <input id="email" name="email" type="email" className="form-input" placeholder="you@company.com" required disabled={status === 'sending'} />
      </div>
      <div className="form-row">
        <label htmlFor="company" className="form-label">Company (optional)</label>
        <input id="company" name="company" type="text" className="form-input" placeholder="Company name" disabled={status === 'sending'} />
      </div>
      <div className="form-row">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea id="message" name="message" className="form-input form-textarea" placeholder="Tell us about your idea or how we can help..." rows={5} required disabled={status === 'sending'} />
      </div>
      {status === 'success' && <p className="form-success">Thanks! We&apos;ll get back to you soon.</p>}
      {status === 'error' && <p className="form-error">{errorMessage}</p>}
      <button type="submit" className="contact-submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}
