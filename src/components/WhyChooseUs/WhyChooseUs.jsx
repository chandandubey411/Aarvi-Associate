import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, CheckSquare, BadgeDollarSign, Scale, Zap, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Trusted Agents',
    desc: 'RERA-certified, background-verified agents with proven track records and years of expertise.',
    color: 'text-amber-500',
    bg: 'bg-amber-50',
  },
  {
    icon: CheckSquare,
    title: 'Verified Listings',
    desc: 'Every property is personally inspected and legally verified before being listed on our platform.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: BadgeDollarSign,
    title: 'Best Pricing',
    desc: 'Our deep market knowledge ensures you always get the best price whether buying or selling.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Scale,
    title: 'Legal Assistance',
    desc: 'Complete legal support from title verification to stamp duty, registration and handover.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    icon: Zap,
    title: 'Quick Deals',
    desc: 'Our extensive network of buyers and sellers ensures fast closings without compromising quality.',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
  },
  {
    icon: BarChart3,
    title: 'Investment Guidance',
    desc: 'Expert ROI analysis and market trend insights to maximize your real estate investment returns.',
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
  },
]

export default function WhyChooseUs() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold" />
            <span className="section-label">Our Advantages</span>
            <div className="h-px w-10 bg-gold" />
          </div>
          <h2 className="section-title mb-4">
            Why Choose <span className="gold-text">Aarvi Associate</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            We combine local expertise, trusted partnerships, and cutting-edge market intelligence 
            to deliver an unmatched real estate experience.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group p-8 rounded-3xl border border-cream-dark bg-cream hover:bg-white hover:border-gold/30 hover:shadow-luxury transition-all duration-500 cursor-default"
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`${feature.color}`} size={26} />
              </div>
              <h3 className="font-playfair text-xl font-bold text-dark mb-3 group-hover:text-gold transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="font-poppins text-sm text-dark/60 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
