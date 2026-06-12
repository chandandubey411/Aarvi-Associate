import { motion } from 'framer-motion'
import { MapPin, Bed, Bath, Maximize2, ArrowRight, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function PropertyCard({ property, index = 0 }) {
  const [liked, setLiked] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-3xl overflow-hidden luxury-shadow property-card-hover"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-64">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span className={`font-inter text-xs font-semibold px-3 py-1.5 rounded-full ${
            property.status === 'For Sale'
              ? 'bg-gold text-dark'
              : 'bg-emerald-500 text-white'
          }`}>
            {property.status}
          </span>
        </div>

        {/* Like Button */}
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={(e) => { e.preventDefault(); setLiked(!liked) }}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white transition-colors"
        >
          <Heart
            size={16}
            className={`transition-colors ${liked ? 'fill-rose-500 text-rose-500' : 'text-dark/50'}`}
          />
        </motion.button>

        {/* Price on hover */}
        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
          <span className="font-playfair text-2xl font-bold text-white">{property.price}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Price (visible always on mobile) */}
        <div className="flex items-start justify-between mb-2">
          <span className="font-playfair text-xl font-bold text-dark group-hover:hidden">
            {property.price}
          </span>
          <span className={`font-inter text-xs font-medium px-2.5 py-1 rounded-lg ${
            property.type === 'Commercial'
              ? 'bg-purple-100 text-purple-700'
              : property.type === 'Villa'
              ? 'bg-amber-100 text-amber-700'
              : 'bg-blue-100 text-blue-700'
          }`}>
            {property.type}
          </span>
        </div>

        <h3 className="font-playfair text-lg font-bold text-dark mb-2 group-hover:text-gold transition-colors duration-300 line-clamp-1">
          {property.name}
        </h3>

        <div className="flex items-center gap-1.5 mb-4">
          <MapPin size={14} className="text-gold flex-shrink-0" />
          <span className="font-inter text-sm text-dark/50 line-clamp-1">{property.location}</span>
        </div>

        {/* Details */}
        <div className="flex items-center gap-4 py-4 border-t border-cream-dark">
          {property.bedrooms > 0 && (
            <div className="flex items-center gap-1.5">
              <Bed size={15} className="text-gold" />
              <span className="font-inter text-sm text-dark/60">{property.bedrooms} Beds</span>
            </div>
          )}
          <div className="flex items-center gap-1.5">
            <Bath size={15} className="text-gold" />
            <span className="font-inter text-sm text-dark/60">{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Maximize2 size={15} className="text-gold" />
            <span className="font-inter text-sm text-dark/60">{property.area} sqft</span>
          </div>
        </div>

        {/* CTA */}
        <Link
          to={`/properties/${property.id}`}
          className="flex items-center justify-between mt-4 pt-4 border-t border-cream-dark group/link"
        >
          <span className="font-inter text-sm font-semibold text-gold group-hover/link:text-gold-dark transition-colors">
            View Details
          </span>
          <motion.div
            whileHover={{ x: 4 }}
            className="w-8 h-8 rounded-full bg-gold/10 group-hover/link:bg-gold flex items-center justify-center transition-colors duration-300"
          >
            <ArrowRight size={15} className="text-gold group-hover/link:text-dark transition-colors" />
          </motion.div>
        </Link>
      </div>
    </motion.div>
  )
}
