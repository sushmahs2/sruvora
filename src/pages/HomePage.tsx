import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  Building2,
  Layers,
  Leaf,
  Droplets,
  HardHat,
  Trees,
  ShieldCheck,
  Award,
  Sparkles,
} from 'lucide-react'
import HeroSlideshow from '../components/HeroSlideshow'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
}

const featuredServices = [
  {
    icon: Building2,
    title: 'Civil & Residential Construction',
    desc: 'Turnkey residential buildings, compound walls, concrete structures and external civil development.',
    image: '/assets/images/services/residential-construction.jpg',
    tag: 'Civil Works',
  },
  {
    icon: HardHat,
    title: 'Infrastructure & Site Development',
    desc: 'Comprehensive site preparation, asphalt road grading, kerbing and subterranean drainage works.',
    image: '/assets/images/services/infrastructure.jpg',
    tag: 'Infrastructure',
  },
  {
    icon: Layers,
    title: 'Hardscape & Paver Works',
    desc: 'Heavy-duty interlocking pavers, polished granite flooring, vehicular courts and custom kerbs.',
    image: '/assets/images/services/hardscape-pavers.jpg',
    tag: 'Hardscape',
  },
  {
    icon: Leaf,
    title: 'Softscape & Integrated Landscaping',
    desc: 'Curated horticultural planting, lush lawn development, soil conditioning and green elevations.',
    image: '/assets/images/services/softscape-landscaping.jpg',
    tag: 'Softscape',
  },
  {
    icon: Droplets,
    title: 'Water Features & Fountains',
    desc: 'Architectural granite water walls, reflection pools, cascading fountains and decorative water bodies.',
    image: '/assets/images/services/water-features.jpg',
    tag: 'Water Engineering',
  },
  {
    icon: Trees,
    title: 'Wooden Decking & Pergolas',
    desc: 'Weather-treated teak decking, geometric timber pergolas and customized outdoor living installations.',
    image: '/assets/images/services/wooden-decking.jpg',
    tag: 'Outdoor Living',
  },
]

const differentiators = [
  {
    title: 'Engineering Rigor',
    desc: 'Technical site supervision and structural precision across every phase of civil and external execution.',
  },
  {
    title: 'Leadership Experience',
    desc: '16+ years of combined founding leadership across landmark commercial and residential infrastructure.',
  },
  {
    title: 'On-Time Handover',
    desc: 'Structured critical-path scheduling, transparent progress monitoring and milestone discipline.',
  },
  {
    title: 'Sustainable Practices',
    desc: 'Resource-efficient materials, rainwater harvesting integration and eco-conscious site management.',
  },
  {
    title: 'End-to-End Delivery',
    desc: 'Integrated capability spanning initial estimation and BOQs through construction to final landscape handover.',
  },
  {
    title: 'Client Trust & Transparency',
    desc: 'Clear contracts, authentic material specifications and dedicated project management accountability.',
  },
]

const processSteps = [
  { num: '01', title: 'Understand', desc: 'Comprehensive site topography study, client vision alignment and technical requirements analysis.' },
  { num: '02', title: 'Plan', desc: 'Rigorous BOQ estimation, architectural review, resource scheduling and procurement mapping.' },
  { num: '03', title: 'Execute', desc: 'On-site civil construction, hardscape paving and landscape planting with stringent safety protocols.' },
  { num: '04', title: 'Monitor', desc: 'Active quality audits, coordination milestones, progress documentation and issue mitigation.' },
  { num: '05', title: 'Handover', desc: 'Final site inspection, client walkthrough, operational maintenance guidance and enduring support.' },
]

export default function HomePage() {
  return (
    <div className="bg-forest-950 text-ivory-100 overflow-hidden">
      {/* ——— PHASE 3: CINEMATIC HERO SLIDESHOW ——— */}
      <HeroSlideshow />

      {/* ——— KEY CREDENTIALS STRIP ——— */}
      <section className="bg-forest-900/90 border-y border-forest-800/80 py-10 px-6 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: '16+', label: 'Years Combined Leadership', sub: 'Civil engineering & operations' },
            { value: '3', label: 'Specialized Verticals', sub: 'Construction, infra, landscape' },
            { value: '100%', label: 'Statutory Compliance', sub: 'Govt of Karnataka licensed' },
            { value: 'Karnataka', label: 'Operational Coverage', sub: 'Bengaluru, Mysuru, Hassan & beyond' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.1}
              variants={fadeUp}
              className="border-l-2 border-champagne-500/60 pl-5"
            >
              <div className="font-heading text-3xl sm:text-4xl font-bold text-champagne-400">
                {stat.value}
              </div>
              <div className="font-heading text-white text-sm font-semibold mt-1">
                {stat.label}
              </div>
              <div className="text-ivory-400 text-xs font-body mt-0.5">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ——— CORPORATE ABOUT INTRODUCTION ——— */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-14 items-center">
          {/* Text narrative */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            className="lg:col-span-7"
          >
            <div className="section-label mb-4">
              <span className="w-6 h-[1.5px] bg-champagne-500 inline-block" />
              About Sruvora Infratech
            </div>
            <h2 className="section-title mb-6">
              Engineering quality spaces with practical expertise and sustainable solutions.
            </h2>
            <div className="gold-line mb-6" />
            <p className="section-subtitle mb-5">
              Sruvora Infratech Private Limited is a premier construction, infrastructure and landscaping company dedicated to delivering reliable, high-specification execution across civil works, external development and bespoke environmental spaces.
            </p>
            <p className="text-ivory-300/80 text-sm md:text-base leading-relaxed font-body mb-8 font-light">
              We unite civil engineering rigor, meticulous scheduling and master craftsmanship to bring complex architectural visions into reality. Our operating philosophy prioritizes structural integrity, environmental sustainability, workplace safety and long-term client trust.
            </p>

            {/* Core Values Pills */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { title: 'Our Vision', desc: 'To establish an enduring infrastructure benchmark recognized for quality, innovation and green development.' },
                { title: 'Our Mission', desc: 'To provide practical, cost-effective and high-precision construction through transparent execution.' },
              ].map((pill) => (
                <div key={pill.title} className="card-dark p-5 border-l-2 border-l-champagne-500">
                  <h4 className="font-heading text-white text-base font-semibold mb-1 flex items-center gap-2">
                    <Sparkles size={14} className="text-champagne-400" />
                    {pill.title}
                  </h4>
                  <p className="text-ivory-300 text-xs leading-relaxed font-body">
                    {pill.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link to="/about" className="btn-primary">
                Discover Our Leadership <ArrowRight size={16} />
              </Link>
              <Link to="/projects" className="btn-outline">
                Explore Capabilities
              </Link>
            </div>
          </motion.div>

          {/* Architectural Image Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative border border-forest-800 shadow-2xl overflow-hidden group">
              <img
                src="/assets/images/hero/hero-1-luxury-villa.jpg"
                alt="Sruvora Infratech Luxury Residential Construction"
                className="w-full h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-forest-950/90 border border-champagne-500/40 backdrop-blur-md">
                <div className="text-champagne-400 text-xs font-semibold uppercase tracking-wider font-body">
                  Civil & Structural Precision
                </div>
                <div className="text-white font-heading text-sm mt-1">
                  Bespoke Modern Villa with Natural Stone Cladding & Integrated Terraces
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ——— FEATURED SERVICES GRID ——— */}
      <section className="py-24 px-6 bg-forest-900/60 border-y border-forest-800/80">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="section-label mb-3">
                <span className="w-6 h-[1.5px] bg-champagne-500 inline-block" />
                Comprehensive Capabilities
              </div>
              <h2 className="section-title max-w-xl">
                Integrated Construction, Infrastructure & Landscaping
              </h2>
            </div>
            <Link to="/services" className="btn-outline whitespace-nowrap self-start md:self-auto">
              View All 12 Services <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((svc, i) => {
              const Icon = svc.icon
              return (
                <motion.div
                  key={svc.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.1}
                  variants={fadeUp}
                  className="card-dark overflow-hidden group hover:border-champagne-500/70 transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent" />
                    <span className="absolute top-4 left-4 bg-forest-950/90 text-champagne-400 text-[10px] tracking-widest uppercase font-semibold font-body px-3 py-1 border border-champagne-500/30">
                      {svc.tag}
                    </span>
                  </div>

                  <div className="p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-sm bg-champagne-500/10 border border-champagne-500/30 flex items-center justify-center mb-4 text-champagne-400 group-hover:bg-champagne-500 group-hover:text-forest-950 transition-colors duration-300">
                        <Icon size={20} />
                      </div>
                      <h3 className="font-heading text-white text-xl font-bold mb-3 group-hover:text-champagne-400 transition-colors">
                        {svc.title}
                      </h3>
                      <p className="text-ivory-300/80 text-sm font-body leading-relaxed font-light">
                        {svc.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-forest-800/80 flex items-center text-champagne-400 text-xs font-semibold tracking-wider uppercase font-body group-hover:translate-x-1 transition-transform">
                      <span>Explore Service Details</span>
                      <ArrowRight size={14} className="ml-1.5" />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ——— 5-STEP WORK PROCESS TIMELINE ——— */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-label justify-center mb-3">
              <span className="w-6 h-[1.5px] bg-champagne-500 inline-block" />
              Our Methodology
            </div>
            <h2 className="section-title mb-4">From Blueprint to Living Space</h2>
            <div className="gold-line mx-auto mb-5" />
            <p className="section-subtitle">
              A transparent, structured workflow engineered for predictability, craftsmanship and peace of mind.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Baseline on Desktop */}
            <div className="hidden lg:block absolute top-10 left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-forest-800 via-champagne-500/60 to-forest-800" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.12}
                  variants={fadeUp}
                  className="relative text-center card-dark p-6 lg:p-4 group hover:border-champagne-500/50 transition-colors"
                >
                  <div className="relative z-10 w-16 h-16 rounded-full border-2 border-champagne-500 bg-forest-950 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-champagne-500/10 group-hover:scale-110 transition-transform">
                    <span className="font-heading text-champagne-400 text-xl font-bold">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="font-heading text-white text-lg font-bold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-ivory-300/80 text-xs leading-relaxed font-body font-light">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Operational Values Banner */}
          <div className="mt-16 p-8 bg-forest-900/80 border border-champagne-500/30 text-center max-w-4xl mx-auto">
            <div className="font-heading text-champagne-300 text-lg sm:text-xl font-semibold tracking-wide">
              Quality · Structural Safety · Cost Transparency · Timely Delivery
            </div>
            <p className="text-ivory-400 text-xs font-body mt-2">
              Every project is backed by comprehensive site audits and material testing standards.
            </p>
          </div>
        </div>
      </section>

      {/* ——— WHY CHOOSE US DIFFERENTIATORS ——— */}
      <section className="py-24 px-6 bg-forest-900/60 border-t border-forest-800/80">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <div className="section-label mb-3">
              <span className="w-6 h-[1.5px] bg-champagne-500 inline-block" />
              The Sruvora Difference
            </div>
            <h2 className="section-title mb-4">
              Built on Integrity, Driven by Quality Execution
            </h2>
            <div className="gold-line mb-4" />
            <p className="section-subtitle">
              We differentiate ourselves not through inflated claims, but through reliable engineering and verified site execution.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((diff, i) => (
              <motion.div
                key={diff.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.1}
                variants={fadeUp}
                className="flex items-start gap-4 p-6 card-dark border-l-2 border-l-champagne-500/70"
              >
                <CheckCircle2 size={22} className="text-champagne-400 shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading text-white text-lg font-bold mb-1.5">
                    {diff.title}
                  </h3>
                  <p className="text-ivory-300/80 text-sm font-body leading-relaxed font-light">
                    {diff.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— WHERE WE SERVE LOCATIONS ——— */}
      <section className="py-20 px-6 border-t border-forest-800/80 relative">
        <div className="max-w-7xl mx-auto text-center">
          <div className="section-label justify-center mb-3">
            <span className="w-6 h-[1.5px] bg-champagne-500 inline-block" />
            Regional Footprint
          </div>
          <h2 className="section-title mb-4">Where We Operate</h2>
          <div className="gold-line mx-auto mb-10" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            {[
              { city: 'Bengaluru', desc: 'Central corporate operations, civil development & estate landscaping.' },
              { city: 'Mysuru', desc: 'Residential construction, layout hardscaping & park development.' },
              { city: 'Hassan', desc: 'Infrastructure civil works, site grading & water management.' },
              { city: 'Karnataka-Wide', desc: 'Turnkey project deployment tailored to client location & scale.' },
            ].map((loc, i) => (
              <motion.div
                key={loc.city}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.1}
                variants={fadeUp}
                className="card-dark p-6 text-center border-t-2 border-t-champagne-500/80"
              >
                <div className="w-3 h-3 rounded-full bg-champagne-400 mx-auto mb-3" />
                <h4 className="font-heading text-white text-xl font-bold mb-2">{loc.city}</h4>
                <p className="text-ivory-300/80 text-xs font-body leading-relaxed font-light">{loc.desc}</p>
              </motion.div>
            ))}
          </div>

          <p className="font-heading text-champagne-300 text-lg italic max-w-2xl mx-auto">
            "We build enduring infrastructure partnerships through consistent quality, honest communication and skilled on-site execution."
          </p>
        </div>
      </section>
    </div>
  )
}
