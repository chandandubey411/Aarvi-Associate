import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const values = [
  { title: 'Mission', text: 'To make premium property ownership accessible and transparent for every client through honest guidance and expert knowledge.' },
  { title: 'Vision', text: 'To become the most trusted real estate brand in the NCR region, setting the gold standard for luxury property transactions.' },
  { title: 'Values', text: 'Integrity, Transparency, Excellence, and Client-First approach in every interaction and transaction.' },
]

const highlights = [
  '500+ Successful Property Transactions',
  '1200+ Satisfied Clients Across NCR',
  'RERA Registered & Legally Compliant',
  '15+ Years of Market Expertise',
]

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section ref={ref} className="section-padding bg-cream">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Images */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden luxury-shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80"
                alt="Luxury Property - Aarvi Associate"
                className="w-full h-[550px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
            </div>
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute bottom-4 right-4 md:-bottom-8 md:-right-8 glass-cream rounded-2xl p-4 md:p-6 luxury-shadow gold-border"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gold-gradient flex items-center justify-center shadow-gold">
                  <span className="font-playfair font-bold text-xl md:text-2xl text-dark">15</span>
                </div>
                <div>
                  <div className="font-playfair text-dark font-bold text-sm md:text-lg leading-tight">Years of</div>
                  <div className="font-inter text-gold text-xs md:text-sm font-semibold tracking-wide">Excellence</div>
                </div>
              </div>
            </motion.div>

            {/* Small accent image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="hidden md:block absolute -top-6 -left-6 w-36 h-36 rounded-2xl overflow-hidden luxury-shadow gold-border"
            >
              <img
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=200&q=80"
                alt="Premium Interior"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-gold" />
              <span className="section-label">About Us</span>
            </div>

            <h2 className="section-title mb-6">
              About Aarvi<br />
              <span className="gold-text">Associate</span>
            </h2>

            <p className="section-subtitle mb-8">
              Aarvi Associate is a trusted real estate consultancy helping clients buy, sell, rent and invest 
              in premium residential and commercial properties across the NCR region. We bring transparency, 
              expertise, and a client-first approach to every transaction.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="text-gold mt-0.5 flex-shrink-0" size={18} />
                  <span className="font-inter text-sm text-dark/70 leading-snug">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Mission / Vision / Values */}
            <div className="space-y-4 mb-10">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.12, duration: 0.5 }}
                  className="p-5 rounded-2xl bg-white luxury-shadow gold-border group hover:border-gold transition-all duration-300"
                >
                  <h4 className="font-playfair font-bold text-dark text-lg mb-1 group-hover:text-gold transition-colors">
                    {v.title}
                  </h4>
                  <p className="font-inter text-sm text-dark/60 leading-relaxed">{v.text}</p>
                </motion.div>
              ))}
            </div>

            <Link to="/about" className="btn-gold flex items-center gap-2 w-fit">
              Learn More About Us
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
