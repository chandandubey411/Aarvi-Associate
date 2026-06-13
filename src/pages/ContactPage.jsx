import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Contact from '../components/Contact/Contact'
import Team from '../components/Team/Team'

function PageHero() {
  return (
    <section className="relative h-72 md:h-96 flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80"
          alt="Contact Aarvi Associate"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 to-dark/90" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24 pb-12 w-full">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-inter text-xs text-gold uppercase tracking-widest">Aarvi Associate</span>
            <span className="text-white/30 text-xs">/</span>
            <span className="font-inter text-xs text-white/50">Contact</span>
          </div>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white">
            Contact <span className="gold-text">Us</span>
          </h1>
          <p className="font-poppins text-white/60 text-lg mt-3 max-w-lg">
            Our expert team is ready to help you find your perfect property.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Contact Us – Aarvi Associate | Get In Touch'
  }, [])

  return (
    <main>
      <PageHero />
      <Contact />
      <Team />
    </main>
  )
}
