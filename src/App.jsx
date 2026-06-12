import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/919876543210?text=Hello%2C%20I%20am%20interested%20in%20a%20property%20from%20Avni%20Associate."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg hover:bg-emerald-600 transition-colors duration-300"
      id="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} className="text-white" fill="white" />
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-30" />
    </motion.a>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <WhatsAppFloat />
    </BrowserRouter>
  )
}

export default App
