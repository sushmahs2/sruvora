import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Building2, Layers, Leaf, Droplets, HardHat, ClipboardList,
  Trees, ArrowRight, CheckCircle2, Sparkles, Waves, Compass
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
  }),
}

interface ServiceItem {
  id: string
  name: string
  category: string
  image: string
  desc: string
  scope: string[]
  icon: any
}

const allServices: ServiceItem[] = [
  {
    id: 'res-civil',
    name: 'Residential & Civil Construction',
    category: 'Civil',
    image: '/assets/images/services/residential-construction.jpg',
    desc: 'Turnkey residential and civil construction services spanning private luxury bungalows, multi-dwelling residential buildings, reinforced concrete superstructures and comprehensive site civil development.',
    scope: ['RCC framing, foundations & slabs', 'Architectural stone masonry & brickwork', 'High-specification internal civil works', 'Compound enclosures & perimeter infrastructure'],
    icon: Building2,
  },
  {
    id: 'infra-site',
    name: 'Infrastructure & Site Development',
    category: 'Infrastructure',
    image: '/assets/images/services/infrastructure.jpg',
    desc: 'Heavy civil infrastructure and layout site development including sub-base earth compaction, subterranean drainage networks, asphalt access roadways, kerb alignments and master utility corridor preparation.',
    scope: ['Site clearing, grading & leveling', 'Asphalt & concrete access roadways', 'Underground stormwater drainage networks', 'Master utility ducting & trenching'],
    icon: HardHat,
  },
  {
    id: 'hardscape-works',
    name: 'Hardscape Works',
    category: 'Hardscape',
    image: '/assets/images/services/hardscape-pavers.jpg',
    desc: 'Architectural hardscape execution combining polished granite slabs, customized stone pathways, outdoor vehicular courtyards, decorative steps, retaining walls and bespoke boundary masonry.',
    scope: ['Precision granite & natural stone flooring', 'Architectural retaining walls & planters', 'Entry plazas & courtyard hardscapes', 'Ramped pedestrian pathways & borders'],
    icon: Layers,
  },
  {
    id: 'softscape-landscaping',
    name: 'Softscape & Landscaping',
    category: 'Landscape',
    image: '/assets/images/services/softscape-landscaping.jpg',
    desc: 'Complete botanical and softscape execution integrating climate-resilient flora, mature shade trees, layered shrubs, groundcovers, turf establishment and enriched organic soil preparation.',
    scope: ['Species selection suited to Karnataka climates', 'Organic topsoil preparation & grading', 'Carpet grass & turf installation', 'Seasonal flowering beds & accent shrubbery'],
    icon: Leaf,
  },
  {
    id: 'paver-kerb',
    name: 'Paver & Kerb Installation',
    category: 'Hardscape',
    image: '/assets/images/services/paver-kerb.jpg',
    desc: 'High-durability interlocking paver laying and precast kerb edging for commercial campuses, residential driveways, vehicular circulation lanes and civic walkways with engineered sand bedding.',
    scope: ['Heavy-load interlocking concrete pavers', 'Precast concrete kerbs & road medians', 'Permeable eco-pavers for water infiltration', 'Vibrated sand compaction & joint sealing'],
    icon: Layers,
  },
  {
    id: 'landscape-design',
    name: 'Landscape Design & Development',
    category: 'Landscape',
    image: '/assets/images/services/landscape-design.jpg',
    desc: 'Holistic concept-to-completion landscape architecture merging natural topography, outdoor seating alcoves, ambient night lighting and structured planting matrices for cohesive outdoor aesthetics.',
    scope: ['Site spatial zoning & circulation planning', 'Hardscape-to-softscape transitional geometry', 'Architectural lighting integration', 'Sustainable drainage-conscious grading'],
    icon: Compass,
  },
  {
    id: 'irrigation-drainage',
    name: 'Irrigation & Drainage Solutions',
    category: 'Water & Irrigation',
    image: '/assets/images/services/irrigation-drainage.jpg',
    desc: 'Automated water distribution and engineered site dewatering systems incorporating pressure-compensated drip lines, popup rotor sprinklers, sub-surface French drains and gravel filtration.',
    scope: ['Smart automated timer-based irrigation', 'Subsurface agricultural drainage pipes', 'Stormwater catch basins & trench grates', 'Water-conserving micro-spray networks'],
    icon: Droplets,
  },
  {
    id: 'rainwater-harvesting',
    name: 'Rainwater Harvesting',
    category: 'Water & Irrigation',
    image: '/assets/images/services/rainwater-harvesting.jpg',
    desc: 'Eco-conscious rainwater capture and artificial ground recharge infrastructure including silt settlement chambers, percolation bore pits and high-capacity storage sump connectivity.',
    scope: ['Surface runoff collection chambers', 'Percolation filter pits & recharge wells', 'Sump storage plumbing & pump integration', 'Groundwater table replenishment systems'],
    icon: Waves,
  },
  {
    id: 'water-features',
    name: 'Water Features & Fountains',
    category: 'Water & Irrigation',
    image: '/assets/images/services/water-features.jpg',
    desc: 'Custom outdoor water architecture featuring dark fluted granite cascading walls, reflection pools, foaming fountain jets and submerged illumination creating peaceful focal environments.',
    scope: ['Monolithic stone & granite water walls', 'Reflection pools with multi-tier skimmers', 'High-efficiency submersible pump systems', 'Submerged low-voltage LED illumination'],
    icon: Droplets,
  },
  {
    id: 'wooden-decking',
    name: 'Wooden Decking & Pergolas',
    category: 'Hardscape',
    image: '/assets/images/services/wooden-decking.jpg',
    desc: 'Architectural outdoor living timber structures crafted from seasoned teakwood and composite materials, featuring geometric shade pergolas, elevated sun decks and integrated seating benches.',
    scope: ['Weather-treated exterior timber decking', 'Heavy-section wooden shade pergolas', 'Concealed stainless steel deck fasteners', 'Integrated warm LED cove beam lighting'],
    icon: Trees,
  },
  {
    id: 'tree-transplantation',
    name: 'Tree Transplantation',
    category: 'Landscape',
    image: '/assets/images/services/tree-transplantation.jpg',
    desc: 'Specialized arboricultural relocation of mature native and ornamental trees using systematic root-ball pruning, protective burlap packaging, crane hoisting and post-move biological monitoring.',
    scope: ['Pre-relocation root ball conditioning', 'Heavy crane rigging & transport logistics', 'Excavation of oversized receiving pits', 'Hormonal root-stimulant treatments & bracing'],
    icon: Leaf,
  },
  {
    id: 'project-planning',
    name: 'Project Planning & Quantity Surveying',
    category: 'Civil',
    image: '/assets/images/services/project-planning.jpg',
    desc: 'Pre-construction engineering precision encompassing detailed Bill of Quantities (BOQ), material estimation, bar bending schedules (BBS), procurement schedules and digital cost governance.',
    scope: ['Itemized BOQ formulation from structural drawings', 'Procurement scheduling & inventory planning', 'Quality assurance (QA/QC) inspection plans', 'Critical-path project milestone scheduling'],
    icon: ClipboardList,
  },
]

const categories = ['All Services', 'Civil', 'Infrastructure', 'Hardscape', 'Landscape', 'Water & Irrigation']

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('All Services')

  const filtered = activeTab === 'All Services'
    ? allServices
    : allServices.filter((s) => s.category === activeTab)

  return (
    <div className="bg-forest-950 text-ivory-100 overflow-hidden">
      {/* ——— SERVICES HERO ——— */}
      <section className="relative pt-36 pb-20 px-6 bg-forest-900/60 border-b border-forest-800/80">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}>
            <div className="section-label mb-3">
              <span className="w-6 h-[1.5px] bg-champagne-500 inline-block" />
              Comprehensive Corporate Capabilities
            </div>
          </motion.div>
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 max-w-4xl leading-[1.1]"
          >
            Our Full Spectrum Of{' '}
            <span className="text-champagne-400 italic font-serif">Engineering Services.</span>
          </motion.h1>
          <div className="gold-line mb-6" />
          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="section-subtitle max-w-2xl text-ivory-200"
          >
            Explore all 12 specialized disciplines delivered by Sruvora Infratech across civil construction, layout infrastructure, architectural hardscaping and sustainable landscaping.
          </motion.p>
        </div>
      </section>

      {/* ——— STICKY CATEGORY FILTER BAR ——— */}
      <div className="bg-forest-900/95 backdrop-blur-md border-b border-forest-800/80 sticky top-[64px] z-30 shadow-xl">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4 overflow-x-auto py-3.5 scrollbar-hide">
          <div className="flex items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`whitespace-nowrap px-4 py-2 text-xs uppercase tracking-wider font-body font-semibold transition-all duration-200 ${
                  activeTab === cat
                    ? 'bg-champagne-500 text-forest-950 shadow-md shadow-champagne-500/20'
                    : 'text-ivory-300 hover:text-champagne-400 hover:bg-forest-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="text-xs text-ivory-400 font-body hidden md:block whitespace-nowrap">
            Showing <span className="text-champagne-400 font-semibold">{filtered.length}</span> of {allServices.length} Disciplines
          </div>
        </div>
      </div>

      {/* ——— ALL 12 SERVICES GRID ——— */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((service, i) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.08}
                  variants={fadeUp}
                  className="card-dark overflow-hidden flex flex-col group hover:border-champagne-500/80 transition-all duration-300"
                >
                  {/* Service Visual */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent" />
                    <span className="absolute top-4 left-4 bg-forest-950/90 text-champagne-400 text-[10px] tracking-widest uppercase font-semibold font-body px-3 py-1 border border-champagne-500/30">
                      {service.category}
                    </span>
                  </div>

                  {/* Service Details */}
                  <div className="p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-sm bg-champagne-500/10 border border-champagne-500/30 flex items-center justify-center text-champagne-400 group-hover:bg-champagne-500 group-hover:text-forest-950 transition-colors">
                          <Icon size={19} />
                        </div>
                        <h3 className="font-heading text-white text-xl font-bold group-hover:text-champagne-400 transition-colors">
                          {service.name}
                        </h3>
                      </div>

                      <p className="text-ivory-300/80 text-xs sm:text-sm font-body leading-relaxed mb-6 font-light">
                        {service.desc}
                      </p>

                      {/* Scope Checklist */}
                      <div className="space-y-2 pt-4 border-t border-forest-800/80">
                        <div className="text-champagne-400 text-[11px] font-semibold uppercase tracking-wider font-body mb-2">
                          Core Capabilities & Scope
                        </div>
                        {service.scope.map((item) => (
                          <div key={item} className="flex items-start gap-2 text-xs text-ivory-300 font-body font-light">
                            <CheckCircle2 size={13} className="text-champagne-500 mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-forest-800 flex items-center justify-between">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1.5 text-champagne-400 hover:text-champagne-300 text-xs font-semibold uppercase tracking-wider font-body group/link"
                      >
                        <span>Inquire About This Service</span>
                        <ArrowRight size={13} className="transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ——— BOTTOM CTA BANNER ——— */}
      <section className="py-20 px-6 bg-forest-900 border-t border-forest-800 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="w-12 h-12 rounded-full bg-champagne-500/10 border border-champagne-500/30 flex items-center justify-center mx-auto mb-4 text-champagne-400">
            <Sparkles size={22} />
          </div>
          <h3 className="font-heading text-white text-3xl font-bold mb-4">
            Need Multiple Interlocking Services?
          </h3>
          <p className="text-ivory-300 text-sm font-body mb-8 font-light">
            We specialize in turnkey contracts managing civil foundations, site infrastructure and finished landscape under a unified timeline.
          </p>
          <Link to="/contact" className="btn-primary">
            Request an Integrated Proposal <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
