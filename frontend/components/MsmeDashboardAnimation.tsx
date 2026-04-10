'use client'

import { motion } from 'framer-motion'
import { BarChart3, Clock, PieChart, Users } from 'lucide-react'
import Image from 'next/image'

import styles from './MsmeDashboardAnimation.module.css'

const FILTERS = [
  { label: 'Region', value: 'All' },
  { label: 'Category', value: 'All' },
  { label: 'Channel', value: 'All' },
  { label: 'Segment', value: 'All' },
]

const KPI_CARDS = [
  {
    label: 'Active customers',
    value: '2,847',
    delta: '+12.5% vs last month',
    positive: true,
    Icon: Users,
  },
  {
    label: 'Monthly orders',
    value: '1,482',
    delta: '+8.2% vs last month',
    positive: true,
    Icon: BarChart3,
  },
  {
    label: 'Margin %',
    value: '18.4%',
    delta: '−1.8% vs last month',
    positive: false,
    Icon: PieChart,
  },
  {
    label: 'Avg. fulfilment',
    value: '4.2 d',
    delta: '+0.5% vs last month',
    positive: true,
    Icon: Clock,
  },
] as const

const FUNNEL = [
  { label: 'Leads', color: '#fca311', widthPct: 100 },
  { label: 'Qualified', color: '#e8940f', widthPct: 72 },
  { label: 'Won', color: '#c77d0a', widthPct: 48 },
  { label: 'Repeat', color: '#8a5a08', widthPct: 31 },
] as const

const LINE_PATH =
  'M 4 50 C 28 16 44 54 68 30 S 108 46 132 22 S 168 42 196 28'

export default function MsmeDashboardAnimation() {
  return (
    <div className={styles.root}>
      <aside className={styles.sidebar}>
        <div className={styles.logoWrap}>
          <Image
            src="/logo_white.svg"
            alt=""
            width={132}
            height={36}
            className={styles.logo}
            priority={false}
          />
        </div>

        <div>
          <div className={styles.filterLabel}>Date range</div>
          <div className={styles.dateRow}>
            <div className={styles.datePill}>2025/06/01</div>
            <div className={styles.datePill}>2025/06/30</div>
          </div>
        </div>

        <div className={styles.filters}>
          {FILTERS.map((f) => (
            <div key={f.label}>
              <div className={styles.filterLabel}>{f.label}</div>
              <div className={styles.filterSelect}>
                <span>{f.value}</span>
                <span>▾</span>
              </div>
            </div>
          ))}
        </div>
      </aside>

      <div className={styles.main}>
        <header>
          <h2 className={styles.pageTitle}>Dashboard overview</h2>
          <p className={styles.pageLead}>
            Welcome back — here&apos;s how your MSME operations are performing today.
          </p>
        </header>

        <div className={styles.kpis}>
          {KPI_CARDS.map(({ label, value, delta, positive, Icon }, idx) => (
            <div key={label} className={styles.kpi}>
              <div className={styles.kpiBody}>
                <div className={styles.kpiLabel}>{label}</div>
                <motion.div
                  className={styles.kpiValue}
                  animate={{ opacity: [0.82, 1, 0.9] }}
                  transition={{
                    duration: 4.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: idx * 0.22,
                  }}
                >
                  {value}
                </motion.div>
                <div
                  className={`${styles.kpiDelta} ${positive ? styles.kpiDeltaUp : styles.kpiDeltaDown}`}
                >
                  {delta}
                </div>
              </div>
              <div className={styles.kpiIcon} aria-hidden>
                <Icon size={14} strokeWidth={2} />
              </div>
            </div>
          ))}
        </div>

        <div className={styles.chartsRow}>
          <div className={styles.panel}>
            <h3 className={styles.panelTitle}>Revenue trend</h3>
            <p className={styles.panelSubtitle}>Net sales over the period</p>
            <svg
              className={styles.lineChartSvg}
              viewBox="0 0 200 64"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden
            >
              <defs>
                <linearGradient id="msme-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#fca311" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#fca311" stopOpacity="1" />
                </linearGradient>
              </defs>
              <motion.path
                d={LINE_PATH}
                fill="none"
                stroke="url(#msme-line-grad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0.5 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  pathLength: {
                    duration: 2.6,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatDelay: 1.4,
                  },
                  opacity: { duration: 0.35 },
                }}
              />
            </svg>
          </div>

          <div className={`${styles.panel} ${styles.panelFunnel}`}>
            <h3 className={styles.panelTitle}>Pipeline funnel</h3>
            <p className={styles.panelSubtitle}>Conversion through your sales stages</p>
            <div className={styles.funnel}>
              {FUNNEL.map((step, i) => (
                <div key={step.label} className={styles.funnelRow}>
                  <motion.div
                    className={styles.funnelStep}
                    style={{
                      backgroundColor: step.color,
                    }}
                    initial={{ width: '0%' }}
                    animate={{ width: `${step.widthPct}%` }}
                    transition={{
                      delay: 0.14 * i,
                      duration: 0.65,
                      ease: [0.22, 1, 0.36, 1],
                      repeat: Infinity,
                      repeatDelay: 4.2,
                    }}
                  >
                    {step.label}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <div className={styles.tablePanel}>
            <h3 className={styles.panelTitle}>Recent activity</h3>
            <p className={styles.panelSubtitle}>Latest orders in your network</p>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Status</th>
                  <th>Region</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dehradun Foods</td>
                  <td style={{ color: '#ffb84d' }}>Shipped</td>
                  <td>UK-01</td>
                </tr>
                <tr>
                  <td>Himalaya Crafts</td>
                  <td style={{ color: '#fbbf24' }}>Processing</td>
                  <td>UK-02</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={`${styles.panel} ${styles.panelChannel}`}>
            <h3 className={styles.panelTitle}>Channel mix</h3>
            <p className={styles.panelSubtitle}>Share of revenue by channel</p>
            <div className={styles.donutWrap}>
              <motion.svg
                className={styles.donutSvg}
                viewBox="0 0 40 40"
                aria-hidden
                animate={{ opacity: [0.88, 1, 0.88] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <circle
                  cx="20"
                  cy="20"
                  r="15"
                  fill="none"
                  stroke="rgba(252,163,17,0.12)"
                  strokeWidth="6"
                />
                {/* r=15 → C ≈ 94.25 */}
                <circle
                  cx="20"
                  cy="20"
                  r="15"
                  fill="none"
                  stroke="#fca311"
                  strokeWidth="6"
                  strokeDasharray="40 55"
                  strokeLinecap="round"
                  transform="rotate(-90 20 20)"
                />
                <circle
                  cx="20"
                  cy="20"
                  r="15"
                  fill="none"
                  stroke="#c77d0a"
                  strokeWidth="6"
                  strokeDasharray="33 62"
                  strokeDashoffset="-40"
                  strokeLinecap="round"
                  transform="rotate(-90 20 20)"
                />
                <circle
                  cx="20"
                  cy="20"
                  r="15"
                  fill="none"
                  stroke="#3d6b74"
                  strokeWidth="6"
                  strokeDasharray="22 73"
                  strokeDashoffset="-73"
                  strokeLinecap="round"
                  transform="rotate(-90 20 20)"
                />
              </motion.svg>
              <div className={styles.donutLegend}>
                <div className={styles.legendRow}>
                  <span className={styles.legendSwatch} style={{ background: '#fca311' }} />
                  <span>Retail 42%</span>
                </div>
                <div className={styles.legendRow}>
                  <span className={styles.legendSwatch} style={{ background: '#c77d0a' }} />
                  <span>Online 35%</span>
                </div>
                <div className={styles.legendRow}>
                  <span className={styles.legendSwatch} style={{ background: '#3d6b74' }} />
                  <span>B2B 23%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
