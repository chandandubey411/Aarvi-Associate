import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronDown, ArrowRight, Home, Users, Award } from 'lucide-react'

const stats = [
  { icon: Home, value: '500+', label: 'Properties Sold' },
  { icon: Users, value: '1200+', label: 'Happy Clients' },
  { icon: Award, value: '15+', label: 'Years Experience' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, 200])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  return (
    <section ref={ref} className="relative h-screen min-h-[660px] lg:min-h-[700px] flex items-center overflow-hidden pt-28 pb-16 lg:py-0">
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 scale-110"
      >
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=90"
          alt="Luxury Villa"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/50 to-dark/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/60 via-transparent to-transparent" />
      </motion.div>

      {/* Decorative Gold Line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold to-transparent opacity-60" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Label */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gold" />
            <span className="section-label">Premium Real Estate</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={fadeUp}
            className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] mb-6"
          >
            Find Your{' '}
            <span className="shimmer-gold">Dream</span>
            <br />
            Property Today
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeUp}
            className="font-poppins text-lg md:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed"
          >
            Luxury Homes, Apartments, Commercial Spaces & Investment Properties — 
            curated for discerning buyers across the NCR region.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-16">
            <Link to="/properties" className="btn-gold flex items-center gap-2 text-base">
              Explore Properties
              <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn-outline-white flex items-center gap-2 text-base">
              Contact Agent
            </Link>
          </motion.div>

          {/* Floating Stat Cards */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.15, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="glass rounded-2xl px-6 py-4 flex items-center gap-4 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center">
                  <stat.icon className="text-gold" size={20} />
                </div>
                <div>
                  <div className="font-playfair text-2xl font-bold text-white">{stat.value}</div>
                  <div className="font-inter text-xs text-white/60 tracking-wide">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-inter text-xs text-white/50 tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="text-gold" size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}
