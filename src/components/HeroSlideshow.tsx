import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import { asset, imgFallback } from '../lib/asset'

interface Slide {
  id: number
  src: string
  title: string
  subtitle: string
  tag: string
}

const slides: Slide[] = [
  {
    id: 1,
    src: asset('assets/images/hero/hero-1-luxury-villa.jpg'),
    tag: 'Civil & Residential',
    title: 'Architectural Craftsmanship',
    subtitle: 'Bespoke residential structures engineered with enduring precision and natural stone accents.',
  },
  {
    id: 2,
    src: asset('assets/images/hero/hero-2-interior-architecture.jpg'),
    tag: 'Interior & Structural',
    title: 'Excellence in Every Detail',
    subtitle: 'Seamless integration of structural stability, marble craftsmanship and modern spatial design.',
  },
  {
    id: 3,
    src: asset('assets/images/hero/hero-3-entrance-hardscape.jpg'),
    tag: 'Hardscape & Entryways',
    title: 'Contemporary External Development',
    subtitle: 'Durable boundary infrastructure, paved vehicular courts and living green elevations.',
  },
  {
    id: 4,
    src: asset('assets/images/hero/hero-4-pathway-landscape.jpg'),
    tag: 'Integrated Landscaping',
    title: 'Harmonious Outdoor Spaces',
    subtitle: 'Precision-laid granite steps, structured paver pathways and climate-resilient vegetation.',
  },
  {
    id: 5,
    src: asset('assets/images/hero/hero-5-estate-garden.jpg'),
    tag: 'Softscape & Estates',
    title: 'Landscape Architecture',
    subtitle: 'Lush circular turf design, mature plantation and expansive outdoor living environments.',
  },
]

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  // Check reduced motion preference
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(media.matches)
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [])

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  // Auto transition every 5.5 seconds
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      nextSlide()
    }, 5500)
    return () => clearInterval(timer)
  }, [isPaused, nextSlide])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide()
      if (e.key === 'ArrowLeft') prevSlide()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextSlide, prevSlide])

  return (
    <section
      className="on-dark relative flex min-h-[640px] w-full items-stretch overflow-hidden rounded-b-[2.5rem] bg-forest-700 sm:h-[92vh] sm:max-h-[960px]"
      aria-label="Sruvora Infratech hero slideshow"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background slides */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.3 : 1.2, ease: 'easeInOut' }}
          className="absolute inset-0 z-0"
        >
          <motion.img
            src={slides[current].src}
            onError={imgFallback}
            alt={slides[current].title}
            initial={prefersReducedMotion ? {} : { scale: 1.08 }}
            animate={prefersReducedMotion ? {} : { scale: 1 }}
            transition={{ duration: 6, ease: 'easeOut' }}
            className="h-full w-full object-cover object-center"
            loading={current === 0 ? 'eager' : 'lazy'}
          />
          {/* Forest-green overlay keeps white/gold text readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-forest-800/95 via-forest-800/75 to-forest-700/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-800 via-transparent to-forest-800/50" />
        </motion.div>
      </AnimatePresence>

      {/* Gold hairline at the top edge */}
      <div className="absolute left-0 right-0 top-0 z-20 h-1 bg-gradient-to-r from-transparent via-gold/70 to-transparent" />

      {/* Foreground content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-between gap-10 px-6 pb-24 pt-28">
        <div className="my-auto max-w-3xl">
          {/* Announcement pill (reference: accent pill with a "New" chip) */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link
              to="/contact"
              className="group mb-7 inline-flex max-w-full items-center gap-3 rounded-3xl bg-gold py-2 pl-2 pr-4 font-body text-sm font-semibold text-forest-700 transition-colors hover:bg-gold-light sm:rounded-full"
            >
              <span className="shrink-0 rounded-full bg-beige-100 px-3 py-1 text-xs font-bold">Karnataka</span>
              <span>Taking project enquiries in Bengaluru, Mysuru &amp; Hassan</span>
              <ArrowRight size={16} className="shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Headline: white + gold two-tone, as in the reference */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mb-6 font-heading text-5xl font-bold leading-[1.05] text-ink sm:text-6xl lg:text-7xl"
          >
            <span className="block">Turning blueprints</span>
            <span className="block text-accent">into reality.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-10 max-w-2xl font-body text-base leading-relaxed text-ink-soft sm:text-lg md:text-xl"
          >
            Transforming ideas into durable, functional and sustainable spaces through construction, infrastructure and
            landscaping expertise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link to="/contact" className="btn-primary group px-8 py-4">
              Start a project
              <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link to="/services" className="btn-outline px-8 py-4">
              Explore our services
            </Link>
          </motion.div>
        </div>

        {/* Controls */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-ink/15 pt-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-line/40 bg-forest-800/80 px-3.5 py-1 font-body text-xs font-semibold text-accent">
              {slides[current].tag}
            </span>
            <span className="hidden font-body text-sm text-ink-mute md:inline">{slides[current].title}</span>
          </div>

          <div className="flex w-full items-center justify-between gap-4 sm:w-auto sm:justify-end">
            <div className="flex items-center gap-2" role="tablist" aria-label="Slides">
              {slides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrent(idx)}
                  role="tab"
                  aria-selected={current === idx}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    current === idx ? 'w-8 bg-accent' : 'w-2 bg-ink/30 hover:bg-ink/60'
                  }`}
                />
              ))}
            </div>

            <div className="ml-3 flex items-center gap-1.5">
              {[
                { label: 'Previous photograph', onClick: prevSlide, icon: <ChevronLeft size={18} /> },
                {
                  label: isPaused ? 'Play slideshow' : 'Pause slideshow',
                  onClick: () => setIsPaused(!isPaused),
                  icon: isPaused ? <Play size={14} /> : <Pause size={14} />,
                },
                { label: 'Next photograph', onClick: nextSlide, icon: <ChevronRight size={18} /> },
              ].map((b) => (
                <button
                  key={b.label}
                  onClick={b.onClick}
                  aria-label={b.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/25 text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  {b.icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
