import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-luxury border-b border-gold/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M50 10L90 50L50 90L10 50L50 10Z" stroke="url(#goldGrad)" strokeWidth="4" strokeLinejoin="round" />
                  <path d="M50 28L72 70" stroke="url(#goldGrad)" strokeWidth="5" strokeLinecap="round" />
                  <path d="M50 28L28 70" stroke="url(#goldGrad)" strokeWidth="5" strokeLinecap="round" />
                  <path d="M35 56H65" stroke="url(#goldGrad)" strokeWidth="5" strokeLinecap="round" />
                  <path d="M50 38V56" stroke="url(#goldGrad)" strokeWidth="4" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFE5A3" />
                      <stop offset="30%" stopColor="#C8A46B" />
                      <stop offset="70%" stopColor="#A88247" />
                      <stop offset="100%" stopColor="#FFE5A3" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className={`font-playfair font-bold text-lg leading-tight transition-colors duration-300 ${
                  scrolled ? 'text-dark' : 'text-white'
                }`}>
                  Aarvi Associate
                </span>
                <span className="text-gold text-xs font-inter tracking-wider">
                  Your Trusted Property Partner
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-inter text-sm font-medium transition-all duration-300 relative group ${
                    location.pathname === link.path
                      ? 'text-gold'
                      : scrolled
                      ? 'text-dark/70 hover:text-gold'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gold rounded-full transition-all duration-300 ${
                    location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+919211786678"
                className={`flex items-center gap-2 font-inter text-sm font-medium transition-colors duration-300 ${
                  scrolled ? 'text-dark/70 hover:text-gold' : 'text-white/80 hover:text-gold'
                }`}
              >
                <Phone size={14} />
                +91-9211786678
              </a>
              <Link
                to="/contact"
                className="btn-gold text-sm px-6 py-2.5"
              >
                Book Consultation
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden p-2 rounded-xl transition-colors duration-300 ${
                scrolled ? 'text-dark hover:bg-cream' : 'text-white hover:bg-white/10'
              }`}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-dark/80 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="absolute top-0 right-0 bottom-0 w-80 bg-dark-800 border-l border-gold/20 overflow-y-auto"
            >
              <div className="p-8 pt-24">
                <div className="mb-8 pb-6 border-b border-gold/20">
                  <span className="font-playfair text-2xl text-white block mb-1">Aarvi Associate</span>
                  <span className="text-gold text-sm font-inter">Your Trusted Property Partner</span>
                </div>

                <nav className="flex flex-col gap-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08, duration: 0.3 }}
                    >
                      <Link
                        to={link.path}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl font-inter font-medium transition-all duration-300 ${
                          location.pathname === link.path
                            ? 'bg-gold text-dark'
                            : 'text-white/70 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="mt-8 space-y-4">
                  <a
                    href="tel:+919211786678"
                    className="flex items-center gap-3 text-white/70 hover:text-gold font-inter text-sm transition-colors"
                  >
                    <Phone size={16} />
                    +91-9211786678
                  </a>
                  <Link
                    to="/contact"
                    className="btn-gold w-full text-center block"
                  >
                    Book Consultation
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
