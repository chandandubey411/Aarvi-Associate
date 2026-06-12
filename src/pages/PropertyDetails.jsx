import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Bed, Bath, Maximize2, Phone, MessageCircle, ArrowLeft, ChevronLeft, ChevronRight, CheckCircle2, Send } from 'lucide-react'
import { properties } from '../data/properties'
import PropertyCard from '../components/PropertyCard/PropertyCard'

export default function PropertyDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const property = properties.find((p) => p.id === parseInt(id))
  const [activeImg, setActiveImg] = useState(0)
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (property) {
      document.title = `${property.name} – Avni Associate`
    }
    setActiveImg(0)
  }, [id, property])

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-cream">
        <div className="text-6xl mb-4">🏠</div>
        <h2 className="font-playfair text-3xl font-bold text-dark mb-3">Property Not Found</h2>
        <Link to="/properties" className="btn-gold">Browse All Properties</Link>
      </div>
    )
  }

  const similar = properties.filter((p) => p.type === property.type && p.id !== property.id).slice(0, 3)
  const galleryImages = property.gallery && property.gallery.length > 0
    ? property.gallery
    : [property.image]

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setForm({ name: '', phone: '', message: '' })
  }

  return (
    <main className="bg-cream min-h-screen">
      {/* Back Button */}
      <div className="pt-24 pb-4 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 font-inter text-sm text-dark/60 hover:text-gold transition-colors"
          id="back-button"
        >
          <ArrowLeft size={16} />
          Back to Properties
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24 pb-20">
        {/* Image Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-12">
          {/* Main Image */}
          <div className="lg:col-span-2 relative rounded-3xl overflow-hidden luxury-shadow h-80 md:h-[500px] group">
            <motion.img
              key={activeImg}
              src={galleryImages[activeImg]}
              alt={property.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full object-cover"
            />

            {/* Nav Arrows */}
            {galleryImages.length > 1 && (
              <>
                <button
                  onClick={() => setActiveImg((i) => (i === 0 ? galleryImages.length - 1 : i - 1))}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/30 transition-colors"
                  id="gallery-prev"
                >
                  <ChevronLeft size={20} className="text-white" />
                </button>
                <button
                  onClick={() => setActiveImg((i) => (i === galleryImages.length - 1 ? 0 : i + 1))}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/30 transition-colors"
                  id="gallery-next"
                >
                  <ChevronRight size={20} className="text-white" />
                </button>
              </>
            )}

            {/* Status */}
            <div className="absolute top-5 left-5">
              <span className={`font-inter text-sm font-semibold px-4 py-2 rounded-full ${
                property.status === 'For Sale' ? 'bg-gold text-dark' : 'bg-emerald-500 text-white'
              }`}>
                {property.status}
              </span>
            </div>
          </div>

          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
            {galleryImages.slice(0, 3).map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`relative rounded-2xl overflow-hidden h-36 lg:h-auto transition-all duration-300 ${
                  activeImg === i ? 'ring-2 ring-gold ring-offset-2' : 'opacity-70 hover:opacity-100'
                }`}
                id={`gallery-thumb-${i}`}
              >
                <img src={img} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left: Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-start justify-between flex-wrap gap-4 mb-3">
                <h1 className="font-playfair text-3xl md:text-4xl font-bold text-dark">
                  {property.name}
                </h1>
                <span className="font-playfair text-3xl font-bold gold-text">{property.price}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin size={16} className="text-gold" />
                <span className="font-inter text-dark/60">{property.location}</span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-4">
              {property.bedrooms > 0 && (
                <div className="flex items-center gap-2 bg-white rounded-2xl px-5 py-4 luxury-shadow">
                  <Bed size={20} className="text-gold" />
                  <div>
                    <div className="font-inter font-bold text-dark text-lg">{property.bedrooms}</div>
                    <div className="font-inter text-xs text-dark/50">Bedrooms</div>
                  </div>
                </div>
              )}
              <div className="flex items-center gap-2 bg-white rounded-2xl px-5 py-4 luxury-shadow">
                <Bath size={20} className="text-gold" />
                <div>
                  <div className="font-inter font-bold text-dark text-lg">{property.bathrooms}</div>
                  <div className="font-inter text-xs text-dark/50">Bathrooms</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-2xl px-5 py-4 luxury-shadow">
                <Maximize2 size={20} className="text-gold" />
                <div>
                  <div className="font-inter font-bold text-dark text-lg">{property.area.toLocaleString()}</div>
                  <div className="font-inter text-xs text-dark/50">Sq. Ft.</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-3xl p-8 luxury-shadow">
              <h2 className="font-playfair text-2xl font-bold text-dark mb-4">About This Property</h2>
              <p className="font-poppins text-dark/65 leading-relaxed">{property.description}</p>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-3xl p-8 luxury-shadow">
              <h2 className="font-playfair text-2xl font-bold text-dark mb-6">Amenities & Features</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-gold flex-shrink-0" />
                    <span className="font-inter text-sm text-dark/70">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-3xl p-8 luxury-shadow">
              <h2 className="font-playfair text-2xl font-bold text-dark mb-6">Location</h2>
              <div className="flex items-center gap-2 mb-4">
                <MapPin size={16} className="text-gold" />
                <span className="font-inter text-sm text-dark/60">{property.location}</span>
              </div>
              <div className="rounded-2xl overflow-hidden bg-cream h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="text-gold mx-auto mb-3" size={40} />
                  <p className="font-poppins text-dark/60 text-sm">{property.location}</p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(property.location)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-gold font-inter text-sm font-medium hover:text-gold-dark transition-colors"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Agent Card + Form */}
          <div className="space-y-6">
            {/* Agent Card */}
            <div className="bg-dark rounded-3xl p-8 sticky top-24">
              <div className="text-center mb-6">
                <div className="w-20 h-20 rounded-2xl overflow-hidden mx-auto mb-3 border-2 border-gold/40">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80"
                    alt={property.agent}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-playfair text-white text-xl font-bold">{property.agent}</h3>
                <p className="font-inter text-gold text-sm">Property Advisor</p>
                <p className="font-inter text-white/40 text-xs mt-1">Avni Associate</p>
              </div>

              <div className="space-y-3 mb-6">
                <a
                  href={`tel:${property.agentPhone}`}
                  className="flex items-center justify-center gap-2 btn-gold w-full"
                  id="agent-call"
                >
                  <Phone size={16} />
                  Call Agent
                </a>
                <a
                  href={`https://wa.me/${property.agentPhone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-6 rounded-full border-2 border-emerald-500 text-emerald-400 font-inter font-semibold text-sm hover:bg-emerald-500 hover:text-white transition-all duration-300"
                  id="agent-whatsapp"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </div>

              {/* Quick Form */}
              <div className="border-t border-white/10 pt-6">
                <h4 className="font-playfair text-white text-lg font-bold mb-4">Send a Message</h4>
                {submitted ? (
                  <div className="text-center py-6">
                    <CheckCircle2 className="text-gold mx-auto mb-2" size={32} />
                    <p className="font-inter text-white/60 text-sm">Message sent!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-inter text-sm text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-gold"
                      id="agent-form-name"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-inter text-sm text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-gold"
                      id="agent-form-phone"
                    />
                    <textarea
                      rows={3}
                      placeholder={`Inquiry about ${property.name}...`}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-inter text-sm text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-gold resize-none"
                      id="agent-form-message"
                    />
                    <button
                      type="submit"
                      className="btn-gold w-full flex items-center justify-center gap-2"
                      id="agent-form-submit"
                    >
                      <Send size={15} />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Similar Properties */}
        {similar.length > 0 && (
          <section className="mt-20">
            <div className="flex items-center gap-3 mb-10">
              <div className="h-px w-8 bg-gold" />
              <h2 className="font-playfair text-3xl font-bold text-dark">
                Similar <span className="gold-text">Properties</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {similar.map((p, i) => (
                <PropertyCard key={p.id} property={p} index={i} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
