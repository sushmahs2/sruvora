import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, ShieldCheck, Info, Sparkles, Building, Briefcase, GraduationCap, Grid, Landmark } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: 'easeOut' },
  }),
}

const capabilityShowcase = [
  {
    title: 'Luxury Residential & Villa Architecture',
    sector: 'Residential',
    image: '/assets/images/services/residential-construction.jpg',
    tag: 'Authentic Project Showcase',
    desc: 'Turnkey execution of contemporary luxury villas, multi-level residences, architectural concrete finishes and integrated boundary perimeter enclosures.',
    highlights: ['Reinforced concrete frames', 'Custom granite & stone wall cladding', 'Panoramic glass railing balconies', 'Coordinated MEP & internal finishes'],
  },
  {
    title: 'Commercial Hardscapes & Vehicular Courts',
    sector: 'Hardscape',
    image: '/assets/images/services/hardscape-pavers.jpg',
    tag: 'Authentic Project Showcase',
    desc: 'High-density interlocking concrete pavers, precision-cut granite kerbs, vehicular drop-off courts and engineered drainage transitions.',
    highlights: ['Vibrated sand-bed paver installation', 'Granite entryway steps & thresholds', 'Stainless steel sliding entrance gates', 'Living perimeter wall planter boxes'],
  },
  {
    title: 'Structural Civil Engineering & Superstructures',
    sector: 'Civil Construction',
    image: '/assets/images/services/civil-construction.jpg',
    tag: 'Illustrative Capability Standard',
    desc: 'Heavy reinforced cement concrete (RCC) structural execution adhering to Indian Standard (IS) codes, incorporating certified batch-mix concrete and precision rebar tying.',
    highlights: ['Engineered column, beam & slab casting', 'Formwork precision & vibration compaction', 'Structural load-bearing tests & cube sampling', 'Zero-compromise on-site worker safety'],
  },
  {
    title: 'Site Development & Layout Infrastructure',
    sector: 'Infrastructure',
    image: '/assets/images/services/infrastructure.jpg',
    tag: 'Illustrative Capability Standard',
    desc: 'Comprehensive site preparation for planned residential and commercial layouts, including sub-grade grading, underground utility trenching and asphalt road building.',
    highlights: ['Heavy earthwork compaction & leveling', 'Precast concrete roadside kerbs & gutters', 'Stormwater drainage network integration', 'Utility conduit sleeves for power & telecom'],
  },
  {
    title: 'Architectural Water Walls & Reflection Pools',
    sector: 'Water Engineering',
    image: '/assets/images/services/water-features.jpg',
    tag: 'Illustrative Capability Standard',
    desc: 'Bespoke outdoor water architecture incorporating monolithic fluted stone cascades, submerged filtration skimmers and low-voltage warm LED lighting.',
    highlights: ['Precision water-wall weir hydraulics', 'Subsurface pump & multi-stage filtration', 'Waterproofing with crystalline membrane barriers', 'Energy-efficient submerged lighting fixtures'],
  },
  {
    title: 'Designer Teakwood Decks & Timber Pergolas',
    sector: 'Outdoor Living',
    image: '/assets/images/services/wooden-decking.jpg',
    tag: 'Illustrative Capability Standard',
    desc: 'Custom outdoor living spaces engineered with seasoned teakwood decking, slatted geometric shade pergolas and weather-resistant structural fastenings.',
    highlights: ['Seasoned exterior timber grading', 'Concealed stainless steel deck clip fasteners', 'Integrated warm beam LED cove illumination', 'Termite and weather-resistant sealants'],
  },
]

const sectors = [
  { icon: Building, title: 'Private Residential', desc: 'Bespoke individual villas, duplex bungalows, gated farmhouses and private estate compounds.' },
  { icon: Briefcase, title: 'Commercial & Corporate', desc: 'Office campus external development, landscaped courtyards, paved plazas and parking bays.' },
  { icon: GraduationCap, title: 'Institutional & Campus', desc: 'Educational, institutional and healthcare campus grounds, boundary structures and sports turf.' },
  { icon: Grid, title: 'Master Layout Developments', desc: 'Residential layout roads, stormwater underground drainage, avenue plantations and park hardscaping.' },
  { icon: Landmark, title: 'Public & Civic Projects', desc: 'Civic pedestrian walkways, public park landscaping, kerbing and civic infrastructure enhancements.' },
]

export default function ProjectsPage() {
  return (
    <div className="bg-forest-950 text-ivory-100 overflow-hidden">
      {/* ——— EXPERTISE HERO ——— */}
      <section className="relative pt-36 pb-20 px-6 bg-forest-900/60 border-b border-forest-800/80">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}>
            <div className="section-label mb-3">
              <span className="w-6 h-[1.5px] bg-champagne-500 inline-block" />
              Technical Capabilities & Sectors
            </div>
          </motion.div>
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 max-w-4xl leading-[1.1]"
          >
            Execution Depth Across{' '}
            <span className="text-champagne-400 italic font-serif">Every Built Environment.</span>
          </motion.h1>
          <div className="gold-line mb-6" />
          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="section-subtitle max-w-2xl text-ivory-200"
          >
            A transparent overview of Sruvora Infratech’s civil, infrastructure, hardscape and environmental capabilities across Karnataka.
          </motion.p>
        </div>
      </section>

      {/* ——— HONEST TRANSPARENCY NOTICE ——— */}
      <div className="bg-forest-900/90 border-b border-forest-800/80 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-start sm:items-center gap-3 text-xs text-ivory-300 font-body">
          <Info size={16} className="text-champagne-400 shrink-0 mt-0.5 sm:mt-0" />
          <p className="font-light">
            <strong className="text-champagne-300 font-semibold">Integrity in Presentation:</strong> All capability cards below represent our verified operational disciplines. Authentic company project photographs and illustrative capability benchmarks are clearly badged for total transparency.
          </p>
        </div>
      </div>

      {/* ——— CAPABILITY SHOWCASE GRID ——— */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <div className="section-label mb-3">
              <span className="w-6 h-[1.5px] bg-champagne-500 inline-block" />
              Discipline Breakdown
            </div>
            <h2 className="section-title mb-4">
              Core Technical Competencies
            </h2>
            <div className="gold-line" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilityShowcase.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.1}
                variants={fadeUp}
                className="card-dark overflow-hidden flex flex-col group hover:border-champagne-500/70 transition-all duration-300"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent" />
                  <span className={`absolute top-4 left-4 text-[10px] tracking-wider uppercase font-semibold font-body px-3 py-1 border backdrop-blur-md ${
                    item.tag.includes('Authentic')
                      ? 'bg-forest-950/90 text-champagne-400 border-champagne-500/50'
                      : 'bg-forest-950/90 text-ivory-300 border-ivory-400/30'
                  }`}>
                    {item.tag}
                  </span>
                </div>

                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-champagne-400/90 text-[11px] font-semibold uppercase tracking-widest font-body">
                      {item.sector}
                    </span>
                    <h3 className="font-heading text-white text-xl font-bold mt-1 mb-3 group-hover:text-champagne-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-ivory-300/80 text-xs font-body leading-relaxed mb-6 font-light">
                      {item.desc}
                    </p>

                    <div className="space-y-2 pt-4 border-t border-forest-800">
                      {item.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-2 text-xs text-ivory-300 font-body font-light">
                          <CheckCircle2 size={13} className="text-champagne-500 mt-0.5 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-forest-800">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 text-champagne-400 text-xs font-semibold uppercase tracking-wider font-body hover:translate-x-1 transition-transform"
                    >
                      <span>Consult on This Scope</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— SECTORS SERVED ——— */}
      <section className="py-24 px-6 bg-forest-900/60 border-y border-forest-800/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-label justify-center mb-3">
              <span className="w-6 h-[1.5px] bg-champagne-500 inline-block" />
              Sectors & Markets
            </div>
            <h2 className="section-title mb-4">Project Typologies We Undertake</h2>
            <div className="gold-line mx-auto mb-5" />
            <p className="section-subtitle">
              Configured to serve high-end private developers, residential homeowners, corporate enterprises and institutional layouts.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sec, i) => {
              const Icon = sec.icon
              return (
                <motion.div
                  key={sec.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.1}
                  variants={fadeUp}
                  className="card-dark p-7 border-t-2 border-t-champagne-500"
                >
                  <div className="w-11 h-11 rounded-sm bg-champagne-500/10 border border-champagne-500/30 flex items-center justify-center text-champagne-400 mb-5">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-heading text-white text-lg font-bold mb-2">
                    {sec.title}
                  </h3>
                  <p className="text-ivory-300/80 text-xs leading-relaxed font-body font-light">
                    {sec.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ——— CTA SECTION ——— */}
      <section className="py-20 px-6 bg-forest-900 text-center border-t border-forest-800">
        <div className="max-w-2xl mx-auto">
          <h3 className="font-heading text-white text-3xl font-bold mb-4">
            Have a Specific Project Scope in Mind?
          </h3>
          <p className="text-ivory-300 text-sm font-body mb-8 font-light">
            Share your drawings or site requirements with our engineering team for an itemized BOQ assessment.
          </p>
          <Link to="/contact" className="btn-primary">
            Request Scope Assessment <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
