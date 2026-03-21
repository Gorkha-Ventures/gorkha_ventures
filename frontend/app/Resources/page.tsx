import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NewsCard from '@/components/Resources/NewsCard'
import BlogsCard from '@/components/Resources/BlogsCard'
import OtherResourceCard from '@/components/Resources/OtherResourceCard'
import styles from './resources-page.module.css'

export const metadata: Metadata = {
  title: 'Resources | Gorkha Ventures',
  description: 'News, blogs, and resources for founders and investors.',
}

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.inner}>
          <h1 className={styles.visuallyHidden}>Resources</h1>
          <section aria-labelledby="resources-news-heading">
            <div className={styles.sectionHead}>
              <h2 id="resources-news-heading" className={styles.sectionTitle}>
                News
              </h2>
              <Link href="/Resources" className={styles.sectionLink}>
                All news →
              </Link>
            </div>
            <div className={styles.newsGrid}>
              <NewsCard
                variant="featured"
                tag="Funding"
                tagVariant="funding"
                date="Mar 18, 2026"
                readTime="4 min read"
                title="Portfolio company raises $40M Series B to expand operations across three key markets"
                summary="The round was led by global growth investors with participation from existing backers. Funds will accelerate product development and international go-to-market across North America, Europe, and APAC."
                authorName="Shreya Rao"
                authorRole="Portfolio team"
                authorInitials="SR"
                href="#"
              />
              <div className={styles.newsAside}>
                <NewsCard
                  variant="compact"
                  tag="Industry"
                  tagVariant="industry"
                  date="Mar 17, 2026"
                  title="Sector outlook: where operators are seeing durable demand in 2026"
                  indexLabel="02"
                  href="#"
                />
                <NewsCard
                  variant="compact"
                  tag="Policy"
                  tagVariant="policy"
                  date="Mar 15, 2026"
                  title="Regulatory updates founders should factor into their expansion plans"
                  indexLabel="03"
                  href="#"
                />
                <NewsCard
                  variant="compact"
                  tag="Exit"
                  tagVariant="exit"
                  date="Mar 12, 2026"
                  title="Strategic acquisition closes as portfolio company joins a global platform"
                  indexLabel="04"
                  href="#"
                />
                <NewsCard
                  variant="compact"
                  tag="Recognition"
                  tagVariant="recognition"
                  date="Mar 10, 2026"
                  title="Portfolio team named among top early-stage investor voices for the region"
                  indexLabel="05"
                  href="#"
                />
              </div>
            </div>
          </section>

          <div className={styles.bottomGrid}>
            <section aria-labelledby="resources-blogs-heading">
              <h2 id="resources-blogs-heading" className={styles.bottomSectionTitle}>
                Blogs
              </h2>
              <div className={styles.stack}>
                <BlogsCard
                  indexLabel="01"
                  tag="Guide"
                  tagVariant="guide"
                  title="How to nail your first founder pitch in 2026"
                  date="Mar 19, 2026"
                  readTime="6 min read"
                  href="#"
                />
                <BlogsCard
                  indexLabel="02"
                  tag="Hiring"
                  tagVariant="hiring"
                  title="Building your early team: signals we look for in first hires"
                  date="Mar 14, 2026"
                  readTime="5 min read"
                  href="#"
                />
                <BlogsCard
                  indexLabel="03"
                  tag="Career"
                  tagVariant="career"
                  title="From operator to founder: lessons from our portfolio"
                  date="Mar 8, 2026"
                  readTime="7 min read"
                  href="#"
                />
                <BlogsCard
                  indexLabel="04"
                  tag="Culture"
                  tagVariant="culture"
                  title="How we run portfolio sessions and what founders get out of them"
                  date="Mar 3, 2026"
                  readTime="4 min read"
                  href="#"
                />
              </div>
              <div className={styles.blogsFooter}>
                <Link href="/Resources" className={styles.sectionLink}>
                  All blogs →
                </Link>
              </div>
            </section>

            <section aria-labelledby="resources-other-heading">
              <h2 id="resources-other-heading" className={styles.bottomSectionTitle}>
                Other resources
              </h2>
              <div className={styles.stack}>
                <OtherResourceCard
                  iconVariant="reports"
                  title="Market reports"
                  description="Quarterly snapshots on sectors we follow and where we see momentum."
                  href="#"
                />
                <OtherResourceCard
                  iconVariant="podcasts"
                  title="Podcasts"
                  description="Conversations with founders, operators, and investors on building and scaling."
                  href="#"
                />
                <OtherResourceCard
                  iconVariant="playbooks"
                  title="Playbooks"
                  description="Practical frameworks for GTM, fundraising readiness, and operating cadence."
                  href="#"
                />
                <OtherResourceCard
                  iconVariant="webinars"
                  title="Webinars"
                  description="Live and recorded sessions on topics that matter to early-stage teams."
                  href="#"
                />
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
