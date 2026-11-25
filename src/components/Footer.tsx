import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowUpRight, ShieldCheck } from 'lucide-react'

const services = [
  'Residential & Civil Construction',
  'Infrastructure & Site Development',
  'Hardscape Works & Paving',
  'Softscape & Integrated Landscaping',
  'Paver & Kerb Installation',
  'Irrigation & Drainage Systems',
  'Water Features & Fountains',
  'Wooden Decking & Pergolas',
  'Tree Transplantation',
  'Project Planning & BOQ Estimation',
]

export default function Footer() {
  return (
    <footer className="bg-forest-950 border-t border-forest-800/80 text-ivory-200">
      {/* High-Impact Gold CTA Band */}
      <div className="bg-gradient-to-r from-champagne-600 via-champagne-500 to-champagne-600 py-14 px-6 text-forest-950 shadow-2xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-forest-900 text-xs uppercase tracking-[0.25em] font-semibold font-body mb-2">
              Ready to transform your vision?
            </div>
            <h2 className="font-heading text-forest-950 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Let's Build Something Better.
            </h2>
            <p className="text-forest-900/90 mt-2 font-body text-sm md:text-base">
              Construction · Infrastructure · Landscaping — Engineered for lasting value across Karnataka.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2.5 bg-forest-950 text-champagne-400 hover:bg-forest-900 hover:text-champagne-300 font-semibold px-8 py-4 text-sm tracking-wider uppercase transition-all duration-300 font-body whitespace-nowrap shadow-xl"
          >
            Start a Project <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3.5 mb-5">
              <div className="h-12 w-12 rounded-sm bg-white p-1 border border-champagne-500/40 flex items-center justify-center shadow-md">
                <img
                  src="/assets/logo.jpg"
                  alt="Sruvora Infratech"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <div className="font-heading text-champagne-400 text-xl font-bold leading-tight tracking-wide">
                  SRUVORA
                </div>
                <div className="text-ivory-400 text-[10px] tracking-[0.22em] uppercase font-body mt-0.5">
                  Infratech Pvt Ltd
                </div>
              </div>
            </div>
            <p className="text-ivory-300 text-sm leading-relaxed font-body mb-5 font-light">
              Engineering Quality. Enhancing Landscapes. Delivering dependable execution across civil construction, external development and sustainable landscaping.
            </p>
            <div className="flex items-center gap-2 text-champagne-400/90 text-xs font-body italic">
              <ShieldCheck size={15} className="text-champagne-500 shrink-0" />
              <span>Built with Trust. Driven by Quality.</span>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="font-heading text-white text-base font-semibold mb-5 pb-2 border-b border-forest-800/80">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-ivory-300/80 hover:text-champagne-400 text-sm transition-colors font-body flex items-center gap-1.5 group"
                  >
                    <span className="text-champagne-500/50 group-hover:text-champagne-400 transition-colors">›</span>
                    <span>{s}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-heading text-white text-base font-semibold mb-5 pb-2 border-b border-forest-800/80">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home Overview', to: '/' },
                { label: 'About Company & Leadership', to: '/about' },
                { label: 'All Services & Disciplines', to: '/services' },
                { label: 'Project Expertise & Capabilities', to: '/projects' },
                { label: 'Contact & Project Enquiries', to: '/contact' },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-ivory-300/80 hover:text-champagne-400 text-sm transition-colors font-body flex items-center gap-1.5 group"
                  >
                    <span className="text-champagne-500/50 group-hover:text-champagne-400 transition-colors">›</span>
                    <span>{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Coordinates */}
          <div>
            <h4 className="font-heading text-white text-base font-semibold mb-5 pb-2 border-b border-forest-800/80">
              Bangalore Office
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3 text-ivory-300/90 text-sm font-body font-light">
                <MapPin size={16} className="text-champagne-400 mt-1 shrink-0" />
                <span>
                  No. 1423/119/24, Chikkajala Village, Jala Hobli, Dr BR Ambedkar Road, near India Post Payments Bank, Airport Area, Bangalore, Karnataka, India
                </span>
              </li>
              <li>
                <a
                  href="tel:+918152045061"
                  className="flex items-center gap-3 text-ivory-300/90 hover:text-champagne-400 text-sm transition-colors font-body"
                >
                  <Phone size={15} className="text-champagne-400 shrink-0" />
                  +91 81520 45061
                </a>
              </li>
              <li>
                <a
                  href="tel:+919108660588"
                  className="flex items-center gap-3 text-ivory-300/90 hover:text-champagne-400 text-sm transition-colors font-body"
                >
                  <Phone size={15} className="text-champagne-400 shrink-0" />
                  +91 91086 60588
                </a>
              </li>
              <li>
                <a
                  href="mailto:sruvorainfratech@gmail.com"
                  className="flex items-center gap-3 text-ivory-300/90 hover:text-champagne-400 text-sm transition-colors font-body break-all"
                >
                  <Mail size={15} className="text-champagne-400 shrink-0" />
                  sruvorainfratech@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Sub-Footer Compliance & Copyright */}
        <div className="mt-14 pt-8 border-t border-forest-800/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ivory-400/80 font-body">
          <p>
            © {new Date().getFullYear()} Sruvora Infratech Private Limited. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-champagne-400/80">
            <span>Govt of Karnataka Registered</span>
            <span>•</span>
            <span>MSME Enterprise</span>
            <span>•</span>
            <span>Bengaluru · Mysuru · Hassan</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
