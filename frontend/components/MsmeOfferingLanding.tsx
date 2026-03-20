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
    q: 'How much does it cost?',
    a: 'Pricing depends on your current stage and selected module. We start with a defined, affordable engagement so you can evaluate outcomes first.',
  },
  {
    q: "We've worked with consultants before and it didn't help.",
    a: 'That is common. Our model is execution-first, not report-first. We work alongside your team until changes are implemented and tracked.',
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
          <p className={styles.problemEyebrow}>The real problem</p>
          <h2 className={styles.problemHeading}>
            Most MSMEs in Uttarakhand are surviving.
            <br />
            Very few are actually growing.
          </h2>
          <p className={styles.problemIntro}>
            You work harder every year. Revenue stays the same. And somehow, there&apos;s never
            enough money at the end of the month. Sound familiar?
          </p>

          <div className={styles.problemCards}>
            <article className={styles.problemCard}>
              <p className={styles.problemCardTag}>01 / Cash Flow</p>
              <h3 className={styles.problemCardTitle}>Revenue Rs100. Expenses Rs120.</h3>
              <p className={styles.problemQuote}>
                &quot;I earn well but I&apos;m always short. I don&apos;t understand where the money
                goes.&quot;
              </p>
              <ul className={styles.problemList}>
                <li>Customers pay you in 30 days. Your creditors want money in 15.</li>
                <li>Working capital gets used for personal needs, then business gets exposed.</li>
                <li>Overstocking ties up capital while bills keep piling up.</li>
                <li>Creditor goodwill erodes and terms shrink quickly.</li>
              </ul>
            </article>
            <article className={styles.problemCard}>
              <p className={styles.problemCardTag}>02 / Founder Bottleneck</p>
              <h3 className={styles.problemCardTitle}>If you stop, everything stops.</h3>
              <p className={styles.problemQuote}>
                &quot;I haven&apos;t taken a proper holiday in 4 years. Every decision needs me.&quot;
              </p>
              <ul className={styles.problemList}>
                <li>You are the only salesperson and new orders depend on your call.</li>
                <li>Sales run only through personal network and plateau with it.</li>
                <li>No SOPs, no delegation, no team that can act without you.</li>
                <li>Growth means only harder work, not scalable execution.</li>
              </ul>
            </article>
            <article className={styles.problemCard}>
              <p className={styles.problemCardTag}>03 / Revenue Growth</p>
              <h3 className={styles.problemCardTitle}>Same customers. Same revenue. Every year.</h3>
              <p className={styles.problemQuote}>
                &quot;I have a great product but I don&apos;t know how to reach more people.&quot;
              </p>
              <ul className={styles.problemList}>
                <li>No structured sales process and no predictable demand engine.</li>
                <li>No KPI tracking, so course correction is delayed.</li>
                <li>Low digital presence while competitors capture mindshare.</li>
                <li>Without digital reach, local market limits become hard ceilings.</li>
              </ul>
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
          <p className={styles.solutionEyebrow}>How we work</p>
          <h2 className={styles.solutionHeading}>
            Start with the burning problem.
            <br />
            Build everything else from there.
          </h2>
          <p className={styles.solutionIntro}>
            We don&apos;t overwhelm you with a 40-page strategy on day one. We solve your most urgent
            pain first, prove our worth, and earn the right to walk with you for the long term.
          </p>

          <div className={styles.solutionTimeline}>
            <article className={styles.timelineItem}>
              <div className={styles.timelineNumber}>01</div>
              <div className={styles.timelineBody}>
                <p className={styles.timelineTag}>Entry point - week 1 to 8</p>
                <h3>Fix the Cash Flow Bleed</h3>
                <p>
                  Cash flow is the most universal and urgent problem for Uttarakhand MSMEs. We begin
                  here because a business that can&apos;t breathe can&apos;t grow. In the first 60 days,
                  we map your actual money cycle, separate business from personal finances, renegotiate
                  creditor terms, and turn dead inventory into working capital.
                </p>
                <div className={styles.timelineChips}>
                  <span>Business-personal finance split</span>
                  <span>Creditor-debtor cycle audit</span>
                  <span>Inventory analysis</span>
                  <span>Working capital discipline framework</span>
                </div>
                <p className={styles.timelineNote}>Most clients see measurable cash flow improvement within 45 days.</p>
              </div>
            </article>

            <article className={styles.timelineItem}>
              <div className={`${styles.timelineNumber} ${styles.timelineNumberDark}`}>02</div>
              <div className={styles.timelineBody}>
                <p className={styles.timelineTag}>Scale-up - month 3 to 6</p>
                <h3>Build the Machine Behind You</h3>
                <p>
                  Once the business is financially stable, we tackle the founder bottleneck. We help
                  you hire and train your first salesperson, document processes so work doesn&apos;t stop
                  when you step away, and create simple KPI dashboards your team can act on.
                </p>
                <div className={styles.timelineChips}>
                  <span>First sales hire + training</span>
                  <span>SOP documentation</span>
                  <span>KPI dashboard</span>
                  <span>Delegation system</span>
                </div>
              </div>
            </article>

            <article className={styles.timelineItem}>
              <div className={`${styles.timelineNumber} ${styles.timelineNumberDark}`}>03</div>
              <div className={styles.timelineBody}>
                <p className={styles.timelineTag}>Acceleration - month 6 onwards</p>
                <h3>Open New Revenue Channels</h3>
                <p>
                  With a stable foundation and a functioning team, you&apos;re ready to grow. We build
                  your digital presence, set up e-commerce, create a structured GTM plan, and help you
                  reach customers well beyond your local network.
                </p>
                <div className={styles.timelineChips}>
                  <span>GTM plan for your category</span>
                  <span>Digital storefront setup</span>
                  <span>Pan-India market entry</span>
                  <span>Customer retention system</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className={`${styles.services} ${styles.reveal}`}>
        <div className={styles.container}>
          <p className={styles.modulesEyebrow}>What we offer</p>
          <h2 className={styles.modulesHeading}>
            Three modules.
            <br />
            One integrated path to growth.
          </h2>
          <p className={styles.modulesIntro}>
            Each module works independently or as part of a full programme. Pricing is structured
            for MSME realities, no city-level consulting fees.
          </p>

          <div className={styles.modulesGrid}>
            <article className={`${styles.moduleCard} ${styles.moduleCardPrimary}`}>
              <div className={styles.moduleHead}>
                <p className={styles.moduleTag}>Module 01</p>
                <span className={styles.moduleBadge}>Start here</span>
              </div>
              <h3>Cash Flow Rescue</h3>
              <p className={styles.moduleSubtitle}>Stabilise in 60 days</p>
              <div className={styles.moduleDivider} />
              <p className={styles.moduleBody}>
                The entry point for most clients. Stop the monthly shortfall, fix the creditor
                cycle, and free up capital that&apos;s sitting in dead inventory.
              </p>
              <ul className={styles.moduleList}>
                <li>Separate business and personal finances cleanly</li>
                <li>Creditor-debtor cycle mapping and renegotiation</li>
                <li>Inventory planning and dead-stock liquidation</li>
                <li>Working capital discipline framework</li>
                <li>Monthly cash flow review system</li>
              </ul>
              <a href="#contact" className={styles.moduleBtn}>Get started with this module</a>
            </article>

            <article className={styles.moduleCard}>
              <p className={styles.moduleTag}>Module 02</p>
              <h3>Founder Freedom</h3>
              <p className={styles.moduleSubtitle}>Build your second line</p>
              <div className={styles.moduleDivider} />
              <p className={styles.moduleBody}>
                Stop being the only person who can run your business. Build systems, hire right,
                and create a team that functions without you watching every step.
              </p>
              <ul className={styles.moduleList}>
                <li>First sales hire: profile, recruitment, onboarding</li>
                <li>SOP documentation for key business functions</li>
                <li>KPI dashboard your team can act on daily</li>
                <li>Delegation and accountability structure</li>
                <li>Weekly management cadence setup</li>
              </ul>
              <a href="#contact" className={styles.moduleBtn}>Enquire about this module</a>
            </article>

            <article className={styles.moduleCard}>
              <p className={styles.moduleTag}>Module 03</p>
              <h3>Revenue Engine</h3>
              <p className={styles.moduleSubtitle}>Grow beyond your network</p>
              <div className={styles.moduleDivider} />
              <p className={styles.moduleBody}>
                Build a sales machine and go-to-market strategy that brings in new customers, not
                just referrals. Reach buyers across India, not just your district.
              </p>
              <ul className={styles.moduleList}>
                <li>Structured GTM plan tailored to your category</li>
                <li>Digital storefront and online sales setup</li>
                <li>Marketplace and direct channel strategy</li>
                <li>Customer retention and referral systems</li>
                <li>Pan-India market entry roadmap</li>
              </ul>
              <a href="#contact" className={styles.moduleBtn}>Enquire about this module</a>
            </article>
          </div>
        </div>
      </section>

      <section className={`${styles.results} ${styles.reveal}`}>
        <div className={styles.container}>
          <p className={styles.resultsEyebrow}>Results</p>
          <h2 className={styles.resultsHeading}>
            MSMEs like yours. Right here in
            <br />
            Uttarakhand.
          </h2>
          <p className={styles.resultsIntro}>
            We share real results from real businesses. Names and numbers you can call and verify,
            no empty promises.
          </p>

          <div className={styles.resultsGrid}>
            <article className={styles.resultCard}>
              <div className={styles.resultHead}>
                <div>
                  <h3>Food Processing Unit</h3>
                  <p>Dehradun, Uttarakhand</p>
                </div>
                <span>Rs3L freed</span>
              </div>
              <div className={styles.resultBody}>
                <div>
                  <p className={styles.resultLabel}>Before</p>
                  <p>
                    Recurring monthly cash shortfall. Creditor relationships strained. Owner taking
                    personal loans to pay suppliers.
                  </p>
                </div>
                <div>
                  <p className={styles.resultLabel}>After 60 days</p>
                  <p>
                    Creditor cycle fixed. Rs3L in slow-moving inventory converted to cash. First
                    month of positive working capital in two years.
                  </p>
                </div>
              </div>
            </article>

            <article className={styles.resultCard}>
              <div className={styles.resultHead}>
                <div>
                  <h3>Handicraft Exporter</h3>
                  <p>Almora, Uttarakhand</p>
                </div>
                <span>+40% revenue</span>
              </div>
              <div className={styles.resultBody}>
                <div>
                  <p className={styles.resultLabel}>Before</p>
                  <p>
                    All sales through founder&apos;s personal network. Revenue plateaued for three
                    consecutive years.
                  </p>
                </div>
                <div>
                  <p className={styles.resultLabel}>After 5 months</p>
                  <p>
                    First sales hire trained and operating. Referral programme launched. Revenue up
                    with new customers from outside Uttarakhand.
                  </p>
                </div>
              </div>
            </article>

            <article className={styles.resultCard}>
              <div className={styles.resultHead}>
                <div>
                  <h3>Herbal Products MSME</h3>
                  <p>Haridwar, Uttarakhand</p>
                </div>
                <span>3x market reach</span>
              </div>
              <div className={styles.resultBody}>
                <div>
                  <p className={styles.resultLabel}>Before</p>
                  <p>
                    Zero online presence. Sales fully dependent on local walk-ins and distributors.
                  </p>
                </div>
                <div>
                  <p className={styles.resultLabel}>After 45 days</p>
                  <p>
                    E-commerce store live. Monthly online orders growing steadily month-on-month.
                  </p>
                </div>
              </div>
            </article>
          </div>

          <article className={styles.resultQuoteCard}>
            <p className={styles.resultQuoteText}>
              Mujhe lagta tha bahar se aakar koi humari situation samajh nahi sakta. Gorkha ne pehle
              sunna shuru kiya, tab baat ki. Pehle mahine mein hi dikh gaya ki kuch badal sakta hai.
            </p>
            <div className={styles.resultQuoteMeta}>
              <p>Ramesh Bisht</p>
              <span>Dry Fruits Trader, Nainital</span>
              <strong>★★★★★</strong>
            </div>
            <p className={styles.resultQuoteTranslation}>
              (Translation: I thought no outsider could understand our situation. Gorkha listened
              first, then spoke. In the first month itself it was clear something could change.)
            </p>
          </article>
        </div>
      </section>

      <section className={`${styles.whySection} ${styles.reveal}`}>
        <div className={styles.container}>
          <div className={styles.whyGrid}>
            <div>
              <p className={styles.whyEyebrow}>Why Gorkha Ventures</p>
              <h2 className={styles.whyHeading}>
                We know the mountains.
                <br />
                We know the people.
                <br />
                We know the problems.
              </h2>
              <p className={styles.whyIntro}>
                Most MSME owners in Uttarakhand are deeply skeptical of outside consultants and
                rightly so. Advice built for metro cities doesn&apos;t translate here. We are from this
                region. We understand trust economy, seasonal dynamics, and the cultural context that
                shapes how business gets done.
              </p>
              <p className={styles.whyQuote}>
                Our first conversation is never about our fees. It&apos;s about your business. We earn
                the relationship before we ask for anything.
              </p>
            </div>

            <div className={styles.whyCards}>
              <article className={styles.whyCard}>
                <h3>Uttarakhand-First Approach</h3>
                <p>
                  No generic city playbooks. Every recommendation is built around the real constraints
                  and opportunities of this geography and market.
                </p>
              </article>
              <article className={styles.whyCard}>
                <h3>Credibility You Can Verify</h3>
                <p>
                  Our case studies include real business names and real numbers. You can call them
                  directly, we don&apos;t hide behind anonymized testimonials.
                </p>
              </article>
              <article className={styles.whyCard}>
                <h3>Problem-First, Not Package-First</h3>
                <p>
                  We start by solving your most urgent problem for a small, defined engagement. No
                  pressure to buy a big programme before you&apos;ve seen what we can do.
                </p>
              </article>
              <article className={styles.whyCard}>
                <h3>Practical, Not Academic</h3>
                <p>
                  No MBA jargon. No 40-page strategy decks. Step-by-step hands-on execution that
                  works within your actual budget, team size, and timeline.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.faq} ${styles.reveal}`}>
        <div className={styles.container}>
          <p className={styles.faqEyebrow}>Common questions</p>
          <h2 className={styles.faqHeading}>What MSME owners ask us before getting started</h2>
          <div className={styles.faqList}>
            {faqItems.map((item, idx) => (
              <div className={`${styles.faqItem} ${openFaq === idx ? styles.open : ''}`} key={item.q}>
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                  <span>{item.q}</span>
                </button>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className={styles.cta}>
        <div className={styles.container}>
          <h2 className={styles.ctaHeading}>
            Ready to stop surviving
            <br />
            and <span className={styles.ctaAccent}>start growing?</span>
          </h2>
          <p className={styles.ctaIntro}>
            Book your free 45-minute Business Health Check. No pitch. No commitment. Just an honest
            look at where your business is and what&apos;s actually holding it back.
          </p>

          <div className={styles.ctaCard}>
            <p className={styles.ctaFormTitle}>Book Your Free Business Health Check</p>
            <form className={styles.ctaForm}>
              <label className={styles.ctaField}>
                <span>Your Name</span>
                <input className={styles.ctaInput} type="text" placeholder="e.g. Suresh Rawat" />
              </label>

              <label className={styles.ctaField}>
                <span>WhatsApp Number</span>
                <input className={styles.ctaInput} type="text" placeholder="+91 98XXX XXXXX" />
              </label>

              <label className={styles.ctaField}>
                <span>Business Type</span>
                <input className={styles.ctaInput} type="text" placeholder="e.g. Dairy products, Handicrafts" />
              </label>

              <label className={styles.ctaField}>
                <span>Annual Revenue (Approx.)</span>
                <select className={styles.ctaSelect} defaultValue="">
                  <option value="" disabled>Select range</option>
                  <option>Under Rs 15L</option>
                  <option>Rs 15L - Rs 50L</option>
                  <option>Rs 50L - Rs 2Cr</option>
                  <option>Above Rs 2Cr</option>
                </select>
              </label>

              <label className={`${styles.ctaField} ${styles.ctaWide}`}>
                <span>Biggest Challenge Right Now</span>
                <input className={styles.ctaInput} type="text" placeholder="What hurts most?" />
              </label>

              <button type="button" className={styles.ctaSubmit}>Book My Free Health Check -&gt;</button>
            </form>
            <p className={styles.ctaFootnote}>
              We will call you within 24 hours to confirm your slot. Available across Uttarakhand.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
