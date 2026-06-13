import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Home, Tag, Key, Building2, TrendingUp, FileText, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { services } from '../data/services'
import Contact from '../components/Contact/Contact'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs'

const iconMap = { Home, Tag, Key, Building2, TrendingUp, FileText }

function PageHero() {
  return (
    <section className="relative h-72 md:h-96 flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
          alt="Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 to-dark/90" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24 pb-12 w-full">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-inter text-xs text-gold uppercase tracking-widest">Aarvi Associate</span>
            <span className="text-white/30 text-xs">/</span>
            <span className="font-inter text-xs text-white/50">Services</span>
          </div>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white">
            Our <span className="gold-text">Services</span>
          </h1>
        </motion.div>
      </div>
    </section>
  )
}

export default function ServicesPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Services – Aarvi Associate | Real Estate Solutions'
  }, [])

  return (
    <main>
      <PageHero />

      {/* Services Detail */}
      <section ref={ref} className="section-padding bg-cream">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-gold" />
              <span className="section-label">Comprehensive Solutions</span>
              <div className="h-px w-10 bg-gold" />
            </div>
            <h2 className="section-title mb-4">
              What We <span className="gold-text">Offer</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              From buying and selling to investment consulting and documentation, we cover every 
              aspect of real estate with unmatched expertise and dedication.
            </p>
          </motion.div>

          <div className="space-y-12">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon]
              const isEven = index % 2 === 0
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.7 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Image Side */}
                  <div className={`relative ${!isEven ? 'lg:order-2' : ''}`}>
                    <div className="rounded-3xl overflow-hidden luxury-shadow-lg h-72 md:h-96">
                      <img
                        src={[
                          'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=700&q=80',
                          'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&q=80',
                          'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=700&q=80',
                          'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80',
                          'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=700&q=80',
                          'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80',
                        ][index]}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* Floating Card */}
                    <div className={`absolute ${isEven ? 'bottom-4 right-4 md:-bottom-6 md:-right-6' : 'bottom-4 left-4 md:-bottom-6 md:-left-6'} glass-cream rounded-2xl p-4 md:p-5 luxury-shadow gold-border`}>
                      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-2`}>
                        {Icon && <Icon className="text-white" size={18} />}
                      </div>
                      <div className="font-playfair font-bold text-dark text-sm md:text-base">{service.title}</div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={!isEven ? 'lg:order-1' : ''}>
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-lg`}>
                      {Icon && <Icon className="text-white" size={24} />}
                    </div>
                    <h3 className="font-playfair text-3xl font-bold text-dark mb-4">{service.title}</h3>
                    <p className="font-poppins text-dark/65 leading-relaxed mb-6">{service.description}</p>

                    <div className="space-y-3 mb-8">
                      {service.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-3">
                          <CheckCircle2 size={18} className="text-gold flex-shrink-0" />
                          <span className="font-inter text-sm text-dark/70 font-medium">{feat}</span>
                        </div>
                      ))}
                    </div>

                    <Link to="/contact" className="btn-gold flex items-center gap-2 w-fit">
                      Get Started
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <Contact />
    </main>
  )
}
