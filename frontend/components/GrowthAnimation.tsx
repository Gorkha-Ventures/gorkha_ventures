'use client'

import { animate, motion, useMotionValue, useMotionValueEvent } from 'framer-motion'
import { Box, Lightbulb, Megaphone, Rocket } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const ANIMATION_DURATION = 6

type MilestoneProps = {
  icon: React.ReactNode
  label: string
  active: boolean
  left: string
  top: string
  isFinal?: boolean
}

type CounterProps = {
  value: ReturnType<typeof useMotionValue<number>>
  from: number
  to: number
  prefix?: string
  suffix?: string
}

function Counter({ value, from, to, prefix = '', suffix = '' }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)

  useMotionValueEvent(value, 'change', (latest) => {
    if (!ref.current) return
    const eased = Math.pow(latest, 2.7)
    const current = Math.floor(from + eased * (to - from))
    ref.current.textContent = `${prefix}${current.toLocaleString()}${suffix}`
  })

  return <span ref={ref} />
}

function DecimalCounter({ value, from, to, prefix = '', suffix = '' }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)

  useMotionValueEvent(value, 'change', (latest) => {
    if (!ref.current) return
    const eased = Math.pow(latest, 2.7)
    const current = from + eased * (to - from)

    let formatted = ''
    if (current < 1) formatted = current.toFixed(4)
    else if (current < 10) formatted = current.toFixed(2)
    else formatted = current.toFixed(1)

    ref.current.textContent = `${prefix}${formatted}${suffix}`
  })

  return <span ref={ref} />
}

function Milestone({ icon, label, active, left, top, isFinal }: MilestoneProps) {
  return (
    <div
      style={{
        position: 'absolute',
        left,
        top,
        transform: 'translate(-50%, -100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <motion.div
        initial={{ scale: 0.7, opacity: 0.2, y: 8 }}
        animate={active ? { scale: 1, opacity: 1, y: 0 } : { scale: 0.7, opacity: 0.25, y: 8 }}
        transition={{ type: 'spring', stiffness: 280, damping: 20 }}
        style={{
          width: isFinal ? 48 : 44,
          height: isFinal ? 48 : 44,
          borderRadius: 999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: isFinal ? '#22d3ee' : 'rgba(13, 13, 13, 0.84)',
          border: '1px solid rgba(115, 216, 224, 0.35)',
          boxShadow: isFinal
            ? '0 0 28px rgba(34, 211, 238, 0.55)'
            : '0 0 14px rgba(34, 211, 238, 0.25)',
        }}
      >
        {icon}
      </motion.div>
      <motion.span
        initial={{ opacity: 0, y: 4 }}
        animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 4 }}
        style={{
          marginTop: 8,
          padding: '2px 8px',
          fontSize: 10,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          borderRadius: 999,
          border: '1px solid rgba(255,255,255,0.12)',
          background: 'rgba(10, 10, 10, 0.6)',
          color: '#bfeff2',
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </motion.span>
    </div>
  )
}

export default function GrowthAnimation() {
  const progress = useMotionValue(0)
  const [activeMilestone, setActiveMilestone] = useState<number | null>(null)
  const pathD = 'M 0 300 L 300 300 C 500 300, 600 300, 800 50'
  const contentScale = 0.84

  useEffect(() => {
    const controls = animate(progress, 1, {
      duration: ANIMATION_DURATION,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatDelay: 0.8,
      onUpdate: (latest) => {
        if (latest > 0.15 && latest < 0.25) setActiveMilestone(1)
        else if (latest > 0.35 && latest < 0.45) setActiveMilestone(2)
        else if (latest > 0.6 && latest < 0.7) setActiveMilestone(3)
        else if (latest > 0.92) setActiveMilestone(4)
        else setActiveMilestone(null)
      },
    })
    return () => controls.stop()
  }, [progress])

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          transform: `scale(${contentScale})`,
          transformOrigin: 'center center',
        }}
      >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.14,
          backgroundImage: 'radial-gradient(circle at center, #0ea5e9 1px, transparent 1px)',
          backgroundSize: '34px 34px',
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: 18,
          top: 14,
          zIndex: 4,
          color: '#eaf9fb',
          fontSize: 13,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
        }}
      >
        Annual Revenue
        <div style={{ marginTop: 8, fontSize: 46, fontWeight: 300, letterSpacing: '-0.02em' }}>
          <Counter value={progress} from={0} to={12500000} prefix="$" />
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 18,
          top: 122,
          zIndex: 4,
          display: 'flex',
          gap: 40,
          color: '#d9e5e7',
        }}
      >
        <div>
          <div style={{ fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.7 }}>
            Team Size
          </div>
          <div style={{ marginTop: 8, fontSize: 24, fontWeight: 300, letterSpacing: '-0.01em' }}>
            <Counter value={progress} from={2} to={140} />
            <span style={{ marginLeft: 8, fontSize: 14, opacity: 0.55 }}>people</span>
          </div>
        </div>
        <div>
          <div style={{ fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.7 }}>
            Customers
          </div>
          <div style={{ marginTop: 8, fontSize: 24, fontWeight: 300, letterSpacing: '-0.01em' }}>
            <DecimalCounter value={progress} from={0.0001} to={200} suffix=" Mn" />
            <span style={{ marginLeft: 8, fontSize: 14, opacity: 0.55 }}>users</span>
          </div>
        </div>
      </div>

      <svg
        viewBox="0 0 800 400"
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          position: 'relative',
          zIndex: 3,
        }}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="gv-line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
            <stop offset="20%" stopColor="#22d3ee" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="1" />
          </linearGradient>
          <filter id="gv-glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.path
          d={pathD}
          fill="none"
          stroke="url(#gv-line-gradient)"
          strokeWidth="4"
          strokeLinecap="round"
          filter="url(#gv-glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1], opacity: [0, 1, 1, 0] }}
          transition={{
            duration: ANIMATION_DURATION,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 0.8,
          }}
        />

        <circle r="5.5" fill="#fff" filter="url(#gv-glow)">
          <animateMotion
            dur={`${ANIMATION_DURATION}s`}
            repeatCount="indefinite"
            path={pathD}
            keyPoints="0;1"
            keyTimes="0;1"
            calcMode="spline"
            keySplines="0.42 0 0.58 1"
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            dur={`${ANIMATION_DURATION}s`}
            repeatCount="indefinite"
            keyTimes="0;0.1;0.9;1"
          />
        </circle>
      </svg>

      <div style={{ position: 'absolute', inset: 0, zIndex: 5, pointerEvents: 'none' }}>
        <Milestone
          icon={<Lightbulb size={16} color="#bff7fb" />}
          label="Idea"
          active={activeMilestone === 1}
          left="20%"
          top="72%"
        />
        <Milestone
          icon={<Box size={16} color="#bff7fb" />}
          label="Product"
          active={activeMilestone === 2}
          left="35%"
          top="72%"
        />
        <Milestone
          icon={<Megaphone size={16} color="#bff7fb" />}
          label="GTM"
          active={activeMilestone === 3}
          left="65%"
          top="62%"
        />
        <Milestone
          icon={<Rocket size={18} color="#0d0d0d" />}
          label="Scale"
          active={activeMilestone === 4}
          left="95%"
          top="12%"
          isFinal
        />
      </div>
      </div>
    </div>
  )
}
