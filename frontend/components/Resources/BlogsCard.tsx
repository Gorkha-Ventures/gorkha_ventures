import Link from 'next/link'
import styles from './BlogsCard.module.css'

export type BlogTagVariant = 'guide' | 'hiring' | 'career' | 'culture'

const tagClass: Record<BlogTagVariant, string> = {
  guide: styles.tagGuide,
  hiring: styles.tagHiring,
  career: styles.tagCareer,
  culture: styles.tagCulture,
}

export type BlogsCardProps = {
  indexLabel: string
  tag: string
  tagVariant: BlogTagVariant
  title: string
  date: string
  readTime: string
  href?: string
  className?: string
}

export default function BlogsCard(props: BlogsCardProps) {
  const { indexLabel, tag, tagVariant, title, date, readTime, href = '#', className = '' } = props

  return (
    <Link href={href} className={`${styles.card} ${className}`.trim()}>
      <span className={styles.index}>{indexLabel}</span>
      <div className={styles.middle}>
        <span className={`${styles.tag} ${tagClass[tagVariant]}`}>{tag}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.meta}>
          {date} • {readTime}
        </p>
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
