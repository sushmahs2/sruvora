import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, AlertCircle, CheckCircle2, MessageSquare } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' },
  }),
}

type FormState = 'idle' | 'submitted-direct'

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formState, setFormState] = useState<FormState>('idle')

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Full name is required.'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'A valid email address is required.'
    if (!form.phone.trim() || form.phone.trim().length < 8) e.phone = 'Valid contact number is required.'
    if (!form.message.trim()) e.message = 'Please provide brief details of your project.'
    return e
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    // Direct mailto generation for authentic transparent enquiry submission
    const subject = encodeURIComponent(`Project Enquiry: ${form.service || 'General'} - ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nService: ${form.service}\n\nProject Scope & Message:\n${form.message}`
    )
    window.location.href = `mailto:sruvorainfratech@gmail.com?subject=${subject}&body=${body}`
    setFormState('submitted-direct')
  }

  const inputClass =
    'w-full bg-forest-900 border border-forest-800 text-ivory-100 placeholder-ivory-400/50 px-4 py-3.5 text-sm font-body focus:outline-none focus:border-champagne-500 transition-colors'

  return (
    <div className="bg-forest-950 text-ivory-100 overflow-hidden">
      {/* ——— CONTACT HERO ——— */}
      <section className="relative pt-36 pb-20 px-6 bg-forest-900/60 border-b border-forest-800/80">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}>
            <div className="section-label mb-3">
              <span className="w-6 h-[1.5px] bg-champagne-500 inline-block" />
              Direct Communication Channel
            </div>
          </motion.div>
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 max-w-4xl leading-[1.1]"
          >
            Let's Discuss Your{' '}
            <span className="text-champagne-400 italic font-serif">Next Built Environment.</span>
          </motion.h1>
          <div className="gold-line mb-6" />
          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="section-subtitle max-w-2xl text-ivory-200"
          >
            Connect directly with Sruvora Infratech’s civil and landscape management team for project scoping, site feasibility audits or itemized BOQ estimations.
          </motion.p>
        </div>
      </section>

      {/* ——— MAIN CONTACT & FORM SECTION ——— */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-14">
          {/* Company Coordinates */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <div className="section-label mb-3">
                <span className="w-6 h-[1.5px] bg-champagne-500 inline-block" />
                Office Coordinates
              </div>
              <h2 className="font-heading text-white text-3xl font-bold mb-6">
                Bangalore Headquarters
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-5 card-dark border-l-2 border-l-champagne-500">
                  <div className="w-10 h-10 rounded-sm bg-champagne-500/10 border border-champagne-500/30 flex items-center justify-center shrink-0 text-champagne-400 mt-1">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-champagne-400 text-xs tracking-wider uppercase font-semibold mb-1 font-body">
                      Registered Corporate Address
                    </div>
                    <p className="text-ivory-200 text-sm leading-relaxed font-body font-light">
                      No. 1423/119/24, Chikkajala Village, Jala Hobli,<br />
                      Dr BR Ambedkar Road, near India Post Payments Bank,<br />
                      Airport Area, Bangalore, Karnataka, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 card-dark border-l-2 border-l-champagne-500">
                  <div className="w-10 h-10 rounded-sm bg-champagne-500/10 border border-champagne-500/30 flex items-center justify-center shrink-0 text-champagne-400 mt-1">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-champagne-400 text-xs tracking-wider uppercase font-semibold mb-1 font-body">
                      Direct Telephone Lines
                    </div>
                    <div className="space-y-1">
                      <a href="tel:+918152045061" className="block text-ivory-200 hover:text-champagne-400 text-sm font-body transition-colors">
                        +91 81520 45061
                      </a>
                      <a href="tel:+919108660588" className="block text-ivory-200 hover:text-champagne-400 text-sm font-body transition-colors">
                        +91 91086 60588
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 card-dark border-l-2 border-l-champagne-500">
                  <div className="w-10 h-10 rounded-sm bg-champagne-500/10 border border-champagne-500/30 flex items-center justify-center shrink-0 text-champagne-400 mt-1">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-champagne-400 text-xs tracking-wider uppercase font-semibold mb-1 font-body">
                      Electronic Mail
                    </div>
                    <a
                      href="mailto:sruvorainfratech@gmail.com"
                      className="block text-ivory-200 hover:text-champagne-400 text-sm font-body transition-colors break-all"
                    >
                      sruvorainfratech@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 card-dark border-l-2 border-l-champagne-500">
                  <div className="w-10 h-10 rounded-sm bg-champagne-500/10 border border-champagne-500/30 flex items-center justify-center shrink-0 text-champagne-400 mt-1">
                    <Clock size={18} />
                  </div>
                  <div>
                    <div className="text-champagne-400 text-xs tracking-wider uppercase font-semibold mb-1 font-body">
                      Working Hours
                    </div>
                    <p className="text-ivory-200 text-sm font-body font-light">
                      Monday to Saturday: 9:00 AM – 6:00 PM IST
                    </p>
                    <p className="text-ivory-400 text-xs font-body mt-0.5">
                      Site engineering inspections scheduled by appointment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Validated Project Enquiry Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.15}
            variants={fadeUp}
            className="lg:col-span-7"
          >
            <div className="card-dark p-8 sm:p-10 border border-forest-800 shadow-2xl">
              <div className="section-label mb-2">
                <span className="w-6 h-[1.5px] bg-champagne-500 inline-block" />
                Project Inquiries
              </div>
              <h2 className="font-heading text-white text-2xl sm:text-3xl font-bold mb-3">
                Send a Scope Requirement
              </h2>
              <p className="text-ivory-300 text-xs sm:text-sm font-body mb-8 font-light">
                Fill out the form below. For immediate processing, submitting will open your native email client with all pre-filled technical specifications addressed to our engineering desk.
              </p>

              {formState === 'submitted-direct' ? (
                <div className="p-8 bg-forest-900 border border-champagne-500/50 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-champagne-500/10 border border-champagne-500/30 flex items-center justify-center mx-auto text-champagne-400">
                    <CheckCircle2 size={30} />
                  </div>
                  <h3 className="font-heading text-white text-xl font-bold">
                    Email Client Initiated
                  </h3>
                  <p className="text-ivory-300 text-xs font-body leading-relaxed max-w-md mx-auto font-light">
                    Your project details have been formatted and transferred to your email. If your email application did not launch automatically, feel free to directly call our operations desk at <strong className="text-champagne-400">+91 81520 45061</strong> or email us at <strong className="text-champagne-400">sruvorainfratech@gmail.com</strong>.
                  </p>
                  <button
                    onClick={() => setFormState('idle')}
                    className="btn-outline text-xs mt-4"
                  >
                    Edit Information
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-ivory-300 text-xs font-semibold uppercase tracking-wider mb-2 font-body">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="e.g. S. Kumar"
                        className={inputClass}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1.5 font-body">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-ivory-300 text-xs font-semibold uppercase tracking-wider mb-2 font-body">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@domain.com"
                        className={inputClass}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1.5 font-body">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-ivory-300 text-xs font-semibold uppercase tracking-wider mb-2 font-body">
                        Contact Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className={inputClass}
                      />
                      {errors.phone && (
                        <p className="text-red-400 text-xs mt-1.5 font-body">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-ivory-300 text-xs font-semibold uppercase tracking-wider mb-2 font-body">
                        Primary Service Required
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select a discipline</option>
                        <option value="Residential & Civil Construction">Residential & Civil Construction</option>
                        <option value="Infrastructure & Site Development">Infrastructure & Site Development</option>
                        <option value="Hardscape Works & Paving">Hardscape Works & Paving</option>
                        <option value="Softscape & Landscaping">Softscape & Landscaping</option>
                        <option value="Paver & Kerb Installation">Paver & Kerb Installation</option>
                        <option value="Landscape Design & Planning">Landscape Design & Planning</option>
                        <option value="Irrigation & Drainage Systems">Irrigation & Drainage Systems</option>
                        <option value="Water Features & Fountains">Water Features & Fountains</option>
                        <option value="Wooden Decking & Pergolas">Wooden Decking & Pergolas</option>
                        <option value="Tree Transplantation">Tree Transplantation</option>
                        <option value="Project Planning & BOQ Estimation">Project Planning & BOQ Estimation</option>
                        <option value="Integrated Multi-Service Contract">Integrated Multi-Service Contract</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-ivory-300 text-xs font-semibold uppercase tracking-wider mb-2 font-body">
                      Project Details & Site Coordinates *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Outline your project location, approximate site dimensions, target timeframe and specific civil or landscaping requirements..."
                      className={`${inputClass} resize-none`}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1.5 font-body">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full justify-center text-xs tracking-widest uppercase py-4"
                  >
                    <Send size={15} />
                    <span>Submit Project Details</span>
                  </button>

                  <p className="text-[11px] text-ivory-400/70 font-body text-center font-light pt-2">
                    * Transparent communication: Submitting launches your email with verified coordinates directly to <span className="text-champagne-400">sruvorainfratech@gmail.com</span>.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ——— EMBEDDED LOCATION BANNER ——— */}
      <section className="bg-forest-900/60 py-10 px-6 border-t border-forest-800">
        <div className="max-w-7xl mx-auto">
          <div className="card-dark p-8 border border-forest-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-sm bg-champagne-500/10 border border-champagne-500/30 flex items-center justify-center text-champagne-400 shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-heading text-white text-lg font-bold">
                  Chikkajala Village, Jala Hobli, Airport Area
                </h4>
                <p className="text-ivory-300 text-xs font-body font-light">
                  Bangalore, Karnataka, India — Strategic access to North Bangalore and the International Airport corridor.
                </p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Chikkajala+Village+Jala+Hobli+Bangalore"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs whitespace-nowrap"
            >
              Open in Google Maps ↗
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
