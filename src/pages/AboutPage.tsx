import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Award, Target, ShieldCheck, CheckCircle2, Leaf, Info } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
}

const leadership = [
  {
    name: 'Ms. Srushti T K',
    designation: 'Managing Director',
    qualification: 'B.E. (Civil)',
    image: '/assets/images/leadership/srushti-tk.jpg',
    isRealPhoto: true,
    bio: 'Leading Sruvora Infratech with an engineering-first vision across civil construction, external development and sustainable landscaping. With deep expertise in project execution, cost planning, quality assurance and client relationships, she is dedicated to building durable infrastructure and enduring business partnerships.',
  },
  {
    name: 'Smt. Hemavathi',
    designation: 'Managing Director',
    qualification: '',
    image: '/assets/images/leadership/hemavathi.jpg',
    isRealPhoto: true,
    bio: 'Providing strategic governance and executive direction to the organization. She is committed to upholding rigorous standards of operational quality, financial transparency and client satisfaction. Focusing on professionalism, teamwork and ethical leadership, she guides the company toward sustainable growth.',
  },
  {
    name: 'Mr. Abhishek K.M.',
    designation: 'Head — Business & Project Operations',
    qualification: 'B.E. (Civil)',
    image: '/assets/images/leadership/abhishek-km-placeholder.jpg',
    isRealPhoto: false,
    bio: 'Overseeing comprehensive on-site project execution, technical planning, site engineering and resource management. With a steadfast commitment to construction efficiency, site safety and quality compliance, he ensures timely project delivery across all civil, hardscape and landscaping divisions.',
  },
]

const qualityPillars = [
  { title: 'Legal & Contractual Compliance', desc: 'Strict compliance with all applicable engineering standards, civic codes and client contractual terms.' },
  { title: 'Quality Materials & Methods', desc: 'Certified raw materials, verified concrete mix designs, advanced construction equipment and trained technicians.' },
  { title: 'Continuous Improvement', desc: 'Regular process optimization, workforce safety training and empirical performance monitoring.' },
  { title: 'Safe Work Environment', desc: 'Rigorous job-site health and safety measures for all personnel, subcontractors and visiting stakeholders.' },
  { title: 'Ethical Business Practices', desc: 'Total transparency in estimation, honest client communication and uncompromised commercial integrity.' },
  { title: 'Enduring Client Value', desc: 'Solutions engineered for long-term durability, minimal maintenance lifecycles and high functional utility.' },
]

const environmentalPillars = [
  { title: 'Regulatory Compliance', desc: 'Adherence to state and national environmental regulations and pollution control standards.' },
  { title: 'Pollution Prevention', desc: 'Proactive management of construction dust, site runoff, sound emissions and waste segregation.' },
  { title: 'Resource Efficiency', desc: 'Optimal utilization of water, energy and building materials to reduce overall ecological impact.' },
  { title: 'Sustainable Practices', desc: 'Integration of rainwater harvesting, recycled aggregates and native drought-tolerant greenery.' },
  { title: 'Site Impact Control', desc: 'Minimizing topographical disruption, tree preservation protocols and erosion prevention.' },
  { title: 'Workforce Awareness', desc: 'Regular environmental and safety toolbox talks for site engineers and field laborers.' },
]

export default function AboutPage() {
  return (
    <div className="bg-forest-950 text-ivory-100 overflow-hidden">
      {/* ——— ABOUT HERO ——— */}
      <section className="relative pt-36 pb-20 px-6 bg-forest-900/60 border-b border-forest-800/80">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}>
            <div className="section-label mb-3">
              <span className="w-6 h-[1.5px] bg-champagne-500 inline-block" />
              About Sruvora Infratech Private Limited
            </div>
          </motion.div>
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 max-w-4xl leading-[1.1]"
          >
            Built With Trust. Driven By Quality.{' '}
            <span className="text-champagne-400 italic font-serif">Designed for the Future.</span>
          </motion.h1>
          <div className="gold-line mb-6" />
          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="section-subtitle max-w-2xl text-ivory-200"
          >
            A Karnataka-based construction, infrastructure and landscaping company delivering reliable civil execution, external development and master landscaping solutions.
          </motion.p>
        </div>
      </section>

      {/* ——— COMPANY OVERVIEW & VALUES ——— */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-14 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:col-span-7"
          >
            <div className="section-label mb-3">
              <span className="w-6 h-[1.5px] bg-champagne-500 inline-block" />
              Our Corporate Foundation
            </div>
            <h2 className="section-title mb-6">
              Practical engineering with an uncompromising commitment to durability.
            </h2>
            <div className="gold-line mb-6" />
            <p className="text-ivory-200 text-base leading-relaxed font-body mb-5 font-light">
              Sruvora Infratech Private Limited was established to bridge the gap between architectural ambition and ground-level execution. Operating across Bangalore, Mysuru, Hassan and wider Karnataka, we provide a unified solution for residential buildings, commercial civil works, hardscape development and comprehensive softscaping.
            </p>
            <p className="text-ivory-300/80 text-sm md:text-base leading-relaxed font-body mb-8 font-light">
              By housing civil engineering, site infrastructure and horticulture under a single roof, we eliminate contractor friction, maintain single-point accountability and ensure projects transition smoothly from structural foundations to polished external environments.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="card-dark p-6 border-l-2 border-l-champagne-500">
                <Target size={22} className="text-champagne-400 mb-3" />
                <h4 className="font-heading text-white text-lg font-bold mb-2">Our Vision</h4>
                <p className="text-ivory-300 text-xs font-body leading-relaxed font-light">
                  To build a respected infrastructure brand recognized throughout Karnataka for engineering quality, environmental innovation and enduring client trust.
                </p>
              </div>
              <div className="card-dark p-6 border-l-2 border-l-champagne-500">
                <Award size={22} className="text-champagne-400 mb-3" />
                <h4 className="font-heading text-white text-lg font-bold mb-2">Our Mission</h4>
                <p className="text-ivory-300 text-xs font-body leading-relaxed font-light">
                  To deliver practical, cost-effective and structurally dependable construction solutions through skilled workmanship and transparent project management.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="card-dark p-4 border border-forest-800 shadow-2xl">
              <img
                src="/assets/images/services/civil-construction.jpg"
                alt="Sruvora Infratech Civil Structural Works"
                className="w-full h-[440px] object-cover"
              />
              <div className="p-4 text-center">
                <span className="text-champagne-400 text-xs font-semibold uppercase tracking-wider font-body">
                  Structural & Civil Engineering Rigor
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ——— PHASE 5: LEADERSHIP SECTION ——— */}
      <section className="py-24 px-6 bg-forest-900/60 border-y border-forest-800/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-label justify-center mb-3">
              <span className="w-6 h-[1.5px] bg-champagne-500 inline-block" />
              The People Behind the Company
            </div>
            <h2 className="section-title mb-4">Leadership Team</h2>
            <div className="gold-line mx-auto mb-5" />
            <p className="section-subtitle">
              Founding directors and engineering executives with proven credentials across large-scale project delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, i) => (
              <motion.div
                key={leader.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.15}
                variants={fadeUp}
                className="card-dark overflow-hidden flex flex-col group hover:border-champagne-500/70 transition-all duration-300"
              >
                {/* Portrait Container with fixed aspect ratio */}
                <div className="relative h-96 w-full overflow-hidden bg-forest-950">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/20 to-transparent" />

                  {/* Verification / Disclosure Badge */}
                  <div className="absolute bottom-4 left-4 right-4">
                    {leader.isRealPhoto ? (
                      <span className="inline-flex items-center gap-1.5 bg-forest-950/90 text-champagne-400 text-[10px] tracking-wider uppercase font-semibold font-body px-2.5 py-1 border border-champagne-500/40 backdrop-blur-sm">
                        <CheckCircle2 size={12} className="text-champagne-400" />
                        Verified Executive Portrait
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 bg-forest-950/95 text-ivory-300 text-[10px] tracking-wider uppercase font-medium font-body px-2.5 py-1 border border-ivory-400/30 backdrop-blur-sm">
                        <Info size={12} className="text-champagne-400" />
                        Illustrative Portrait Placeholder
                      </span>
                    )}
                  </div>
                </div>

                {/* Profile Information */}
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-white text-2xl font-bold mb-1 group-hover:text-champagne-400 transition-colors">
                      {leader.name}
                    </h3>
                    <div className="text-champagne-400 text-xs font-semibold tracking-wider uppercase font-body mb-1">
                      {leader.designation}
                    </div>
                    {leader.qualification && (
                      <div className="text-ivory-400 text-xs font-body mb-4">
                        {leader.qualification}
                      </div>
                    )}
                    <div className="gold-line mb-4" />
                    <p className="text-ivory-300/80 text-xs leading-relaxed font-body font-light">
                      {leader.bio}
                    </p>
                  </div>

                  {!leader.isRealPhoto && (
                    <p className="text-[10px] text-ivory-400/60 font-body italic mt-4 pt-3 border-t border-forest-800">
                      * Fictional placeholder likeness; official portrait will be updated upon scheduled company shoot.
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— QUALITY POLICY (FROM PDF) ——— */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-label justify-center mb-3">
              <span className="w-6 h-[1.5px] bg-champagne-500 inline-block" />
              Our Commitment
            </div>
            <h2 className="section-title mb-4">Corporate Quality Policy</h2>
            <div className="gold-line mx-auto mb-5" />
            <p className="section-subtitle">
              At Sruvora Infratech, quality is not an afterthought — it is the bedrock of our operating model.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {qualityPillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.08}
                variants={fadeUp}
                className="card-dark p-6 border-l-2 border-l-champagne-500"
              >
                <h4 className="font-heading text-white text-base font-bold mb-2">
                  {p.title}
                </h4>
                <p className="text-ivory-300/80 text-xs leading-relaxed font-body font-light">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="p-8 bg-forest-900/90 border border-champagne-500/40 text-center max-w-3xl mx-auto">
            <div className="font-heading text-champagne-300 text-xl md:text-2xl italic font-semibold">
              “Quality is not just a goal — it’s our foundation.”
            </div>
          </div>
        </div>
      </section>

      {/* ——— ENVIRONMENTAL POLICY (FROM PDF) ——— */}
      <section className="py-24 px-6 bg-forest-900/60 border-t border-forest-800/80">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="section-label mb-3">
                <span className="w-6 h-[1.5px] bg-champagne-500 inline-block" />
                Our Responsibility
              </div>
              <h2 className="section-title mb-5">Environmental Policy</h2>
              <div className="gold-line mb-6" />
              <p className="section-subtitle mb-6">
                We recognize our responsibility to minimize the environmental impact of construction and are dedicated to promoting sustainability across all operations.
              </p>
              <div className="p-6 bg-forest-950 border border-forest-800">
                <div className="font-heading text-champagne-300 text-lg italic">
                  “Building responsibly for a sustainable future.”
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {environmentalPillars.map((ep) => (
                <div key={ep.title} className="card-dark p-5 border-t-2 border-t-champagne-500/70">
                  <div className="flex items-center gap-2 mb-2">
                    <Leaf size={15} className="text-champagne-400" />
                    <h4 className="font-heading text-white text-sm font-semibold">{ep.title}</h4>
                  </div>
                  <p className="text-ivory-300/80 text-xs leading-relaxed font-body font-light">{ep.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ——— STATUTORY COMPLIANCE & CREDENTIALS ——— */}
      <section className="py-20 px-6 border-t border-forest-800/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-label justify-center mb-3">
              <span className="w-6 h-[1.5px] bg-champagne-500 inline-block" />
              Corporate Governance
            </div>
            <h2 className="section-title mb-4">Statutory Registrations & Compliance</h2>
            <div className="gold-line mx-auto mb-5" />
            <p className="section-subtitle">
              Fully licensed, compliant and registered under Karnataka state and national corporate frameworks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            {/* Certificate Graphic from PDF */}
            <div className="card-dark p-4 bg-white border border-champagne-500/30 flex items-center justify-center">
              <img
                src="/assets/images/page9_img1.jpeg"
                alt="Government of Karnataka Shop & Establishment Certificate and Statutory Registrations"
                className="max-h-72 w-auto object-contain"
              />
            </div>

            {/* Compliance Verified Summary */}
            <div className="space-y-4">
              {[
                { title: 'Shop & Establishment Licensed', desc: 'Officially registered under the Government of Karnataka Department of Labour as a licensed commercial establishment.' },
                { title: 'MSME Registered Enterprise', desc: 'Recognized under the Ministry of Micro, Small and Medium Enterprises (UDYAM).' },
                { title: 'Tax & Revenue Compliant', desc: 'Registered under Goods and Services Tax (GST) and Central Board of Direct Taxes.' },
                { title: 'Workforce Social Security', desc: 'Comprehensive coverage under Employees State Insurance (ESIC) and Employees Provident Fund (EPFO).' },
              ].map((item) => (
                <div key={item.title} className="card-dark p-5 border-l-2 border-l-champagne-500/80">
                  <div className="flex items-center gap-2 mb-1">
                    <ShieldCheck size={16} className="text-champagne-400" />
                    <h4 className="font-heading text-white text-sm font-semibold">{item.title}</h4>
                  </div>
                  <p className="text-ivory-300/80 text-xs font-body font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ——— CTA SECTION ——— */}
      <section className="py-20 px-6 bg-forest-900 text-center border-t border-forest-800">
        <div className="max-w-2xl mx-auto">
          <h3 className="font-heading text-white text-3xl font-bold mb-4">
            Partner With An Engineering-First Team
          </h3>
          <p className="text-ivory-300 text-sm font-body mb-8 font-light">
            Contact us today to discuss site development, residential construction or commercial landscape architecture.
          </p>
          <Link to="/contact" className="btn-primary">
            Initiate Project Discussion <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
