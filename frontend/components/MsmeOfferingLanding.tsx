'use client'

import { useEffect, useState } from 'react'
import ContactForm from './ContactForm'
import styles from './MsmeOfferingLanding.module.css'

export default function MsmeOfferingLanding() {
  const [isHealthCheckOpen, setIsHealthCheckOpen] = useState(false)

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
    if (!isHealthCheckOpen) return

    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsHealthCheckOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = overflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isHealthCheckOpen])

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroShell}>
            <p className={styles.heroTag}>Program for MSME · Uttarakhand</p>
            <h1 className={styles.heroHeading}>
              Your business
              <br />
              deserves to
              <br />
              <span>grow.</span>
            </h1>
            <p className={styles.heroLead}>
              You&apos;ve built something real. You&apos;ve kept it alive through every hard season. Now
              it&apos;s time to build a business that doesn&apos;t depend entirely on you and grows beyond
              your current ceiling.
            </p>
            <p className={styles.heroSubline}>
              We know Uttarakhand. We understand MSMEs. And we don&apos;t arrive with city solutions
              that don&apos;t fit mountain realities.
            </p>

            <div className={styles.heroCtaRow}>
              <button
                type="button"
                className={styles.heroCtaPrimary}
                onClick={() => setIsHealthCheckOpen(true)}
              >
                Get your free health check -&gt;
              </button>
              <a href="#problem" className={styles.heroCtaGhost}>
                See how we help -&gt;
              </a>
            </div>

            <div className={styles.heroStats}>
              <div>
                <strong>90%</strong>
                <small>of MSMEs are fully founder-dependent</small>
              </div>
              <div>
                <strong>&gt;20%</strong>
                <small>monthly cash shortfall per rupee earned</small>
              </div>
              <div>
                <strong>1 in 3</strong>
                <small>MSMEs close within 3 years - avoidable with the right support</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className={`${styles.problem} ${styles.reveal}`}>
        <div className={styles.container}>
          <p className={styles.problemEyebrow}>We see your reality</p>
          <h2 className={styles.problemHeading}>
            You are working hard.
            <br />
            The business should too.
          </h2>
          <p className={styles.problemIntro}>
            Uttarakhand&apos;s MSME owners are some of the most resilient business builders in the
            country. But geography, limited infrastructure, and a gap in practical support have kept
            too many businesses in survival mode - working harder, not growing stronger. That
            changes here.
          </p>

          <div className={styles.realityCards}>
            <article className={styles.realityCard}>
              <p className={styles.realityQuote}>
                &quot;I work 14 hours a day. But if I take one day off, everything stops.&quot;
              </p>
              <h3 className={styles.realityTitle}>The trapped founder</h3>
              <p className={styles.realityBody}>
                Your business runs on you. Every order, every supplier call, every customer
                complaint, it all comes back to you. The moment you step away, revenue stalls. This
                isn&apos;t a character flaw. It&apos;s a structural problem and it&apos;s fixable.
              </p>
            </article>
            <article className={styles.realityCard}>
              <p className={styles.realityQuote}>
                &quot;Revenue looks fine. But somehow there&apos;s never enough cash at the end of the
                month.&quot;
              </p>
              <h3 className={styles.realityTitle}>The invisible cash gap</h3>
              <p className={styles.realityBody}>
                Your customers pay in 30 days. Your suppliers want payment in 15. That 15-day gap,
                silent, consistent, compounding, is the single biggest killer of healthy MSMEs. Not
                the market. Not competition. The gap.
              </p>
            </article>
            <article className={styles.realityCard}>
              <p className={styles.realityQuote}>
                &quot;I have loyal customers. But I&apos;ve had the same revenue for 3 years.&quot;
              </p>
              <h3 className={styles.realityTitle}>The growth ceiling</h3>
              <p className={styles.realityBody}>
                Business is good, but not growing. All your customers come from referrals. The local
                market has a ceiling. And without a sales system, digital presence, or structured
                GTM, you&apos;re one slow season away from a bad year.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className={`${styles.solution} ${styles.reveal}`}>
        <div className={styles.container}>
          <p className={styles.solutionEyebrow}>How this works in practice</p>
          <h2 className={styles.solutionHeading}>We start with your biggest problem.</h2>
          <p className={styles.solutionIntro}>
            Every MSME works differently, so we don&apos;t run a fixed template. We begin where the pain
            is highest, then build systems around what your business actually needs.
          </p>

          <div className={styles.executionBoard}>
            <article className={styles.executionPain}>
              <header className={styles.executionPainHeader}>
                <p className={styles.executionPainCode}>
                  <span>Pain</span>
                  <span>Point 01</span>
                </p>
                <h3 className={styles.executionPainTitle}>Cash flow crisis</h3>
                <span className={styles.executionPainBadge}>Most common</span>
              </header>
              <blockquote className={styles.executionPainQuote}>
                Revenue ₹100. Expenses ₹120+. Creditors want money in 15 days. Customers pay in 30.
              </blockquote>
              <div className={styles.executionPainGrid}>
                <div className={styles.executionPainList}>
                  <div className={styles.painItem}>
                    <span className={styles.painItemBullet} aria-hidden />
                    <div>
                      <h4 className={styles.painItemTitle}>The mismatch</h4>
                      <p className={styles.painItemBody}>
                        Collections arrive 30 days out. Bills are due in 15. The gap kills businesses
                        silently — not dramatically, but consistently.
                      </p>
                    </div>
                  </div>
                  <div className={styles.painItem}>
                    <span className={styles.painItemBullet} aria-hidden />
                    <div>
                      <h4 className={styles.painItemTitle}>Loan misuse</h4>
                      <p className={styles.painItemBody}>
                        Working capital loans taken for emergencies get used for personal needs —
                        leaving the business exposed when the next crisis arrives.
                      </p>
                    </div>
                  </div>
                  <div className={styles.painItem}>
                    <span className={styles.painItemBullet} aria-hidden />
                    <div>
                      <h4 className={styles.painItemTitle}>Creditor erosion</h4>
                      <p className={styles.painItemBody}>
                        Missed payments damage supplier relationships. Credit terms shrink from 30 to
                        15 to 7 days — a tightening noose with every cycle.
                      </p>
                    </div>
                  </div>
                  <div className={styles.painItem}>
                    <span className={styles.painItemBullet} aria-hidden />
                    <div>
                      <h4 className={styles.painItemTitle}>Dead inventory</h4>
                      <p className={styles.painItemBody}>
                        Overstocking ties up lakhs in slow-moving goods. Capital sits on shelves while
                        bills go unpaid.
                      </p>
                    </div>
                  </div>
                </div>
                <aside className={styles.executionPainVisual} aria-label="Cash gap diagram">
                  <p className={styles.executionVisualLabel}>The cash gap</p>
                  <div className={styles.cashGapStack}>
                    <div className={styles.cashGapBoxRev}>
                      <strong>Revenue ₹100</strong>
                      <span>Collected: Day 30</span>
                    </div>
                    <div className={styles.cashGapDash} aria-hidden />
                    <div className={styles.cashGapBoxExp}>
                      <strong>Expenses ₹120+</strong>
                      <span>Due: Day 15</span>
                    </div>
                    <div className={styles.cashGapBoxResult}>
                      <strong>15-day cash gap → business stall</strong>
                    </div>
                  </div>
                </aside>
              </div>
            </article>

            <article className={styles.executionPain}>
              <header className={styles.executionPainHeader}>
                <p className={styles.executionPainCode}>
                  <span>Pain</span>
                  <span>Point 02</span>
                </p>
                <h3 className={styles.executionPainTitle}>The founder bottleneck</h3>
                <span className={styles.executionPainBadge}>Most limiting</span>
              </header>
              <blockquote className={styles.executionPainQuote}>
                If the owner is sick, the business is sick. If the owner is on holiday, the business
                stops.
              </blockquote>
              <div className={styles.executionPainGrid}>
                <div className={styles.executionPainList}>
                  <div className={styles.painItem}>
                    <span className={styles.painItemBullet} aria-hidden />
                    <div>
                      <h4 className={styles.painItemTitle}>Solo salesperson</h4>
                      <p className={styles.painItemBody}>
                        The founder is the only one who sells. Every new order, every negotiation,
                        every client call — all on one pair of shoulders. The business cannot grow
                        faster than one person can run.
                      </p>
                    </div>
                  </div>
                  <div className={styles.painItem}>
                    <span className={styles.painItemBullet} aria-hidden />
                    <div>
                      <h4 className={styles.painItemTitle}>Referral dependency</h4>
                      <p className={styles.painItemBody}>
                        Sales happen only through personal contacts and word-of-mouth. No referral = no
                        pipeline. Business plateaus when the network plateaus.
                      </p>
                    </div>
                  </div>
                  <div className={styles.painItem}>
                    <span className={styles.painItemBullet} aria-hidden />
                    <div>
                      <h4 className={styles.painItemTitle}>No management systems</h4>
                      <p className={styles.painItemBody}>
                        No SOPs. No KPIs. No team structure. Growth means the founder works harder —
                        not smarter. A capability gap that widens over time.
                      </p>
                    </div>
                  </div>
                </div>
                <aside className={styles.executionPainVisual} aria-label="Founder bottleneck diagram">
                  <p className={styles.executionVisualLabel}>Everything flows through you</p>
                  <div className={styles.bottleneckCircle}>
                    <span>Every decision</span>
                  </div>
                  <div className={styles.bottleneckGrid}>
                    <div>
                      <span className={styles.bottleneckCellTitle}>Sales</span>
                      <p>Only you sell</p>
                    </div>
                    <div>
                      <span className={styles.bottleneckCellTitle}>Operations</span>
                      <p>Only you manage</p>
                    </div>
                    <div>
                      <span className={styles.bottleneckCellTitle}>Finance</span>
                      <p>Only you track</p>
                    </div>
                    <div>
                      <span className={styles.bottleneckCellTitle}>Suppliers</span>
                      <p>Only you negotiate</p>
                    </div>
                  </div>
                  <p className={styles.bottleneckFoot}>
                    The goal: build a business that runs without you.
                  </p>
                </aside>
              </div>
            </article>

            <article className={styles.executionPain}>
              <header className={styles.executionPainHeader}>
                <p className={styles.executionPainCode}>
                  <span>Pain</span>
                  <span>Point 03</span>
                </p>
                <h3 className={styles.executionPainTitle}>Revenue without a plan</h3>
                <span className={styles.executionPainBadge}>Most urgent to fix</span>
              </header>
              <blockquote className={styles.executionPainQuote}>
                Great product. Loyal customers. But revenue has been the same for 3 years.
              </blockquote>
              <div className={styles.executionPainGrid}>
                <div className={styles.executionPainList}>
                  <div className={styles.painItem}>
                    <span className={styles.painItemBullet} aria-hidden />
                    <div>
                      <h4 className={styles.painItemTitle}>No sales process</h4>
                      <p className={styles.painItemBody}>
                        Orders arrive by chance, not by design. Without a structured sales funnel or
                        team, revenue growth is stuck to luck — and luck is not a strategy.
                      </p>
                    </div>
                  </div>
                  <div className={styles.painItem}>
                    <span className={styles.painItemBullet} aria-hidden />
                    <div>
                      <h4 className={styles.painItemTitle}>No KPIs or metrics</h4>
                      <p className={styles.painItemBody}>
                        Without tracking leads, conversions, and customer lifetime value, owners
                        can&apos;t see what to fix — or what&apos;s working.
                      </p>
                    </div>
                  </div>
                  <div className={styles.painItem}>
                    <span className={styles.painItemBullet} aria-hidden />
                    <div>
                      <h4 className={styles.painItemTitle}>Zero online presence</h4>
                      <p className={styles.painItemBody}>
                        Customers searching online can&apos;t find you. Competitors with a basic digital
                        presence are taking market share — including customers who would have chosen you.
                      </p>
                    </div>
                  </div>
                  <div className={styles.painItem}>
                    <span className={styles.painItemBullet} aria-hidden />
                    <div>
                      <h4 className={styles.painItemTitle}>The local ceiling</h4>
                      <p className={styles.painItemBody}>
                        Uttarakhand&apos;s terrain limits walk-in customers. Without e-commerce and digital
                        reach, the addressable market stays small — permanently.
                      </p>
                    </div>
                  </div>
                </div>
                <aside className={styles.executionPainVisual} aria-label="Revenue blockers">
                  <p className={styles.executionVisualLabel}>Revenue blockers</p>
                  <ul className={styles.blockerList}>
                    <li>
                      <span className={styles.blockerLabel}>Online visibility</span>
                      <div className={styles.blockerTrack}>
                        <div className={`${styles.blockerFill} ${styles.blockerFillWarn}`} style={{ width: '22%' }} />
                      </div>
                      <span className={`${styles.blockerStatus} ${styles.blockerStatusWarn}`}>Low</span>
                    </li>
                    <li>
                      <span className={styles.blockerLabel}>Sales system</span>
                      <div className={styles.blockerTrack}>
                        <div className={`${styles.blockerFill} ${styles.blockerFillBad}`} style={{ width: '12%' }} />
                      </div>
                      <span className={`${styles.blockerStatus} ${styles.blockerStatusBad}`}>None</span>
                    </li>
                    <li>
                      <span className={styles.blockerLabel}>Geographic reach</span>
                      <div className={styles.blockerTrack}>
                        <div className={`${styles.blockerFill} ${styles.blockerFillMuted}`} style={{ width: '28%' }} />
                      </div>
                      <span className={`${styles.blockerStatus} ${styles.blockerStatusMuted}`}>Local</span>
                    </li>
                    <li>
                      <span className={styles.blockerLabel}>Customer retention</span>
                      <div className={styles.blockerTrack}>
                        <div className={`${styles.blockerFill} ${styles.blockerFillGood}`} style={{ width: '78%' }} />
                      </div>
                      <span className={`${styles.blockerStatus} ${styles.blockerStatusGood}`}>Strong</span>
                    </li>
                  </ul>
                  <p className={styles.blockersNote}>
                    You have product strength and loyal customers. What&apos;s missing is the system to
                    convert that into consistent, predictable revenue.
                  </p>
                </aside>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className={`${styles.msmeThesis} ${styles.reveal}`}>
        <div className={styles.container}>
          <p className={styles.msmeThesisEyebrow}>The Gorkha Thesis</p>
          <h2 className={styles.msmeThesisHeading}>We solve these problems before you write a check.</h2>

          <div className={styles.msmeThesisGrid}>
            <div className={styles.msmeThesisCopy}>
              <p>
                Most of the risk in early-stage investing is front-loaded. The first 12-18 months
                of a startup&apos;s life determine whether it will be worth investing in and most
                investors never see this phase.
              </p>
              <p>
                Gorkha is embedded in that phase. We work alongside founders from the earliest
                decisions: validating market hypothesis, sharpening ICP, structuring execution
                systems, and building the discipline to hold the company together under pressure.
              </p>
              <p>
                By the time a Gorkha portfolio company is investor-ready, the expensive work is
                already done. You don&apos;t get the raw, unformed version. You get the company that
                has survived first contact with reality and built structure from it.
              </p>

              <blockquote className={styles.msmeThesisPull}>
                Capital deployed into structured companies is capital deployed well.
              </blockquote>
            </div>

            <div className={styles.msmeThesisTimeline}>
              <article className={styles.msmeThesisItem}>
                <p className={styles.msmeThesisStage}>Stage 01 - Foundation</p>
                <h3>Clarity before momentum</h3>
                <p>
                  Market validation, ICP precision, business model fundamentals, and founder
                  alignment. The company knows what it&apos;s building and why it should win.
                </p>
                <span>Gorkha embedded</span>
              </article>

              <article className={styles.msmeThesisItem}>
                <p className={styles.msmeThesisStage}>Stage 02 - Structured execution</p>
                <h3>Discipline before scale</h3>
                <p>
                  GTM structure, hiring logic, weekly execution rhythm, metrics clarity. Execution
                  becomes intentional and repeatable.
                </p>
                <span>Gorkha embedded</span>
              </article>

              <article className={styles.msmeThesisItem}>
                <p className={styles.msmeThesisStage}>Stage 03 - Fundraise readiness</p>
                <h3>Capital follows clarity</h3>
                <p>
                  Narrative, investor materials, mock pitches, warm introductions. Companies are
                  raised to investors, not shopped.
                </p>
                <span className={styles.msmeThesisStrong}>Investor entry point</span>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.services} ${styles.reveal}`}>
        <div className={styles.container}>
          <p className={styles.modulesEyebrow}>What the program offers your business</p>
          <h2 className={styles.modulesHeading}>
            Three modules.
            <br />One integrated programme.
          </h2>
          <p className={styles.modulesIntro}>
            Each module addresses a distinct structural problem. They&apos;re available independently
            or as a complete growth programme, structured to fit MSME budgets and realities.
          </p>

          <div className={styles.modulesBoard}>
            <article className={styles.moduleColumn}>
              <div className={styles.moduleHead}>
                <p className={styles.moduleTag}>Module 01</p>
                <h3>Cash Flow Rescue</h3>
                <p className={styles.moduleSubtitle}>Stabilise in 60 days</p>
              </div>
              <ul className={styles.moduleList}>
                <li>Business vs personal finance separation</li>
                <li>Creditor-debtor cycle audit and fix</li>
                <li>Inventory planning and dead-stock analysis</li>
                <li>Working capital discipline framework</li>
              </ul>
              <p className={styles.moduleNote}>Visible results in the first 30 days</p>
              <a href="#contact" className={styles.moduleBtn}>Get started with this module</a>
            </article>

            <article className={styles.moduleColumn}>
              <div className={styles.moduleHead}>
                <p className={styles.moduleTag}>Module 02</p>
                <h3>Founder Freedom</h3>
                <p className={styles.moduleSubtitle}>Build your second line</p>
              </div>
              <ul className={styles.moduleList}>
                <li>First sales hire recruitment and training</li>
                <li>SOP and process documentation</li>
                <li>KPI dashboard for non-founders</li>
                <li>Delegation and accountability structure</li>
              </ul>
              <p className={styles.moduleNote}>Business that works without you</p>
              <a href="#contact" className={styles.moduleBtn}>Enquire about this module</a>
            </article>

            <article className={styles.moduleColumn}>
              <div className={styles.moduleHead}>
                <p className={styles.moduleTag}>Module 03</p>
                <h3>Revenue Engine</h3>
                <p className={styles.moduleSubtitle}>Grow beyond your network</p>
              </div>
              <ul className={styles.moduleList}>
                <li>Structured GTM plan tailored to your category</li>
                <li>Digital storefront and online sales setup</li>
                <li>Customer retention and referral system</li>
                <li>Pan-India market entry roadmap</li>
              </ul>
              <p className={styles.moduleNote}>Revenue that doesn&apos;t depend on season</p>
              <a href="#contact" className={styles.moduleBtn}>Enquire about this module</a>
            </article>
          </div>

          <p className={styles.modulesFootnote}>
            All modules available independently or as an integrated growth programme. Pricing
            structured for MSME budgets.
          </p>
        </div>
      </section>

      <section className={`${styles.whySection} ${styles.reveal}`}>
        <div className={styles.container}>
          <div className={styles.whyGrid}>
            <p className={styles.whyEyebrow}>Why Gorkha Ventures</p>
            <h2 className={styles.whyHeading}>
              We know the mountains.
              <br />
              We know the people.
            </h2>
            <p className={styles.whyIntro}>
              We understand MSME owners are skeptical of outsiders and with good reason. That&apos;s
              why our first conversation is about your business, not our fees.
            </p>

            <div className={styles.whyCards}>
              <article className={styles.whyCard}>
                <div className={styles.whyIcon}>⌂</div>
                <h3>Uttarakhand-first</h3>
                <p>
                  Our work is rooted in this region&apos;s unique geography, culture, and market
                  dynamics. No generic city-based playbooks.
                </p>
              </article>
              <article className={styles.whyCard}>
                <div className={styles.whyIcon}>✓</div>
                <h3>Credibility you can verify</h3>
                <p>
                  Our case studies come from local MSMEs. We share names, numbers, and results you
                  can call and confirm.
                </p>
              </article>
              <article className={styles.whyCard}>
                <div className={styles.whyIcon}>◌</div>
                <h3>Problem-first model</h3>
                <p>
                  We solve your most immediate problem before asking for broader engagement. No
                  results, no relationship.
                </p>
              </article>
              <article className={styles.whyCard}>
                <div className={styles.whyIcon}>☐</div>
                <h3>Practical, not academic</h3>
                <p>
                  No jargon. No MBA frameworks that don&apos;t fit. Step-by-step hands-on help that
                  works within your real budget and team size.
                </p>
              </article>
            </div>

            <p className={styles.whyNote}>
              We understand MSME owners are skeptical of outsiders. That&apos;s exactly why our first
              conversation is about your business, not our fees. If we can&apos;t show you a clear path
              forward, we&apos;ll say so.
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.freeCheckSection} ${styles.reveal}`}>
        <div className={styles.container}>
          <div className={styles.freeCheckGrid}>
            <div>
              <p className={styles.freeCheckEyebrow}>Start here - no cost</p>
              <h2 className={styles.freeCheckHeading}>
                Free Business
                <br />
                Health Check.
              </h2>
              <p className={styles.freeCheckBody}>
                Before we talk about programmes or fees, we want to understand your business. A
                45-minute conversation where we map your three biggest challenges, identify where
                cash is leaking, and tell you exactly what we&apos;d recommend with no obligation to
                continue.
              </p>
              <p className={styles.freeCheckBody}>If we don&apos;t think we can add clear value, we&apos;ll tell you that too.</p>
              <button
                type="button"
                className={styles.freeCheckBtn}
                onClick={() => setIsHealthCheckOpen(true)}
              >
                Book your free health check -&gt;
              </button>
            </div>

            <div className={styles.freeCheckCards}>
              <article className={styles.freeCheckCard}>
                <p className={styles.freeCheckTag}>What&apos;s included</p>
                <h3>Free 45-min Business Health Check</h3>
                <p>First 10 sign-ups through your union or community</p>
              </article>
              <article className={styles.freeCheckCard}>
                <p className={styles.freeCheckTag}>For your community</p>
                <h3>Workshop for your union</h3>
                <p>No cost, no obligation for union members and community heads</p>
              </article>
              <article className={styles.freeCheckCard}>
                <p className={styles.freeCheckTag}>Direct access</p>
                <h3>WhatsApp helpline</h3>
                <p>Direct access to our Uttarakhand team, real answers, not a bot</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.touchSection} ${styles.reveal}`}>
        <div className={styles.container}>
          <div className={styles.touchGrid}>
            <div>
              <p className={styles.touchEyebrow}>Get in touch</p>
              <h2 className={styles.touchHeading}>
                No pitch.
                <br />
                No pressure.
                <br />
                Just a
                <br />
                conversation.
              </h2>
              <p className={styles.touchBody}>
                Tell us where your business is today and where you want it to be in 12 months.
                We&apos;ll give you an honest assessment, starting with the one problem we&apos;d fix
                first.
              </p>

              <div className={styles.touchMeta}>
                <p><span>Website</span>gorkhaventures.in</p>
                <p><span>Email</span>hello@gorkhaventures.in</p>
                <p><span>Based in</span>Dehradun, Uttarakhand</p>
              </div>
            </div>

            <div className={styles.touchActions}>
              <a href="#contact" className={styles.touchBtnGhost}>WhatsApp us -&gt;</a>
              <button
                type="button"
                className={styles.touchBtnFill}
                onClick={() => setIsHealthCheckOpen(true)}
              >
                Book free health check -&gt;
              </button>
              <p className={styles.touchNote}>Response within 24 hours</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.msmeFinalSection} ${styles.reveal}`}>
        <div className={styles.container}>
          <div className={styles.msmeFinalInner}>
            <p className={styles.msmeFinalEyebrow}>Your business. Your growth.</p>
            <h2 className={styles.msmeFinalHeading}>
              You&apos;ve survived.
              <br />
              Now it&apos;s time
              <br />
              to <span>build.</span>
            </h2>
            <p className={styles.msmeFinalSub}>
              The hard work you&apos;ve already done is the foundation. We&apos;ll help you build the
              structure, the systems, and the revenue engine on top of it.
            </p>
            <div className={styles.msmeFinalButtons}>
              <button
                type="button"
                className={styles.msmeFinalPrimary}
                onClick={() => setIsHealthCheckOpen(true)}
              >
                Get your free health check -&gt;
              </button>
              <a href="/" className={styles.msmeFinalSecondary}>Back to main site</a>
            </div>
          </div>
        </div>
      </section>

      {isHealthCheckOpen && (
        <div
          className="services-form-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="msme-health-check-modal-title"
          onClick={() => setIsHealthCheckOpen(false)}
        >
          <div className="services-form-modal-content" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="services-form-modal-close"
              aria-label="Close form"
              onClick={() => setIsHealthCheckOpen(false)}
            >
              x
            </button>
            <div className="services-form-modal-header">
              <p className="services-form-modal-label">MSME HEALTH CHECK</p>
              <h3 id="msme-health-check-modal-title" className="services-form-modal-title">
                Book your free business health check
              </h3>
            </div>
            <ContactForm
              initialFormType="msme"
              hideSelector
              onBack={() => setIsHealthCheckOpen(false)}
            />
          </div>
        </div>
      )}

    </div>
  )
}
