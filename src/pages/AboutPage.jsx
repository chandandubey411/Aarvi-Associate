import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle2, Award, Users, TrendingUp, Home, Building } from 'lucide-react'
import { Link } from 'react-router-dom'
import Team from '../components/Team/Team'
import Contact from '../components/Contact/Contact'

const milestones = [
  { year: '2009', title: 'Founded', desc: 'Aarvi Associate was established with a vision to revolutionize real estate in NCR.' },
  { year: '2013', title: 'First 100 Properties', desc: 'Achieved our first major milestone of 100 successful property transactions.' },
  { year: '2017', title: 'Commercial Division', desc: 'Launched dedicated commercial real estate division serving corporate clients.' },
  { year: '2020', title: 'Digital Transformation', desc: 'Embraced technology with digital property tours and online documentation.' },
  { year: '2024', title: '500+ Properties', desc: 'Crossed 500 properties sold milestone with 1200+ satisfied clients.' },
]

function PageHero() {
  return (
    <section className="relative h-72 md:h-96 flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600&q=80"
          alt="About Aarvi Associate"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/50 to-dark/90" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24 pb-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="font-inter text-xs text-gold uppercase tracking-widest">Aarvi Associate</span>
            <span className="text-white/30 text-xs">/</span>
            <span className="font-inter text-xs text-white/50">About</span>
          </div>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white">
            About <span className="gold-text">Us</span>
          </h1>
        </motion.div>
      </div>
    </section>
  )
}

export default function AboutPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'About Us – Aarvi Associate | Real Estate Consultancy'
  }, [])

  return (
    <main>
      <PageHero />

      {/* Main About Content */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-gold" />
                <span className="section-label">Our Story</span>
              </div>
              <h2 className="section-title mb-6">
                Trusted Real Estate <span className="gold-text">Partners</span> Since 2009
              </h2>
              <p className="font-poppins text-dark/65 leading-relaxed mb-5">
                Aarvi Associate was born from a simple belief — that every client deserves honest, 
                expert guidance when making one of the most significant decisions of their life. 
                Founded in 2009, we have grown from a small consultancy to one of NCR's most 
                respected real estate firms.
              </p>
              <p className="font-poppins text-dark/65 leading-relaxed mb-8">
                With over 500 successful transactions and 1200+ happy clients, our legacy is built 
                on trust, transparency, and an unwavering commitment to excellence. Our RERA-certified 
                agents bring deep local knowledge and industry expertise to every engagement.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Home, label: '500+ Properties Sold' },
                  { icon: Users, label: '1200+ Happy Clients' },
                  { icon: Award, label: '15+ Years Experience' },
                  { icon: Building, label: 'RERA Registered' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 bg-white rounded-2xl p-4 luxury-shadow">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                      <item.icon className="text-gold" size={18} />
                    </div>
                    <span className="font-inter text-sm font-semibold text-dark">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden luxury-shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80"
                  alt="Aarvi Associate Office"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section ref={ref} className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-gold" />
              <span className="section-label">Our Journey</span>
              <div className="h-px w-10 bg-gold" />
            </div>
            <h2 className="section-title">
              Key <span className="gold-text">Milestones</span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gold/20" />
            <div className="space-y-12">
              {milestones.map((m, index) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="bg-cream rounded-2xl p-6 luxury-shadow inline-block">
                      <div className="font-playfair text-gold text-xl font-bold mb-1">{m.year}</div>
                      <div className="font-playfair text-dark text-lg font-bold mb-2">{m.title}</div>
                      <div className="font-poppins text-dark/60 text-sm">{m.desc}</div>
                    </div>
                  </div>
                  <div className="relative z-10 w-5 h-5 rounded-full bg-gold border-4 border-white shadow-gold flex-shrink-0" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Team />
      <Contact />
    </main>
  )
}
