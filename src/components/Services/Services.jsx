import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Home, Tag, Key, Building2, TrendingUp, FileText, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { services } from '../../data/services'

const iconMap = { Home, Tag, Key, Building2, TrendingUp, FileText }

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-padding bg-dark">
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
            <span className="section-label">What We Offer</span>
            <div className="h-px w-10 bg-gold" />
          </div>
          <h2 className="section-title-white mb-4">
            Our Premium <span className="gold-text">Services</span>
          </h2>
          <p className="font-poppins text-white/50 max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored to your unique needs, delivered with professionalism and expertise.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon]
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="group relative bg-dark-700 border border-white/5 rounded-3xl p-8 overflow-hidden cursor-pointer transition-all duration-500 hover:border-gold/30 hover:shadow-gold"
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {Icon && <Icon className="text-white" size={24} />}
                </div>

                {/* Content */}
                <h3 className="font-playfair text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-poppins text-sm text-white/50 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 font-inter text-xs text-white/40">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* Arrow */}
                <div className="flex items-center gap-2 text-gold font-inter text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                  Learn More <ArrowRight size={16} />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link to="/services" className="btn-outline-gold">
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
