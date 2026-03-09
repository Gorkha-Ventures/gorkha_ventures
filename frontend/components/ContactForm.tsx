'use client'

import { useState } from 'react'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

type FormType = 'founder' | 'msme' | 'investor' | 'talent'

type FormConfig = {
  optionLabel: string
  title: string
  description: string
  submitLabel: string
}

const formConfigs: Record<FormType, FormConfig> = {
  founder: {
    optionLabel: 'a founder',
    title: 'For Founders',
    description: 'Share your idea details and current stage.',
    submitLabel: 'Submit founder form',
  },
  msme: {
    optionLabel: 'an MSME owner',
    title: 'For MSME',
    description: 'Tell us about your industry and key challenge.',
    submitLabel: 'Submit MSME form',
  },
  investor: {
    optionLabel: 'an investor',
    title: 'For Investors',
    description: 'Let us know your investment focus.',
    submitLabel: 'Submit investor form',
  },
  talent: {
    optionLabel: 'looking for opportunities',
    title: 'For Talent',
    description: 'Apply for roles and upload your resume.',
    submitLabel: 'Submit talent form',
  },
}

export default function ContactForm() {
  const [selectedForm, setSelectedForm] = useState<FormType | ''>('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!selectedForm) {
      setStatus('error')
      setErrorMessage('Please select who you are before submitting.')
      return
    }

    const form = e.currentTarget
    const data = new FormData(form)
    const formType = data.get('formType') as FormType

    if (formType === 'talent') {
      const resume = data.get('resume')
      if (!(resume instanceof File) || resume.size === 0) {
        setStatus('error')
        setErrorMessage('Resume is required for talent submissions.')
        return
      }
    }

    setStatus('sending')
    setErrorMessage('')
    try {
      const res = await fetch(`${API_URL}/api/submissions`, {
        method: 'POST',
        body: data,
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
    <div className="contact-form-shell">
      <div className={`contact-form-selector-wrap ${selectedForm ? 'is-selected' : ''}`}>
      <div className="contact-form-selector-line">
        <span className="contact-form-selector-text">You are</span>
        <span className="contact-form-selector-field">
          <select
            className="contact-form-selector-dropdown"
            value={selectedForm}
            onChange={(e) => {
              setSelectedForm(e.target.value as FormType | '')
              setStatus('idle')
              setErrorMessage('')
            }}
            disabled={status === 'sending'}
            aria-label="Select form type"
          >
            <option value="">Select</option>
            {(Object.keys(formConfigs) as FormType[]).map((type) => (
              <option key={type} value={type}>
                {formConfigs[type].optionLabel}
              </option>
            ))}
          </select>
          <span className="contact-form-selector-arrow" aria-hidden>▾</span>
        </span>
        <span className="contact-form-selector-text">?</span>
      </div>
      </div>

      <div className={`contact-form-reveal ${selectedForm ? 'is-visible' : ''}`}>
      {!!selectedForm && (
      <>
      <p className="contact-form-selector-description">
        {formConfigs[selectedForm].description}
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="hidden" name="formType" value={selectedForm} />
        <input type="hidden" name="source" value={`contact_${selectedForm}`} />

        <div className="form-row">
          <label htmlFor="name" className="form-label">Name</label>
          <input id="name" name="name" type="text" className="form-input" placeholder="Your name" required disabled={status === 'sending'} />
        </div>

        <div className="form-row">
          <label htmlFor="email" className="form-label">Email</label>
          <input id="email" name="email" type="email" className="form-input" placeholder="you@company.com" required disabled={status === 'sending'} />
        </div>

        <div className="form-row">
          <label htmlFor="number" className="form-label">Number</label>
          <input id="number" name="number" type="tel" className="form-input" placeholder="+91 98765 43210" required disabled={status === 'sending'} />
        </div>

        {selectedForm === 'founder' && (
          <>
            <div className="form-row">
              <label htmlFor="ideaDetails" className="form-label">Idea details</label>
              <textarea
                id="ideaDetails"
                name="ideaDetails"
                className="form-input form-textarea"
                placeholder="Describe your idea in detail..."
                rows={4}
                required
                disabled={status === 'sending'}
              />
            </div>
            <div className="form-row">
              <label htmlFor="stage" className="form-label">Stage</label>
              <input id="stage" name="stage" type="text" className="form-input" placeholder="e.g. MVP launched" required disabled={status === 'sending'} />
            </div>
          </>
        )}

        {selectedForm === 'msme' && (
          <>
            <div className="form-row">
              <label htmlFor="industry" className="form-label">Industry</label>
              <input id="industry" name="industry" type="text" className="form-input" placeholder="Your industry" required disabled={status === 'sending'} />
            </div>
            <div className="form-row">
              <label htmlFor="challenge" className="form-label">Challenge</label>
              <textarea
                id="challenge"
                name="challenge"
                className="form-input form-textarea"
                placeholder="What challenge are you facing?"
                rows={4}
                required
                disabled={status === 'sending'}
              />
            </div>
          </>
        )}

        {selectedForm === 'investor' && (
          <div className="form-row">
            <label htmlFor="focusIndustry" className="form-label">Focus industry (optional)</label>
            <input id="focusIndustry" name="focusIndustry" type="text" className="form-input" placeholder="e.g. Fintech, SaaS" disabled={status === 'sending'} />
          </div>
        )}

        {selectedForm === 'talent' && (
          <>
            <div className="form-row">
              <label htmlFor="desiredRole" className="form-label">Role you are looking for</label>
              <input id="desiredRole" name="desiredRole" type="text" className="form-input" placeholder="e.g. Product Manager" required disabled={status === 'sending'} />
            </div>
            <div className="form-row">
              <label htmlFor="resume" className="form-label">Upload resume</label>
              <input id="resume" name="resume" type="file" className="form-input form-file-input" accept=".pdf,.doc,.docx" required disabled={status === 'sending'} />
            </div>
          </>
        )}

        {status === 'success' && <p className="form-success">Thanks! Your form has been submitted.</p>}
        {status === 'error' && <p className="form-error">{errorMessage}</p>}

        <button type="submit" className="contact-submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Submitting…' : formConfigs[selectedForm].submitLabel}
        </button>
      </form>
      </>
      )}
      </div>

      {!selectedForm && status === 'error' && <p className="form-error">{errorMessage}</p>}
    </div>
  )
}
