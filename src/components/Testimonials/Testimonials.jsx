import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '../../data/testimonials'

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? 'fill-gold text-gold' : 'text-white/20'}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [activeIndex, setActiveIndex] = useState(0)

  const prev = () => setActiveIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))
  const next = () => setActiveIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1))

  const visible = [
    testimonials[activeIndex],
    testimonials[(activeIndex + 1) % testimonials.length],
    testimonials[(activeIndex + 2) % testimonials.length],
  ]

  return (
    <section ref={ref} className="section-padding bg-cream">
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
            <span className="section-label">Client Reviews</span>
            <div className="h-px w-10 bg-gold" />
          </div>
          <h2 className="section-title mb-4">
            What Our Clients <span className="gold-text">Say</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Real stories from real clients who found their dream properties through Aarvi Associate.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-6">
            <AnimatePresence mode="sync">
              {visible.map((t, i) => (
                <motion.div
                  key={`${t.id}-${activeIndex}`}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`relative rounded-3xl p-8 transition-all duration-500 ${
                    i === 0
                      ? 'bg-dark border border-gold/30 shadow-gold'
                      : 'glass-cream border border-gold/10 luxury-shadow'
                  }`}
                >
                  {/* Quote Icon */}
                  <Quote
                    className={`absolute top-6 right-6 ${i === 0 ? 'text-gold/30' : 'text-gold/15'}`}
                    size={40}
                    fill="currentColor"
                  />

                  {/* Stars */}
                  <StarRating rating={t.rating} />

                  {/* Review */}
                  <p className={`font-poppins text-sm leading-relaxed my-5 ${
                    i === 0 ? 'text-white/70' : 'text-dark/65'
                  }`}>
                    "{t.review}"
                  </p>

                  {/* Client */}
                  <div className="flex items-center gap-4 pt-5 border-t border-white/10">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-gold/40"
                      loading="lazy"
                    />
                    <div>
                      <div className={`font-playfair font-bold text-base ${i === 0 ? 'text-white' : 'text-dark'}`}>
                        {t.name}
                      </div>
                      <div className="font-inter text-xs text-gold">{t.designation}</div>
                      <div className={`font-inter text-xs mt-0.5 ${i === 0 ? 'text-white/40' : 'text-dark/40'}`}>
                        {t.location}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white border border-gold/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300 shadow-luxury group"
            >
              <ChevronLeft size={20} className="text-dark group-hover:text-dark" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === activeIndex ? 'w-6 h-2 bg-gold' : 'w-2 h-2 bg-dark/20 hover:bg-gold/50'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={next}
              className="w-12 h-12 rounded-full bg-white border border-gold/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300 shadow-luxury group"
            >
              <ChevronRight size={20} className="text-dark group-hover:text-dark" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
