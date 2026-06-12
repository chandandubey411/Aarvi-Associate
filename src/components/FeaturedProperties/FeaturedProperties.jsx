import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PropertyCard from '../PropertyCard/PropertyCard'
import { properties } from '../../data/properties'

export default function FeaturedProperties() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const featured = properties.filter((p) => p.featured)

  return (
    <section ref={ref} className="section-padding bg-cream">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-gold" />
              <span className="section-label">Handpicked For You</span>
            </div>
            <h2 className="section-title">
              Featured <span className="gold-text">Properties</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Link
              to="/properties"
              className="flex items-center gap-2 font-inter text-sm font-semibold text-gold hover:text-gold-dark transition-colors group"
            >
              View All Properties
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Property Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-16 rounded-3xl bg-dark overflow-hidden relative"
        >
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80"
              alt="Luxury Home"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative z-10 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-2">
                Can't Find What You're Looking For?
              </h3>
              <p className="font-poppins text-white/60 text-sm">
                Our agents can help you find the perfect property that meets all your requirements.
              </p>
            </div>
            <Link to="/contact" className="btn-gold whitespace-nowrap flex items-center gap-2">
              Talk to an Agent
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
