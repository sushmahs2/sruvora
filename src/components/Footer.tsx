import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowUpRight, ShieldCheck } from 'lucide-react'
import { asset, imgFallback } from '../lib/asset'

const services = [
  'Residential & Civil Construction',
  'Infrastructure & Site Development',
  'Hardscape Works & Paving',
  'Softscape & Integrated Landscaping',
  'Paver & Kerb Installation',
  'Irrigation & Drainage Systems',
]

const quickLinks = [
  { label: 'Home overview', to: '/' },
  { label: 'About company & leadership', to: '/about' },
  { label: 'All services & disciplines', to: '/services' },
  { label: 'Project expertise & capabilities', to: '/projects' },
  { label: 'Contact & project enquiries', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="on-dark bg-forest-700 text-ink-soft">
      {/* CTA panel — light beige card on the green footer (reference: cream card on dark) */}
      <div className="px-6 pt-14">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-[2rem] border border-gold/40 bg-beige-100 p-8 text-[#1A1A1A] shadow-card md:flex-row md:items-center md:p-12">
          <div>
            <div className="font-body text-sm font-semibold text-forest-700">Ready to transform your vision?</div>
            <h2 className="mt-2 font-heading text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              Let’s build something better.
            </h2>
            <p className="mt-3 max-w-xl font-body text-sm text-[#5C5C55] md:text-base">
              Construction, infrastructure and landscaping — engineered for lasting value across Karnataka.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full bg-forest-700 px-8 py-4 font-body text-sm font-semibold text-white transition-colors duration-200 hover:bg-forest-800"
          >
            Start a project <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>

      {/* Directory */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-5 flex items-center gap-3.5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold bg-beige-100 p-1 shadow-md shadow-black/20">
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
            </div>
            <p className="mb-5 font-body text-sm leading-relaxed text-ink-mute">
              Engineering Quality. Enhancing Landscapes. Delivering dependable execution across civil construction,
              external development and sustainable landscaping.
            </p>
            <div className="flex items-center gap-2 font-body text-xs text-gold-bright">
              <ShieldCheck size={15} className="shrink-0" />
              <span>Built with Trust. Driven by Quality.</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 border-b border-line/25 pb-2 font-heading text-base font-semibold text-ink">
              Our services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="group flex items-center gap-1.5 font-body text-sm text-ink-mute transition-colors hover:text-gold-bright"
                  >
                    <span className="text-gold/60 transition-colors group-hover:text-gold-bright">›</span>
                    <span>{s}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-5 border-b border-line/25 pb-2 font-heading text-base font-semibold text-ink">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="group flex items-center gap-1.5 font-body text-sm text-ink-mute transition-colors hover:text-gold-bright"
                  >
                    <span className="text-gold/60 transition-colors group-hover:text-gold-bright">›</span>
                    <span>{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 border-b border-line/25 pb-2 font-heading text-base font-semibold text-ink">
              Bangalore office
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3 font-body text-sm text-ink-mute">
                <MapPin size={16} className="mt-1 shrink-0 text-gold-bright" />
                <span>
                  No. 1423/119/24, Chikkajala Village, Jala Hobli, Dr BR Ambedkar Road, near India Post Payments Bank,
                  Airport Area, Bangalore, Karnataka, India
                </span>
              </li>
              <li>
                <a
                  href="tel:+918152045061"
                  className="flex items-center gap-3 font-body text-sm text-ink-mute transition-colors hover:text-gold-bright"
                >
                  <Phone size={15} className="shrink-0 text-gold-bright" />
                  +91 81520 45061
                </a>
              </li>
              <li>
                <a
                  href="tel:+919108660588"
                  className="flex items-center gap-3 font-body text-sm text-ink-mute transition-colors hover:text-gold-bright"
                >
                  <Phone size={15} className="shrink-0 text-gold-bright" />
                  +91 91086 60588
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@sruvora.com"
                  className="flex items-center gap-3 break-all font-body text-sm text-ink-mute transition-colors hover:text-gold-bright"
                >
                  <Mail size={15} className="shrink-0 text-gold-bright" />
                  info@sruvora.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Sub-footer */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line/25 pt-8 font-body text-xs text-ink-mute md:flex-row">
          <p>© {new Date().getFullYear()} Sruvora Infratech Private Limited. All rights reserved.</p>
          <p className="text-gold-bright">Govt of Karnataka registered · MSME enterprise · Bengaluru, Mysuru, Hassan</p>
        </div>
      </div>
    </footer>
  )
}
