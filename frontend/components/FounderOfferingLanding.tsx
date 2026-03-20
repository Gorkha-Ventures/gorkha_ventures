'use client'

import { useEffect } from 'react'
import styles from './FounderOfferingLanding.module.css'

export default function FounderOfferingLanding() {
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
      <section id="hero" className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.wrap}>
          <p className={styles.eyebrow}>Gorkha Ventures - Operator-Led Execution</p>
          <h1 className={styles.h1}>
            Build
            <br />
            Beyond
            <br />
            <span className={styles.sky}>Ideas.</span>
          </h1>
          <p className={styles.heroSub}>
            We help serious founders turn ideas into scalable, resilient businesses - and raise
            capital when it actually matters.
          </p>
          <p className={styles.heroSupport}>
            Gorkha Ventures works alongside founders to bring structure, discipline, and clarity
            to the entire journey - from idea to execution to capital.
          </p>
          <div className={styles.ctaRow}>
            <a href="#apply" className={styles.btnFill}>Apply to Founder Program -&gt;</a>
            <a href="#what" className={styles.btnGhost}>See How We Work -&gt;</a>
          </div>
        </div>
      </section>

      <section id="reality" className={`${styles.section} ${styles.fade}`}>
        <div className={styles.wrap}>
          <p className={styles.label}>Why Founders Fail</p>
          <h2 className={styles.realityHeading}>Most Founders Don&apos;t Fail Because of Bad Ideas.</h2>
          <div className={styles.realityGrid}>
            <div className={styles.copy}>
              <p>They fail because early decisions compound.</p>
              <p>
                The wrong customer. The wrong product direction. Hiring too early - or too late.
                Raising capital before clarity - or after momentum is lost.
              </p>
              <p>Progress feels real. But structure is missing.</p>
              <p>And without structure, ambition breaks.</p>
            </div>
            <blockquote className={styles.pull}>
              You don&apos;t need more advice.
              <br />
              You need disciplined execution.
            </blockquote>
          </div>
        </div>
      </section>

      <section id="what" className={`${styles.section} ${styles.deep} ${styles.fade}`}>
        <div className={styles.wrap}>
          <p className={styles.label}>What We Actually Do</p>
          <h2 className={styles.h2}>We Don&apos;t Mentor. We Build With You.</h2>
          <p className={styles.whatBody}>
            Gorkha Ventures is not an incubator that runs programs. Not an accelerator that pushes
            speed. Not a consulting firm that advises from the outside.
          </p>
          <ul className={styles.whatList}>
            <li>Bring clarity to decisions</li>
            <li>Structure execution systems</li>
            <li>Build momentum with discipline</li>
            <li>Prepare companies for capital - the right way</li>
          </ul>
        </div>
      </section>

      <section id="model" className={`${styles.section} ${styles.fade}`}>
        <div className={styles.wrap}>
          <p className={styles.label}>Our Model</p>
          <h2 className={styles.h2}>Lifecycle Execution System</h2>
          <p className={styles.modelNote}>We structure the journey across three stages</p>
          <div className={styles.stages}>
            <article className={styles.stage}>
              <span className={styles.stageNum}>01</span>
              <p className={styles.stageTag}>Foundation</p>
              <h3 className={styles.stageTitle}>Clarity Before Momentum</h3>
              <ul className={styles.stageItems}>
                <li>Problem and market validation</li>
                <li>ICP precision</li>
                <li>Business model fundamentals</li>
                <li>Founder alignment</li>
              </ul>
              <p className={styles.stageOutcome}>You know what you are building and why it should win.</p>
            </article>
            <article className={styles.stage}>
              <span className={styles.stageNum}>02</span>
              <p className={styles.stageTag}>Structured Execution</p>
              <h3 className={styles.stageTitle}>Discipline Before Scale</h3>
              <ul className={styles.stageItems}>
                <li>Product and roadmap decisions</li>
                <li>GTM structure</li>
                <li>Hiring logic</li>
                <li>Weekly execution rhythm</li>
                <li>Metrics clarity</li>
              </ul>
              <p className={styles.stageOutcome}>Execution becomes intentional, not reactive.</p>
            </article>
            <article className={styles.stage}>
              <span className={styles.stageNum}>03</span>
              <p className={styles.stageTag}>Fundraise Readiness</p>
              <h3 className={styles.stageTitle}>Capital Follows Clarity</h3>
              <ul className={styles.stageItems}>
                <li>Narrative and positioning</li>
                <li>Investor materials</li>
                <li>Mock pitches</li>
                <li>Warm introductions</li>
              </ul>
              <p className={styles.stageOutcome}>Capital strengthens your business, it does not mask weaknesses.</p>
            </article>
          </div>
          <p className={styles.modelFootnote}>We do not push fundraising. We prepare you to be ready.</p>
        </div>
      </section>

      <section id="proof" className={`${styles.section} ${styles.deep} ${styles.fade}`}>
        <div className={styles.wrap}>
          <p className={`${styles.label} ${styles.proofLabel}`}>Built With Founders</p>
          <h2 className={styles.proofHeading}>Insights From Building. Not Observing.</h2>
          <div className={styles.logoStrip}>
            <span className={styles.logoTag}>The OneLeap</span>
            <span className={styles.logoTag}>FlexiFunnel</span>
            <span className={styles.logoTag}>Scaler</span>
            <span className={styles.logoTag}>Ascendra Advisors</span>
          </div>
          <div className={styles.testimonials}>
            <article className={styles.testimonialCard}>
              <span className={styles.quoteMark}>&quot;</span>
              <p className={styles.testimonialText}>
                Gorkha brought structure to our chaos. Within weeks we had a clear ICP, a sharper
                pitch, and an execution rhythm that actually held. They do not just advise - they
                build with you.
              </p>
              <p className={styles.testimonialName}>Founder, The OneLeap</p>
              <p className={styles.testimonialRole}>Series A - EdTech</p>
            </article>
            <article className={styles.testimonialCard}>
              <span className={styles.quoteMark}>&quot;</span>
              <p className={styles.testimonialText}>
                I came in with conviction but no clarity. Gorkha challenged every assumption until
                what remained was something defensible. That discipline changed the trajectory of
                our raise.
              </p>
              <p className={styles.testimonialName}>Founder, Ascendra Advisors</p>
              <p className={styles.testimonialRole}>Pre-Seed - FinTech</p>
            </article>
          </div>
        </div>
      </section>

      <section id="fit" className={`${styles.section} ${styles.fade}`}>
        <div className={styles.wrap}>
          <p className={`${styles.label} ${styles.proofLabel}`}>Who this is for</p>
          <h2 className={styles.filterHeading}>Selective. By Choice.</h2>

          <div className={styles.filterGrid}>
            <div>
              <p className={`${styles.filterHead} ${styles.filterHeadFor}`}>This is for you if -</p>
              <ul className={`${styles.filterList} ${styles.filterListFor}`}>
                <li>You&apos;re building something real</li>
                <li>You value discipline over optics</li>
                <li>You&apos;re open to being challenged</li>
                <li>You think long-term</li>
              </ul>
            </div>

            <div>
              <p className={styles.filterHead}>This is not for you if -</p>
              <ul className={`${styles.filterList} ${styles.filterListNot}`}>
                <li>You&apos;re collecting ideas</li>
                <li>You&apos;re seeking grants</li>
                <li>You&apos;re driven by hype</li>
                <li>You think in short-term</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className={`${styles.section} ${styles.deep} ${styles.fade}`}>
        <div className={styles.wrap}>
          <p className={`${styles.label} ${styles.proofLabel}`}>Application flow</p>
          <h2 className={styles.processHeading}>How We Work With Founders.</h2>

          <div className={styles.processSteps}>
            <article className={styles.processStep}>
              <p className={styles.processNum}>Step 01</p>
              <h3 className={styles.processTitle}>Apply</h3>
              <p className={styles.processBody}>
                Tell us what you are building. Be honest about where you are and where you want to
                go.
              </p>
            </article>
            <article className={styles.processStep}>
              <p className={styles.processNum}>Step 02</p>
              <h3 className={styles.processTitle}>Conversation</h3>
              <p className={styles.processBody}>
                We assess clarity, commitment, and alignment - not polish or pitch decks.
              </p>
            </article>
            <article className={styles.processStep}>
              <p className={styles.processNum}>Step 03</p>
              <h3 className={styles.processTitle}>Decision</h3>
              <p className={styles.processBody}>
                We move forward only with mutual conviction. Both sides decide.
              </p>
            </article>
          </div>

          <p className={styles.processNote}>We review a limited number of founders at a time.</p>
        </div>
      </section>

      <section id="apply" className={`${styles.apply} ${styles.fade}`}>
        <div className={styles.wrap}>
          <p className={styles.label}>Ready to Build</p>
          <h2 className={styles.finalHeading}>
            Ambition is common.
            <br />
            Resilient companies <span className={styles.sky}>are not.</span>
          </h2>
          <p className={styles.heroSub}>If you&apos;re serious about building - let&apos;s begin.</p>
          <a href="/contact" className={styles.btnFill}>Apply to Founder Program -&gt;</a>
        </div>
      </section>

      <section className={`${styles.section} ${styles.deep}`}>
        <div className={styles.wrap}>
          <div className={styles.investorStrip}>
            <div>
              <p className={styles.label}>Offering for Investors</p>
              <h2 className={styles.h2}>Access Execution-Ready Deal Flow.</h2>
              <p className={styles.whatBody}>
                We work with investors who want more than a deck - curated pipeline access,
                operator-level diligence intelligence, and post-investment execution support built
                in.
              </p>
            </div>
            <a href="/services/offerings-for-investors" className={styles.btnFill}>
              Explore Investor Offering -&gt;
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
