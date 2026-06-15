import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Suspense, lazy } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const Home = lazy(() => import('../pages/Home'))
const AboutPage = lazy(() => import('../pages/AboutPage'))
const ServicesPage = lazy(() => import('../pages/ServicesPage'))
const ContactPage = lazy(() => import('../pages/ContactPage'))
const Properties = lazy(() => import('../pages/Properties'))
const PropertyDetails = lazy(() => import('../pages/PropertyDetails'))

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -10 },
}

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.4,
}

function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center shadow-gold animate-pulse">
          <span className="font-playfair font-bold text-2xl text-dark">A</span>
        </div>
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-gold animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function AppRoutes() {
  const location = useLocation()

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="flex-1"
        >
          <Suspense fallback={<LoadingSpinner />}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/properties/:id" element={<PropertyDetails />} />
              <Route path="*" element={
                <div className="min-h-screen flex flex-col items-center justify-center bg-cream">
                  <div className="text-8xl mb-6">🏠</div>
                  <h1 className="font-playfair text-4xl font-bold text-dark mb-3">Page Not Found</h1>
                  <p className="font-poppins text-dark/60 mb-8">The page you're looking for doesn't exist.</p>
                  <a href="/" className="btn-gold">Go Back Home</a>
                </div>
              } />
            </Routes>
          </Suspense>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  )
}
