import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react'
import { asset, imgFallback } from '../lib/asset'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Expertise', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <header
      className={`on-dark fixed inset-x-0 top-0 z-50 border-b border-gold/25 bg-forest-700 transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_10px_30px_-12px_rgba(10,28,19,0.6)]' : ''
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6">
        {/* Brand: logo + company name in gold. "/" resolves to the home page via the router basename. */}
        <Link to="/" className="group flex items-center gap-3.5" aria-label="Sruvora Infratech — Home">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold bg-beige-100 p-1 shadow-md shadow-black/20 transition-transform duration-300 group-hover:scale-105">
            <img
              src={asset('assets/logo.jpg')}
              onError={imgFallback}
              alt="Sruvora Infratech logo"
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <div className="font-heading text-xl font-extrabold leading-none tracking-wide text-gold-bright">
              SRUVORA
            </div>
            <div className="mt-1 font-body text-[11px] leading-none text-ink-mute">Infratech Pvt Ltd</div>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `relative py-1 font-body text-[15px] transition-colors duration-200 ${
                  isActive ? 'font-semibold text-ink' : 'font-medium text-ink-soft hover:text-ink'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-gold-bright" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTAs (reference: outline "Call us" + solid "Get Details") */}
        <div className="hidden items-center gap-3 lg:flex">
          <a href="tel:+918152045061" className="btn-outline px-5 py-2.5">
            <Phone size={15} />
            Call us
          </a>
          <Link to="/contact" className="btn-primary px-5 py-2.5">
            Get a quote <ArrowUpRight size={15} />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 text-ink transition-colors hover:text-gold-bright lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          mobileOpen ? 'max-h-[440px] border-t border-gold/25 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-1 bg-forest-700 px-6 py-5">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `border-b border-line/20 py-3 font-body text-base transition-colors ${
                  isActive ? 'font-semibold text-gold-bright' : 'text-ink-soft'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="flex flex-col gap-3 pt-4">
            <a href="tel:+918152045061" className="btn-outline py-3">
              <Phone size={15} />
              Call us · +91 81520 45061
            </a>
            <Link to="/contact" className="btn-primary py-3">
              Get a quote <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
