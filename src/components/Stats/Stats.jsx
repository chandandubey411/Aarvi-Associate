import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const stats = [
  { value: 500, suffix: '+', label: 'Properties Sold', desc: 'Across NCR Region' },
  { value: 1200, suffix: '+', label: 'Happy Clients', desc: 'And Still Growing' },
  { value: 15, suffix: '+', label: 'Years Experience', desc: 'In Real Estate' },
  { value: 98, suffix: '%', label: 'Client Satisfaction', desc: 'Verified Reviews' },
]

// Self-contained animated counter — no external dependency needed
function AnimatedCounter({ end, duration = 2000, suffix = '', delay = 0, started }) {
  const [count, setCount] = useState(0)
  const rafRef = useRef(null)
  const startedRef = useRef(false)

  useEffect(() => {
    if (!started || startedRef.current) return
    startedRef.current = true

    const timeout = setTimeout(() => {
      const startTime = performance.now()

      const tick = (now) => {
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)
        // Ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(Math.round(eased * end))

        if (progress < 1) {
          rafRef.current = requestAnimationFrame(tick)
        }
      }

      rafRef.current = requestAnimationFrame(tick)
    }, delay)

    return () => {
      clearTimeout(timeout)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [started, end, duration, delay])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section ref={ref} className="py-20 px-4 md:px-8 lg:px-16 xl:px-24 bg-gold-gradient">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              className="text-center"
            >
              <div className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-1">
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  duration={2200}
                  delay={index * 150}
                  started={inView}
                />
              </div>
              <div className="font-inter font-bold text-dark/80 text-base mb-1">{stat.label}</div>
              <div className="font-inter text-dark/60 text-sm">{stat.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
