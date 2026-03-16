import Link from 'next/link'

const formLinks = [
  { label: 'All forms', value: '', href: '/dashboard' },
  { label: 'Founder forms', value: 'FOUNDER', href: '/dashboard?type=FOUNDER' },
  { label: 'MSME forms', value: 'MSME', href: '/dashboard?type=MSME' },
  { label: 'Investor forms', value: 'INVESTOR', href: '/dashboard?type=INVESTOR' },
  { label: 'Talent forms', value: 'TALENT', href: '/dashboard?type=TALENT' },
]

type AdminSidebarProps = {
  activeType?: string
}

export function AdminSidebar({ activeType = '' }: AdminSidebarProps) {
  return (
    <aside className="admin-sidebar">
      <Link href="/dashboard" className="admin-brand">
        gorkhaventures
      </Link>

      <nav className="admin-sidebar-nav">
        {formLinks.map((link) => {
          const isActive = link.value === activeType
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`admin-nav-item${isActive ? ' is-active' : ''}`}
            >
              {link.label}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
