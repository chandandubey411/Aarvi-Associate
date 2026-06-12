import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { teamMembers } from '../../data/team'
import { Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

// Custom SVG brand icons (removed from lucide-react v3+)
const LinkedinIcon = ({ size = 14, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const InstagramIcon = ({ size = 14, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

export default function Team() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-padding bg-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full filter blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold" />
            <span className="section-label">Our Professionals</span>
            <div className="h-px w-10 bg-gold" />
          </div>
          <h2 className="section-title-white mb-4">
            Meet Our Expert <span className="gold-text">Team</span>
          </h2>
          <p className="font-poppins text-white/40 max-w-xl mx-auto">
            Our experienced agents bring unmatched expertise, market knowledge and dedication to every client interaction.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group relative bg-dark-700 rounded-3xl overflow-hidden border border-white/5 hover:border-gold/30 transition-all duration-500 hover:shadow-gold"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-72">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />

                {/* Social Icons - appear on hover */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={member.social.linkedin}
                    className="w-8 h-8 rounded-full glass flex items-center justify-center hover:bg-gold transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedinIcon size={14} className="text-white" />
                  </a>
                  <a
                    href={member.social.instagram}
                    className="w-8 h-8 rounded-full glass flex items-center justify-center hover:bg-gold transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon size={14} className="text-white" />
                  </a>
                  <a
                    href={`https://wa.me/${member.social.whatsapp}`}
                    className="w-8 h-8 rounded-full glass flex items-center justify-center hover:bg-gold transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone size={14} className="text-white" />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold text-white mb-1 group-hover:text-gold transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="font-inter text-gold text-sm font-medium mb-2">{member.designation}</p>
                <p className="font-inter text-white/40 text-xs mb-3">{member.specialization}</p>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div>
                    <div className="font-playfair text-2xl font-bold text-white">{member.propertiesSold}+</div>
                    <div className="font-inter text-xs text-white/40">Properties Sold</div>
                  </div>
                  <div className="glass rounded-xl px-3 py-2">
                    <div className="font-inter text-sm text-gold font-semibold">{member.experience}</div>
                    <div className="font-inter text-xs text-white/40">Experience</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
