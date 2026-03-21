import Link from 'next/link'
import styles from './OtherResourceCard.module.css'

export type ResourceIconVariant = 'reports' | 'podcasts' | 'playbooks' | 'webinars'

const iconWrapClass: Record<ResourceIconVariant, string> = {
  reports: styles.iconReports,
  podcasts: styles.iconPodcasts,
  playbooks: styles.iconPlaybooks,
  webinars: styles.iconWebinars,
}

function ResourceIcon({ variant }: { variant: ResourceIconVariant }) {
  switch (variant) {
    case 'reports':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      )
    case 'podcasts':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 14a3 3 0 0 0 3-3V7a3 3 0 1 0-6 0v4a3 3 0 0 0 3 3z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <path d="M19 10v1a7 7 0 0 1-14 0v-1M12 18v3M8 22h8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      )
    case 'playbooks':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <path
            d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M8 7h8M8 11h6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      )
    case 'webinars':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="2" y="6" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.75" />
          <path d="M16 10l6-3v10l-6-3v-4z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
        </svg>
      )
  }
}

export type OtherResourceCardProps = {
  iconVariant: ResourceIconVariant
  title: string
  description: string
  href?: string
  className?: string
}

export default function OtherResourceCard(props: OtherResourceCardProps) {
  const { iconVariant, title, description, href = '#', className = '' } = props

  return (
    <Link href={href} className={`${styles.card} ${className}`.trim()}>
      <span className={`${styles.iconWrap} ${iconWrapClass[iconVariant]}`} aria-hidden>
        <ResourceIcon variant={iconVariant} />
      </span>
      <div className={styles.text}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <span className={styles.arrow} aria-hidden>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 18l6-6-6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  )
}
