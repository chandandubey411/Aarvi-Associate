import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91-9876543210',
    href: 'tel:+919876543210',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@avniassociate.com',
    href: 'mailto:info@avniassociate.com',
  },
  {
    icon: MapPin,
    label: 'Office Address',
    value: 'Shop No. 46, Near Mother Dairy, Sector 4, Vaishali, Ghaziabad, UP 201010',
    href: '#',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+91-9876543210',
    href: 'https://wa.me/919876543210',
  },
]

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', phone: '', email: '', requirement: '', message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', phone: '', email: '', requirement: '', message: '' })
  }

  return (
    <section ref={ref} id="contact" className="section-padding bg-white">
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
            <span className="section-label">Get In Touch</span>
            <div className="h-px w-10 bg-gold" />
          </div>
          <h2 className="section-title mb-4">
            Contact <span className="gold-text">Our Team</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Have a property in mind? Our experts are ready to help you find your perfect space.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="bg-dark rounded-3xl p-10 h-full relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gold/10 rounded-full filter blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold/5 rounded-full filter blur-2xl" />

              <div className="relative z-10">
                <h3 className="font-playfair text-2xl font-bold text-white mb-2">
                  Let's Connect
                </h3>
                <p className="font-poppins text-white/50 text-sm mb-10">
                  Reach us through any of these channels
                </p>

                <div className="space-y-8">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                      className="flex items-start gap-4 group cursor-pointer"
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-gold/20 flex items-center justify-center group-hover:bg-gold transition-colors duration-300 flex-shrink-0">
                        <item.icon size={20} className="text-gold group-hover:text-dark transition-colors" />
                      </div>
                      <div>
                        <div className="font-inter text-xs text-white/40 uppercase tracking-wider mb-1">
                          {item.label}
                        </div>
                        <div className="font-inter text-sm text-white/80 group-hover:text-gold transition-colors">
                          {item.value}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-white/10">
                  <p className="font-inter text-xs text-white/30 mb-4">Office Hours</p>
                  <p className="font-inter text-sm text-white/60">
                    Monday – Saturday<br />
                    <span className="text-gold font-semibold">9:00 AM – 7:00 PM</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="bg-cream rounded-3xl p-10 luxury-shadow">
              <h3 className="font-playfair text-2xl font-bold text-dark mb-2">Send Inquiry</h3>
              <p className="font-poppins text-dark/50 text-sm mb-8">
                Fill in the details and we'll get back to you within 24 hours.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                    <CheckCircle className="text-emerald-600" size={32} />
                  </div>
                  <h4 className="font-playfair text-xl font-bold text-dark mb-2">Inquiry Sent!</h4>
                  <p className="font-poppins text-dark/60 text-sm">
                    Thank you for reaching out. Our team will contact you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-inter text-xs text-dark/50 uppercase tracking-wide mb-2 block">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="input-luxury"
                        id="contact-name"
                      />
                    </div>
                    <div>
                      <label className="font-inter text-xs text-dark/50 uppercase tracking-wide mb-2 block">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91-XXXXXXXXXX"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="input-luxury"
                        id="contact-phone"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-inter text-xs text-dark/50 uppercase tracking-wide mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="input-luxury"
                      id="contact-email"
                    />
                  </div>

                  <div>
                    <label className="font-inter text-xs text-dark/50 uppercase tracking-wide mb-2 block">
                      Property Requirement
                    </label>
                    <select
                      value={form.requirement}
                      onChange={(e) => setForm({ ...form, requirement: e.target.value })}
                      className="input-luxury"
                      id="contact-requirement"
                    >
                      <option value="">Select Requirement</option>
                      <option>Buy Residential Property</option>
                      <option>Buy Commercial Property</option>
                      <option>Rent / Lease Property</option>
                      <option>Sell My Property</option>
                      <option>Investment Consultation</option>
                      <option>Property Documentation</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-inter text-xs text-dark/50 uppercase tracking-wide mb-2 block">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your property requirements, budget, preferred location..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="input-luxury resize-none"
                      id="contact-message"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="btn-gold w-full flex items-center justify-center gap-2 text-base"
                    id="contact-submit"
                  >
                    <Send size={18} />
                    Send Inquiry
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
