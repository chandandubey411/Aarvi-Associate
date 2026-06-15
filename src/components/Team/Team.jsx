import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MessageCircle, Briefcase, Award } from 'lucide-react'
import { teamMembers } from '../../data/team'

const InstagramIcon = ({ size = 16, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const LinkedinIcon = ({ size = 16, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

export default function Team() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-gold" />
              <span className="section-label">Expert Advisors</span>
              <div className="h-px w-10 bg-gold" />
            </div>
            <h2 className="section-title">
              Meet Our <span className="gold-text">Leadership & Team</span>
            </h2>
            <p className="font-poppins text-dark/60 max-w-xl mx-auto mt-4 text-sm md:text-base">
              RERA-certified advisors committed to providing honest guidance and exceptional results.
            </p>
          </motion.div>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group bg-cream rounded-3xl overflow-hidden luxury-shadow border border-gold/5"
            >
              {/* Member Image */}
              <div className="relative overflow-hidden h-72">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  {/* Social links on hover */}
                  <div className="flex gap-3">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-colors"
                        aria-label="LinkedIn"
                      >
                        <LinkedinIcon size={16} className="text-white hover:text-dark transition-colors" />
                      </a>
                    )}
                    {member.social.instagram && (
                      <a
                        href={member.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-colors"
                        aria-label="Instagram"
                      >
                        <InstagramIcon size={16} className="text-white hover:text-dark transition-colors" />
                      </a>
                    )}
                    {member.social.whatsapp && (
                      <a
                        href={`https://wa.me/${member.social.whatsapp.replace('+', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-colors"
                        aria-label="WhatsApp"
                      >
                        <MessageCircle size={16} className="text-white hover:text-gold transition-colors" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Member Details */}
              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold text-dark mb-1">
                  {member.name}
                </h3>
                <p className="font-inter text-sm text-gold font-semibold mb-4">
                  {member.designation}
                </p>
                
                <p className="font-poppins text-xs text-dark/60 mb-4 line-clamp-3">
                  {member.bio}
                </p>

                <div className="flex flex-col gap-2 pt-4 border-t border-gold/10 font-inter text-xs text-dark/70">
                  <div className="flex items-center gap-2">
                    <Award size={14} className="text-gold animate-pulse" />
                    <span>{member.experience} Experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase size={14} className="text-gold" />
                    <span className="line-clamp-1">{member.specialization}</span>
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
