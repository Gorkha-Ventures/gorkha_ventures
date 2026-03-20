'use client'

import { useEffect, useState } from 'react'
import styles from './MsmeOfferingLanding.module.css'

const faqItems = [
  {
    q: 'How is this different from a regular CA or consultant?',
    a: 'A CA handles your accounts. We co-implement operational fixes with your team and stay until the numbers move.',
  },
  {
    q: 'What is the Free Business Health Check?',
    a: 'A 45-minute structured review to identify your biggest bottleneck and the fastest path to improvement.',
  },
  {
    q: 'My business is small. Is this for me?',
    a: 'We typically work with businesses around Rs 15L to Rs 5Cr annual revenue where execution systems are the missing link.',
  },
  {
    q: 'Do you work outside Dehradun?',
    a: 'Yes. We support MSMEs across Uttarakhand through a blend of on-site and remote execution support.',
  },
]

export default function MsmeOfferingLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
            io.unobserve(entry.target)
          }
        }),
      { threshold: 0.12 },
    )

    document.querySelectorAll(`.${styles.reveal}`).forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    let raf = 0
    let start = 0
    const duration = 1200
    const target = 90

    const tick = (t: number) => {
      if (!start) start = t
      const p = Math.min((t - start) / duration, 1)
      setCounter(Math.round(target * (1 - (1 - p) ** 3)))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <p className={styles.heroTag}>Uttarakhand MSME Growth Partners</p>
          <h1>Apka Business, <em>Hamari Zimmedari.</em></h1>
          <p>
            We help Uttarakhand MSMEs fix cash flow, build teams, and grow beyond founder dependency.
          </p>
          <a className={styles.btnPrimary} href="#contact">Book a Free Business Health Check</a>
        </div>
      </section>

      <section className={`${styles.problem} ${styles.reveal}`}>
        <div className={styles.container}>
          <h2>Most MSMEs are surviving. Very few are growing.</h2>
          <div className={styles.cards3}>
            <article className={styles.card}>
              <h3>Cash flow pressure</h3>
              <p>Revenue comes late, payments go early, and working capital keeps shrinking.</p>
            </article>
            <article className={styles.card}>
              <h3>Founder bottleneck</h3>
              <p>If the founder pauses, sales and operations pause.</p>
            </article>
            <article className={styles.card}>
              <h3>Flat growth</h3>
              <p>Same customers, same channels, same numbers year after year.</p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.reality}>
        <div className={styles.container}>
          <div className={styles.stats}>
            <div><strong>{counter}%</strong><span>founder dependent MSMEs</span></div>
            <div><strong>Rs 20+</strong><span>shortfall per Rs 100 earned</span></div>
            <div><strong>1 in 3</strong><span>shut within 3 years</span></div>
            <div><strong>60</strong><span>days to measurable change</span></div>
          </div>
        </div>
      </section>

      <section className={`${styles.solution} ${styles.reveal}`}>
        <div className={styles.container}>
          <h2>How we work</h2>
          <div className={styles.steps}>
            <div><h3>01 Fix cash flow</h3><p>Cycle correction, inventory clean-up, and capital discipline.</p></div>
            <div><h3>02 Build systems</h3><p>SOPs, KPI rhythm, and delegation layers that reduce founder load.</p></div>
            <div><h3>03 Expand revenue</h3><p>New channels, digital presence, and repeatable GTM motion.</p></div>
          </div>
        </div>
      </section>

      <section className={`${styles.services} ${styles.reveal}`}>
        <div className={styles.container}>
          <h2>Three modules</h2>
          <div className={styles.cards3}>
            <article className={`${styles.card} ${styles.featured}`}>
              <h3>Cash Flow Rescue</h3>
              <p>Stabilize in 60 days with clear cash mechanics.</p>
            </article>
            <article className={styles.card}>
              <h3>Founder Freedom</h3>
              <p>Build second-line capability and execution structure.</p>
            </article>
            <article className={styles.card}>
              <h3>Revenue Engine</h3>
              <p>Scale through structured channels beyond local dependency.</p>
            </article>
          </div>
        </div>
      </section>

      <section className={`${styles.faq} ${styles.reveal}`}>
        <div className={styles.container}>
          <h2>Common questions</h2>
          <div className={styles.faqList}>
            {faqItems.map((item, idx) => (
              <div className={`${styles.faqItem} ${openFaq === idx ? styles.open : ''}`} key={item.q}>
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>{item.q}</button>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className={styles.cta}>
        <div className={styles.container}>
          <h2>Ready to start growing?</h2>
          <p>Book your free 45-minute business health check.</p>
          <a href="/contact" className={styles.btnPrimary}>Book My Free Health Check</a>
        </div>
      </section>
    </div>
  )
}
