'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { apiFetch, logoutApi } from '@/lib/api'
import { clearTokens } from '@/lib/auth'
import { useRouter, useSearchParams } from 'next/navigation'
import { AdminSidebar } from '@/app/components/admin-sidebar'

type Submission = {
  id: string
  type: 'FOUNDER' | 'MSME' | 'INVESTOR' | 'TALENT'
  status: 'NEW' | 'IN_REVIEW' | 'RESOLVED' | 'REJECTED'
  name: string
  email: string
  number: string
  createdAt: string
}

type ListResponse = {
  items: Submission[]
}

export default function DashboardPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [items, setItems] = useState<Submission[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')
  const [type, setType] = useState('')
  const [status, setStatus] = useState('')

  const query = useMemo(() => {
    const params = new URLSearchParams()
    if (search) params.set('q', search)
    if (type) params.set('type', type)
    if (status) params.set('status', status)
    return params.toString()
  }, [search, status, type])

  useEffect(() => {
    const sidebarType = (searchParams.get('type') ?? '').toUpperCase()
    const validTypes = new Set(['', 'FOUNDER', 'MSME', 'INVESTOR', 'TALENT'])
    const nextType = validTypes.has(sidebarType) ? sidebarType : ''
    setType((prev) => (prev === nextType ? prev : nextType))
  }, [searchParams])

  useEffect(() => {
    let active = true
    setLoading(true)
    apiFetch<ListResponse>(`/api/admin/submissions${query ? `?${query}` : ''}`)
      .then((data) => {
        if (!active) return
        setItems(data.items)
        setError('')
      })
      .catch((e: Error) => {
        if (!active) return
        setError(e.message || 'Failed to fetch submissions')
      })
      .finally(() => {
        if (!active) return
        setLoading(false)
      })

    return () => {
      active = false
    }
  }, [query])

  const handleLogout = async () => {
    await logoutApi()
    clearTokens()
    router.replace('/')
  }

  return (
    <main className="admin-layout">
      <AdminSidebar activeType={type} />
      <section className="admin-shell">
        <header className="admin-header">
          <div>
            <h1 className="admin-title">Submissions</h1>
            <p className="admin-subtitle">Review founders, MSME, investor and talent forms.</p>
          </div>
          <div className="admin-actions">
            <button className="btn" onClick={handleLogout}>Logout</button>
          </div>
        </header>

        <section className="filters">
          <input
            className="field"
            placeholder="Search by name/email/number"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select className="field" value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">All types</option>
            <option value="FOUNDER">Founder</option>
            <option value="MSME">MSME</option>
            <option value="INVESTOR">Investor</option>
            <option value="TALENT">Talent</option>
          </select>
          <select className="field" value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="">All statuses</option>
            <option value="NEW">New</option>
            <option value="IN_REVIEW">In review</option>
            <option value="RESOLVED">Resolved</option>
            <option value="REJECTED">Rejected</option>
          </select>
          <button className="btn btn-primary" onClick={() => window.location.reload()}>
            Refresh
          </button>
        </section>

        <section className="panel table-wrap">
          {loading ? (
            <div className="empty">Loading submissions...</div>
          ) : error ? (
            <div className="empty">{error}</div>
          ) : items.length === 0 ? (
            <div className="empty">No submissions found.</div>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Created</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.type}</td>
                    <td><span className="status-chip">{item.status}</span></td>
                    <td>{item.email}</td>
                    <td>{item.number}</td>
                    <td>{new Date(item.createdAt).toLocaleString()}</td>
                    <td>
                      <Link className="row-link" href={`/submissions/${item.id}`}>
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      </section>
    </main>
  )
}
