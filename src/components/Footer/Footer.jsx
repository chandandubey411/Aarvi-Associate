import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

// Custom SVG brand icons (removed from lucide-react v3+)
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

const FacebookIcon = ({ size = 16, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const YoutubeIcon = ({ size = 16, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#111" />
  </svg>
)

const quickLinks = ['Home', 'About', 'Properties', 'Services', 'Contact']
const serviceLinks = ['Property Buying', 'Property Selling', 'Rental Services', 'Commercial Property', 'Investment Consulting']
const featuredAreas = ['Sector 150, Noida', 'Greater Noida West', 'Indirapuram', 'Vaishali', 'Sector 137, Noida']

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-105">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M50 10L90 50L50 90L10 50L50 10Z" stroke="url(#goldGradFooter)" strokeWidth="4" strokeLinejoin="round" />
                  <path d="M50 28L72 70" stroke="url(#goldGradFooter)" strokeWidth="5" strokeLinecap="round" />
                  <path d="M50 28L28 70" stroke="url(#goldGradFooter)" strokeWidth="5" strokeLinecap="round" />
                  <path d="M35 56H65" stroke="url(#goldGradFooter)" strokeWidth="5" strokeLinecap="round" />
                  <path d="M50 38V56" stroke="url(#goldGradFooter)" strokeWidth="4" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="goldGradFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFE5A3" />
                      <stop offset="30%" stopColor="#C8A46B" />
                      <stop offset="70%" stopColor="#A88247" />
                      <stop offset="100%" stopColor="#FFE5A3" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <span className="font-playfair font-bold text-lg text-white block leading-tight">Aarvi Associate</span>
                <span className="text-gold text-xs font-inter tracking-wider">Your Trusted Property Partner</span>
              </div>
            </Link>
            <p className="font-poppins text-sm text-white/50 leading-relaxed mb-8">
              Premium real estate consultancy helping clients buy, sell, rent and invest in luxury properties across the NCR region.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: InstagramIcon, href: '#', label: 'Instagram' },
                { icon: FacebookIcon, href: '#', label: 'Facebook' },
                { icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
                { icon: YoutubeIcon, href: '#', label: 'YouTube' },
                { icon: MessageCircle, href: 'https://wa.me/919211786678', label: 'WhatsApp' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300 group"
                >
                  <Icon size={16} className="text-white/60 group-hover:text-dark transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg font-bold text-white mb-6 pb-4 border-b border-white/10">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <Link
                    to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    className="font-inter text-sm text-white/50 hover:text-gold transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50 group-hover:bg-gold transition-colors flex-shrink-0" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-playfair text-lg font-bold text-white mb-6 pb-4 border-b border-white/10">
              Our Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="font-inter text-sm text-white/50 hover:text-gold transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50 group-hover:bg-gold transition-colors flex-shrink-0" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair text-lg font-bold text-white mb-6 pb-4 border-b border-white/10">
              Contact Info
            </h4>
            <div className="space-y-5">
              <a href="tel:+919211786678" className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-xl bg-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors">
                  <Phone size={14} className="text-gold group-hover:text-dark transition-colors" />
                </div>
                <div>
                  <div className="font-inter text-xs text-white/30 mb-0.5">Phone</div>
                  <div className="font-inter text-sm text-white/70 group-hover:text-gold transition-colors">+91-9211786678</div>
                </div>
              </a>

              <a href="mailto:aarviassociate77@gmail.com" className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-xl bg-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors">
                  <Mail size={14} className="text-gold group-hover:text-dark transition-colors" />
                </div>
                <div>
                  <div className="font-inter text-xs text-white/30 mb-0.5">Email</div>
                  <div className="font-inter text-sm text-white/70 group-hover:text-gold transition-colors">aarviassociate77@gmail.com</div>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={14} className="text-gold" />
                </div>
                <div>
                  <div className="font-inter text-xs text-white/30 mb-0.5">Address</div>
                  <div className="font-inter text-sm text-white/70 leading-relaxed">
                    SHOP NO 1, PLOT NO 533,<br />Sector 5, Vaishali, Ghaziabad, Uttar Pradesh 201019
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-inter text-sm text-white/30">
              © {new Date().getFullYear()} Aarvi Associate. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="font-inter text-xs text-white/20">RERA Registered</span>
              <span className="font-inter text-xs text-white/20">Privacy Policy</span>
              <span className="font-inter text-xs text-white/20">Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
