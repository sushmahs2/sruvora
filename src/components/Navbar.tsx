import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Expertise', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-forest-950/95 backdrop-blur-md border-b border-forest-800/60 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-forest-950/90 via-forest-950/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link to="/" className="flex items-center gap-3.5 group">
          <div className="h-11 w-11 rounded-sm bg-white p-1 border border-champagne-500/40 flex items-center justify-center shadow-md shadow-champagne-500/10 transition-transform duration-300 group-hover:scale-105">
            <img
              src="/assets/logo.jpg"
              alt="Sruvora Infratech Logo"
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <div className="font-heading text-champagne-400 text-lg md:text-xl font-bold leading-none tracking-wide group-hover:text-champagne-300 transition-colors">
              SRUVORA
            </div>
            <div className="text-ivory-300/80 text-[9px] md:text-[10px] tracking-[0.24em] uppercase font-body mt-1">
              Infratech Pvt Ltd
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `font-body text-sm tracking-wider uppercase transition-colors duration-200 relative py-1 ${
                  isActive
                    ? 'text-champagne-400 font-semibold'
                    : 'text-ivory-200/90 hover:text-champagne-300 font-normal'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-champagne-500" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Direct Conversion CTAs */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href="tel:+918152045061"
            className="flex items-center gap-2 text-ivory-200 hover:text-champagne-400 transition-colors text-xs font-body tracking-wider"
          >
            <Phone size={14} className="text-champagne-400" />
            <span>+91 81520 45061</span>
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 bg-champagne-500 hover:bg-champagne-400 text-forest-950 font-semibold text-xs tracking-wider uppercase py-2.5 px-5 transition-all duration-300 font-body shadow-md shadow-champagne-500/15"
          >
            Get a Quote <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-ivory-200 hover:text-champagne-400 transition-colors p-2"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-[420px] opacity-100 border-b border-forest-800' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-forest-950 px-6 py-6 flex flex-col gap-3 shadow-2xl">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `font-body text-sm uppercase tracking-wider py-2.5 border-b border-forest-900 transition-colors ${
                  isActive ? 'text-champagne-400 font-semibold' : 'text-ivory-200'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="pt-2 flex flex-col gap-3">
            <a
              href="tel:+918152045061"
              className="flex items-center gap-2 text-ivory-300 text-sm py-2 font-body"
            >
              <Phone size={15} className="text-champagne-400" />
              +91 81520 45061
            </a>
            <Link
              to="/contact"
              className="btn-primary text-center justify-center text-xs py-3"
            >
              Get a Quote <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
