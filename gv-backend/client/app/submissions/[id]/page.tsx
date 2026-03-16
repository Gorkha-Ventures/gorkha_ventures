'use client'

import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { apiFetch } from '@/lib/api'
import { AdminSidebar } from '@/app/components/admin-sidebar'

type Submission = {
  id: string
  type: string
  status: 'NEW' | 'IN_REVIEW' | 'RESOLVED' | 'REJECTED'
  name: string
  email: string
  number: string
  source?: string | null
  ideaDetails?: string | null
  stage?: string | null
  industry?: string | null
  challenge?: string | null
  focusIndustry?: string | null
  desiredRole?: string | null
  resumeUrl?: string | null
  createdAt: string
}

export default function SubmissionDetailPage() {
  const params = useParams<{ id: string }>()
  const router = useRouter()
  const [item, setItem] = useState<Submission | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [status, setStatus] = useState<Submission['status']>('NEW')

  useEffect(() => {
    let active = true
    apiFetch<{ item: Submission }>(`/api/admin/submissions/${params.id}`)
      .then((res) => {
        if (!active) return
        setItem(res.item)
        setStatus(res.item.status)
      })
      .catch((e: Error) => {
        if (!active) return
        setError(e.message || 'Failed to load submission')
      })
      .finally(() => {
        if (!active) return
        setLoading(false)
      })

    return () => {
      active = false
    }
  }, [params.id])

  const saveStatus = async () => {
    try {
      const res = await apiFetch<{ item: Submission }>(`/api/admin/submissions/${params.id}/status`, {
        method: 'PATCH',
        body: JSON.stringify({ status }),
      })
      setItem(res.item)
      router.refresh()
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to update status')
    }
  }

  if (loading) {
    return (
      <main className="admin-layout">
        <AdminSidebar />
        <section className="admin-shell"><div className="empty">Loading...</div></section>
      </main>
    )
  }
  if (error) {
    return (
      <main className="admin-layout">
        <AdminSidebar />
        <section className="admin-shell"><div className="empty">{error}</div></section>
      </main>
    )
  }
  if (!item) {
    return (
      <main className="admin-layout">
        <AdminSidebar />
        <section className="admin-shell"><div className="empty">Submission not found.</div></section>
      </main>
    )
  }

  return (
    <main className="admin-layout">
      <AdminSidebar activeType={item.type} />
      <section className="admin-shell">
        <header className="admin-header">
          <div>
            <h1 className="admin-title">Submission Detail</h1>
            <p className="admin-subtitle">{item.type} - {item.name}</p>
          </div>
          <div className="admin-actions">
            <Link href="/dashboard" className="btn">Back</Link>
          </div>
        </header>

        <section className="panel" style={{ padding: 12 }}>
          <div className="detail-grid">
            <div className="detail-item"><span className="detail-label">Name</span><span className="detail-value">{item.name}</span></div>
            <div className="detail-item"><span className="detail-label">Email</span><span className="detail-value">{item.email}</span></div>
            <div className="detail-item"><span className="detail-label">Phone</span><span className="detail-value">{item.number}</span></div>
            <div className="detail-item"><span className="detail-label">Source</span><span className="detail-value">{item.source || '-'}</span></div>
            <div className="detail-item"><span className="detail-label">Stage</span><span className="detail-value">{item.stage || '-'}</span></div>
            <div className="detail-item"><span className="detail-label">Industry</span><span className="detail-value">{item.industry || item.focusIndustry || '-'}</span></div>
            <div className="detail-item"><span className="detail-label">Challenge</span><span className="detail-value">{item.challenge || '-'}</span></div>
            <div className="detail-item"><span className="detail-label">Desired role</span><span className="detail-value">{item.desiredRole || '-'}</span></div>
            <div className="detail-item" style={{ gridColumn: '1 / -1' }}>
              <span className="detail-label">Idea details</span>
              <span className="detail-value">{item.ideaDetails || '-'}</span>
            </div>
            <div className="detail-item" style={{ gridColumn: '1 / -1' }}>
              <span className="detail-label">Resume</span>
              <span className="detail-value">
                {item.resumeUrl ? <a className="row-link" href={item.resumeUrl} target="_blank">Open resume</a> : '-'}
              </span>
            </div>
          </div>

          <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
            <select className="field" value={status} onChange={(e) => setStatus(e.target.value as Submission['status'])}>
              <option value="NEW">New</option>
              <option value="IN_REVIEW">In review</option>
              <option value="RESOLVED">Resolved</option>
              <option value="REJECTED">Rejected</option>
            </select>
            <button className="btn btn-primary" onClick={saveStatus}>Save status</button>
          </div>
        </section>
      </section>
    </main>
  )
}
