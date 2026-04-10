'use client'

import { motion } from 'framer-motion'
import { useId } from 'react'

import styles from './InvestorMarketAnimation.module.css'

const CANDLES = [
  { o: 0.4, h: 0.46, l: 0.38, c: 0.44 },
  { o: 0.44, h: 0.49, l: 0.42, c: 0.46 },
  { o: 0.46, h: 0.52, l: 0.44, c: 0.5 },
  { o: 0.5, h: 0.54, l: 0.47, c: 0.49 },
  { o: 0.49, h: 0.53, l: 0.46, c: 0.48 },
  { o: 0.48, h: 0.56, l: 0.47, c: 0.54 },
  { o: 0.54, h: 0.58, l: 0.51, c: 0.53 },
  { o: 0.53, h: 0.6, l: 0.52, c: 0.58 },
  { o: 0.58, h: 0.63, l: 0.55, c: 0.61 },
  { o: 0.61, h: 0.65, l: 0.58, c: 0.64 },
] as const

const VOLUME = [0.32, 0.4, 0.55, 0.48, 0.42, 0.62, 0.5, 0.68, 0.58, 0.75] as const

const W = 280
const H = 108
const PAD = { t: 8, r: 10, b: 8, l: 10 }
const INNER_W = W - PAD.l - PAD.r
const INNER_H = H - PAD.t - PAD.b

function yFor(p: number) {
  return PAD.t + (1 - p) * INNER_H
}

const TABS = ['Chart', 'Pipeline', 'Statistics', 'Analyst'] as const

const ORDER_ASKS = [
  { p: '$4.8M', a: '0.42', t: '2.02' },
  { p: '$4.6M', a: '0.55', t: '2.53' },
  { p: '$4.4M', a: '0.38', t: '1.67' },
] as const

const ORDER_BIDS = [
  { p: '$4.1M', a: '0.62', t: '2.54' },
  { p: '$3.9M', a: '0.71', t: '2.77' },
  { p: '$3.7M', a: '0.48', t: '1.78' },
] as const

const PEERS = [
  { t: 'SaaS-A', d: 'M0 14 L10 10 L20 12 L30 4 L40 8 L48 6', pct: '+8.4%' },
  { t: 'FINT-B', d: 'M0 8 L12 12 L24 6 L36 10 L48 4', pct: '+3.1%' },
  { t: 'HEAL-C', d: 'M0 12 L14 6 L28 10 L40 5 L48 8', pct: '+1.2%' },
  { t: 'LOG-D', d: 'M0 6 L16 14 L32 8 L48 12', pct: '+5.6%' },
] as const

const RANGES = ['1D', '5D', '1M', '1Y'] as const

export default function InvestorMarketAnimation() {
  const uid = useId().replace(/:/g, '')
  const dotsId = `inv-dots-${uid}`
  const gradLineId = `inv-line-${uid}`

  const n = CANDLES.length
  const slot = INNER_W / n
  const bodyW = Math.max(3.5, slot * 0.34)

  return (
    <div
      className={styles.root}
      role="img"
      aria-label="Illustrative investor trading-style dashboard with chart and deal metrics"
    >
      <header className={styles.heroBar}>
        <div className={styles.heroLeft}>
          <span className={styles.heroTicker}>GV · PIPELINE</span>
          <span className={styles.heroName}>Pre-seed index (illustrative)</span>
        </div>
        <div className={styles.heroMid}>
          <span className={styles.heroPrice}>104.28</span>
          <span className={styles.heroChange}>+0.84%</span>
        </div>
        <div className={styles.heroActions}>
          <span className={styles.btnGhost}>Review</span>
          <span className={styles.btnFill}>Allocate</span>
        </div>
      </header>

      <nav className={styles.tabRow} aria-hidden>
        {TABS.map((tab, i) => (
          <span key={tab} className={`${styles.tab} ${i === 0 ? styles.tabActive : ''}`}>
            {tab}
          </span>
        ))}
      </nav>

      <div className={styles.split}>
        <div className={styles.chartCard}>
          <div className={styles.chartCardHead}>
            <h3 className={styles.chartCardTitle}>Nasdaq-style · Early-stage basket</h3>
            <span className={styles.chartCardMeta}>Live · illustrative</span>
          </div>

          <svg
            className={styles.candleSvg}
            viewBox={`0 0 ${W} ${H}`}
            preserveAspectRatio="xMidYMid meet"
            aria-hidden
          >
            <defs>
              <pattern id={dotsId} width="6" height="6" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.45" fill="rgba(252, 163, 17, 0.11)" />
              </pattern>
              <linearGradient id={gradLineId} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fca311" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#fca311" stopOpacity="1" />
              </linearGradient>
            </defs>
            <rect
              x={PAD.l}
              y={PAD.t}
              width={INNER_W}
              height={INNER_H}
              fill={`url(#${dotsId})`}
              rx="4"
            />

            {[0, 0.25, 0.5, 0.75, 1].map((g) => (
              <line
                key={g}
                x1={PAD.l}
                x2={W - PAD.r}
                y1={yFor(g)}
                y2={yFor(g)}
                stroke="rgba(252, 163, 17, 0.07)"
                strokeWidth="0.5"
                vectorEffect="non-scaling-stroke"
              />
            ))}

            {CANDLES.map((c, i) => {
              const cx = PAD.l + slot * i + slot / 2
              const yH = yFor(c.h)
              const yL = yFor(c.l)
              const yO = yFor(c.o)
              const yC = yFor(c.c)
              const top = Math.min(yO, yC)
              const bot = Math.max(yO, yC)
              const up = c.c >= c.o
              const fill = up ? '#ffb84d' : '#f87171'
              const stroke = up ? '#fca311' : '#fca5a5'

              return (
                <g key={i}>
                  <line
                    x1={cx}
                    x2={cx}
                    y1={yH}
                    y2={yL}
                    stroke={stroke}
                    strokeWidth="1.1"
                    strokeLinecap="round"
                  />
                  <motion.rect
                    x={cx - bodyW / 2}
                    y={top}
                    width={bodyW}
                    height={Math.max(bot - top, 1.2)}
                    rx={0.8}
                    fill={fill}
                    stroke={stroke}
                    strokeWidth="0.5"
                    animate={{ opacity: [0.75, 1, 0.88] }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.12,
                    }}
                  />
                </g>
              )
            })}

            <motion.path
              d="M 12 78 C 40 52 80 62 120 38 S 200 48 268 28"
              fill="none"
              stroke={`url(#${gradLineId})`}
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeDasharray="4 3"
              initial={{ pathLength: 0, opacity: 0.3 }}
              animate={{ pathLength: 1, opacity: 0.85 }}
              transition={{
                pathLength: { duration: 2.4, ease: 'easeInOut', repeat: Infinity, repeatDelay: 2.2 },
              }}
            />
          </svg>

          <div className={styles.volumeRow}>
            {VOLUME.map((v, i) => (
              <motion.div
                key={i}
                className={styles.volumeBar}
                style={{
                  height: `${Math.round(v * 100)}%`,
                  background:
                    CANDLES[i].c >= CANDLES[i].o
                      ? 'linear-gradient(180deg, rgba(252,163,17,0.45) 0%, rgba(252,163,17,0.1) 100%)'
                      : 'linear-gradient(180deg, rgba(248,113,113,0.4) 0%, rgba(248,113,113,0.08) 100%)',
                }}
                animate={{ opacity: [0.7, 1, 0.8] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.06,
                }}
              />
            ))}
          </div>

          <div className={styles.chartFooter}>
            <div className={styles.rangePills}>
              {RANGES.map((r, i) => (
                <span key={r} className={`${styles.rangePill} ${i === 2 ? styles.rangePillActive : ''}`}>
                  {r}
                </span>
              ))}
            </div>
            <span className={styles.shareHint}>Export</span>
          </div>
        </div>

        <aside className={styles.ticket}>
          <p className={styles.ticketTitle}>Deal ticket</p>
          <div className={styles.ticketField}>
            <span className={styles.ticketLabel}>Dry powder</span>
            <span className={styles.ticketValue}>$12.4M</span>
          </div>
          <div className={styles.ticketField}>
            <span className={styles.ticketLabel}>Ticket size</span>
            <span className={styles.ticketValue}>$400K</span>
          </div>
          <div className={styles.ticketField}>
            <span className={styles.ticketLabel}>Entry</span>
            <span className={styles.ticketValue}>Pre-seed</span>
          </div>
          <button type="button" className={styles.ticketBtn}>
            Commit
          </button>
        </aside>
      </div>

      <div className={styles.bottomGrid}>
        <div className={styles.bottomCard}>
          <h4 className={styles.bottomTitle}>Order book</h4>
          <div className={styles.obHeader}>
            <span>Price</span>
            <span>Amt</span>
            <span>Total</span>
          </div>
          {ORDER_ASKS.map((row, i) => (
            <div key={`a-${i}`} className={`${styles.obRow} ${styles.obAsk}`}>
              <div
                className={`${styles.obBar} ${styles.obBarAsk}`}
                style={{
                  width: `${40 + i * 14}%`,
                  background: '#f87171',
                }}
              />
              <span className={styles.obCell}>{row.p}</span>
              <span className={styles.obCell}>{row.a}</span>
              <span className={styles.obCell}>{row.t}</span>
            </div>
          ))}
          {ORDER_BIDS.map((row, i) => (
            <div key={`b-${i}`} className={`${styles.obRow} ${styles.obBid}`}>
              <div
                className={`${styles.obBar} ${styles.obBarBid}`}
                style={{
                  width: `${36 + i * 16}%`,
                  background: '#ffb84d',
                }}
              />
              <span className={styles.obCell}>{row.p}</span>
              <span className={styles.obCell}>{row.a}</span>
              <span className={styles.obCell}>{row.t}</span>
            </div>
          ))}
        </div>

        <div className={styles.bottomCard}>
          <h4 className={styles.bottomTitle}>Peer momentum</h4>
          {PEERS.map((p) => (
            <div key={p.t} className={styles.peerRow}>
              <span className={styles.peerTicker}>{p.t}</span>
              <svg className={styles.peerSpark} viewBox="0 0 48 16" preserveAspectRatio="none" aria-hidden>
                <path
                  d={p.d}
                  fill="none"
                  stroke="#fca311"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className={styles.peerPct}>{p.pct}</span>
            </div>
          ))}
        </div>

        <div className={styles.bottomCard}>
          <h4 className={styles.bottomTitle}>Capital mix</h4>
          <div className={styles.capLegend}>
            <span className={styles.capLeg}>
              <span className={styles.capDot} style={{ background: '#f87171' }} />
              Reserves
            </span>
            <span className={styles.capLeg}>
              <span className={styles.capDot} style={{ background: '#fbbf24' }} />
              Follow-on
            </span>
            <span className={styles.capLeg}>
              <span className={styles.capDot} style={{ background: '#ffb84d' }} />
              New deals
            </span>
            <span className={styles.capLeg}>
              <span className={styles.capDot} style={{ background: '#fca311' }} />
              Mgmt fees
            </span>
          </div>
          <p className={styles.capLine}>
            <span className={styles.capMuted}>Deployed EV · </span>$48.2M
          </p>
          <p className={styles.capLine}>
            <span className={styles.capMuted}>Uncalled · </span>$19.6M
          </p>
        </div>
      </div>
    </div>
  )
}
