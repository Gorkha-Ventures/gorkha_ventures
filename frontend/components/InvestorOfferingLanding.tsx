'use client'

import { useEffect } from 'react'
import styles from './InvestorOfferingLanding.module.css'

export default function InvestorOfferingLanding() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.on)
            io.unobserve(entry.target)
          }
        }),
      { threshold: 0.08 },
    )
    document.querySelectorAll(`.${styles.fade}`).forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <p className={styles.tag}>Investor Offering</p>
          <h1>
            Where Discipline Meets <span>Capital.</span>
          </h1>
          <p>
            Access execution-ready founders with stronger structure, clearer diligence signal,
            and better post-investment operating support.
          </p>
          <div className={styles.stats}>
            <div><strong>~65%</strong><small>failures are execution failures</small></div>
            <div><strong>3-5x</strong><small>better capital efficiency with structure first</small></div>
            <div><strong>1 in 10</strong><small>founders meet institutional-grade rigor</small></div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.deep} ${styles.fade} ${styles.investorProblemSection}`}>
        <div className={styles.wrap}>
          <p className={styles.problemEyebrow}>The Investor Problem</p>
          <h2 className={styles.problemHeading}>The Market Is Noisy. Most Deals Aren&apos;t Ready.</h2>
          <p className={styles.problemIntro}>
            Early-stage investing is structurally inefficient. The pipeline is high-volume and
            low-quality. Execution risk is invisible until after capital is deployed. And
            post-investment support is thin.
          </p>
          <div className={styles.investorProblemsGrid}>
            <article className={styles.investorProblemCard}>
              <div className={styles.problemIcon}>△</div>
              <h3 className={styles.problemCardTitle}>Deal flow is mostly noise</h3>
              <p className={styles.problemCardBody}>
                The average venture investor reviews hundreds of decks annually to close 2-4 deals.
                Most inbound deals lack basic structural rigor.
              </p>
              <p className={styles.problemCardStat}>Signal-to-noise ratio in early-stage deal flow: ~1-3%</p>
            </article>
            <article className={styles.investorProblemCard}>
              <div className={styles.problemIcon}>◔</div>
              <h3 className={styles.problemCardTitle}>Execution risk is invisible at entry</h3>
              <p className={styles.problemCardBody}>
                A compelling narrative and a capable founder are not the same thing. Operational
                risk surfaces after deployment when correction is expensive.
              </p>
              <p className={styles.problemCardStat}>65% of failures trace to execution failure</p>
            </article>
            <article className={styles.investorProblemCard}>
              <div className={styles.problemIcon}>□</div>
              <h3 className={styles.problemCardTitle}>Capital efficiency breaks early</h3>
              <p className={styles.problemCardBody}>
                Without structural foundations, startups deploy capital reactively and burn runway
                before repeatable growth systems are in place.
              </p>
              <p className={styles.problemCardStat}>Premature scaling drives 74% of inefficiency</p>
            </article>
            <article className={styles.investorProblemCard}>
              <div className={styles.problemIcon}>⌂</div>
              <h3 className={styles.problemCardTitle}>Post-investment support is thin</h3>
              <p className={styles.problemCardBody}>
                Most investors lack operational bandwidth after the check clears. Portfolio
                companies needing the most support are often left alone.
              </p>
              <p className={styles.problemCardStat}>Founders rank operational support as unmet need #1</p>
            </article>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.fade}`}>
        <div className={styles.wrap}>
          <h2>The Gorkha Thesis</h2>
          <div className={styles.timeline}>
            <div><b>01 Foundation</b><p>Market clarity, ICP precision, and business model discipline.</p></div>
            <div><b>02 Structured execution</b><p>GTM, hiring logic, metrics, and execution rhythm.</p></div>
            <div><b>03 Fundraise readiness</b><p>Narrative, materials, and investor-introduce readiness.</p></div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.deep} ${styles.fade}`}>
        <div className={styles.wrap}>
          <h2>How We Compare</h2>
          <div className={styles.table}>
            <div>Need</div><div>Typical</div><div>Gorkha</div>
            <div>Structured deal flow</div><div>Partial</div><div>High, operator-filtered</div>
            <div>Execution visibility</div><div>Low</div><div>High, embedded context</div>
            <div>Post-investment support</div><div>Limited</div><div>Ongoing execution support</div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.fade}`}>
        <div className={styles.wrap}>
          <h2>Investor Journey</h2>
          <div className={styles.grid4}>
            <article><h3>01 Connect</h3><p>Align thesis and stage fit.</p></article>
            <article><h3>02 Access</h3><p>Curated portfolio introductions.</p></article>
            <article><h3>03 Diligence</h3><p>Operator-level context with less asymmetry.</p></article>
            <article><h3>04 Invest</h3><p>Stay connected post-deployment.</p></article>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.deep} ${styles.center}`}>
        <div className={styles.wrap}>
          <h2>Structured companies are not common.</h2>
          <p>If you want execution-grade early-stage access, let&apos;s connect.</p>
          <a href="mailto:gorkhaventures@gmail.com" className={styles.cta}>Request Investor Briefing</a>
        </div>
      </section>
    </div>
  )
}
