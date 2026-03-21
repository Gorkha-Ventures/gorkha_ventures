import Image from 'next/image'
import Link from 'next/link'
import styles from './NewsCard.module.css'

export type NewsTagVariant =
  | 'funding'
  | 'industry'
  | 'policy'
  | 'exit'
  | 'recognition'

const tagClass: Record<NewsTagVariant, string> = {
  funding: styles.tagFunding,
  industry: styles.tagIndustry,
  policy: styles.tagPolicy,
  exit: styles.tagExit,
  recognition: styles.tagRecognition,
}

export type NewsCardProps = {
  variant: 'featured' | 'compact'
  tag: string
  tagVariant: NewsTagVariant
  date: string
  title: string
  href?: string
  readTime?: string
  summary?: string
  authorName?: string
  authorRole?: string
  authorInitials?: string
  imageSrc?: string
  imageAlt?: string
  indexLabel?: string
  className?: string
}

export default function NewsCard(props: NewsCardProps) {
  const {
    variant,
    tag,
    tagVariant,
    date,
    title,
    href = '#',
    readTime,
    summary,
    authorName,
    authorRole,
    authorInitials,
    imageSrc,
    imageAlt = '',
    indexLabel,
    className = '',
  } = props

  const rootClass =
    variant === 'featured'
      ? `${styles.card} ${styles.featured} ${className}`.trim()
      : `${styles.card} ${styles.compact} ${className}`.trim()

  const inner = (
    <>
      {variant === 'featured' && (
        <div className={styles.media}>
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(min-width: 900px) 55vw, 100vw"
              className={styles.mediaImage}
            />
          ) : (
            <span className={styles.mediaPlaceholder}>Featured image</span>
          )}
        </div>
      )}
      {variant === 'featured' ? (
        <div className={styles.body}>
          <div className={styles.metaRow}>
            <span className={`${styles.tag} ${tagClass[tagVariant]}`}>{tag}</span>
            <span>
              {date}
              {readTime ? ` • ${readTime}` : ''}
            </span>
          </div>
          <h3 className={styles.title}>{title}</h3>
          {summary ? <p className={styles.summary}>{summary}</p> : null}
          {authorName ? (
            <div className={styles.author}>
              <span className={styles.avatar} aria-hidden>
                {authorInitials ?? authorName.slice(0, 2).toUpperCase()}
              </span>
              <div className={styles.authorText}>
                <span className={styles.authorName}>{authorName}</span>
                {authorRole ? <span className={styles.authorRole}>{authorRole}</span> : null}
              </div>
            </div>
          ) : null}
        </div>
      ) : (
        <>
          <div>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.compactMeta}>
              <span className={`${styles.tag} ${tagClass[tagVariant]}`}>{tag}</span>
              <span>{date}</span>
            </div>
          </div>
          {indexLabel ? <span className={styles.index}>{indexLabel}</span> : null}
        </>
      )}
    </>
  )

  return (
    <Link href={href} className={rootClass}>
      {inner}
    </Link>
  )
}
