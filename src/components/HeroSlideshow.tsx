import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'

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
    src: '/assets/images/hero/hero-1-luxury-villa.jpg',
    tag: 'Civil & Residential',
    title: 'Architectural Craftsmanship',
    subtitle: 'Bespoke residential structures engineered with enduring precision and natural stone accents.',
  },
  {
    id: 2,
    src: '/assets/images/hero/hero-2-interior-architecture.jpg',
    tag: 'Interior & Structural',
    title: 'Excellence in Every Detail',
    subtitle: 'Seamless integration of structural stability, marble craftsmanship and modern spatial design.',
  },
  {
    id: 3,
    src: '/assets/images/hero/hero-3-entrance-hardscape.jpg',
    tag: 'Hardscape & Entryways',
    title: 'Contemporary External Development',
    subtitle: 'Durable boundary infrastructure, paved vehicular courts and living green elevations.',
  },
  {
    id: 4,
    src: '/assets/images/hero/hero-4-pathway-landscape.jpg',
    tag: 'Integrated Landscaping',
    title: 'Harmonious Outdoor Spaces',
    subtitle: 'Precision-laid granite steps, structured paver pathways and climate-resilient vegetation.',
  },
  {
    id: 5,
    src: '/assets/images/hero/hero-5-estate-garden.jpg',
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
      className="relative w-full h-[92vh] min-h-[620px] max-h-[960px] overflow-hidden bg-forest-950 flex items-center"
      aria-label="Sruvora Infratech Corporate Hero Slideshow"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Slides */}
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
            alt={slides[current].title}
            initial={prefersReducedMotion ? {} : { scale: 1.08 }}
            animate={prefersReducedMotion ? {} : { scale: 1 }}
            transition={{ duration: 6, ease: 'easeOut' }}
            className="w-full h-full object-cover object-center"
            loading={current === 0 ? 'eager' : 'lazy'}
          />

          {/* Luxury Forest-Green & Noir Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-forest-950/95 via-forest-950/80 to-forest-900/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-forest-950/60" />
        </motion.div>
      </AnimatePresence>

      {/* Decorative Gold Baseline Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-champagne-500/70 to-transparent z-20" />

      {/* Foreground Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 pb-16 flex flex-col justify-between h-full">
        <div className="my-auto max-w-3xl">
          {/* Small Eyebrow Heading */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="w-8 h-[2px] bg-champagne-500 inline-block" />
            <span className="text-champagne-400 text-xs md:text-sm font-semibold tracking-[0.25em] uppercase font-body">
              SRUVORA INFRATECH PRIVATE LIMITED
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.08] mb-6"
          >
            TURNING{' '}
            <span className="text-champagne-400 italic font-serif">BLUEPRINTS</span>{' '}
            INTO REALITY.
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-ivory-200 text-base sm:text-lg md:text-xl font-body leading-relaxed mb-10 max-w-2xl font-light"
          >
            Transforming ideas into durable, functional and sustainable spaces through
            construction, infrastructure and landscaping expertise.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap items-center gap-4 sm:gap-5"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 bg-champagne-500 hover:bg-champagne-400 text-forest-950 font-semibold px-8 py-4 text-sm tracking-wide transition-all duration-300 font-body shadow-lg shadow-champagne-500/20 group"
            >
              Start a Project
              <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 border border-champagne-500/80 hover:border-champagne-400 text-champagne-400 hover:text-forest-950 hover:bg-champagne-500 font-semibold px-8 py-4 text-sm tracking-wide transition-all duration-300 font-body backdrop-blur-sm"
            >
              Explore Our Services
            </Link>
          </motion.div>
        </div>

        {/* Lower Third Controls Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-ivory-300/10">
          {/* Active slide badge */}
          <div className="flex items-center gap-3">
            <span className="text-champagne-400 font-heading text-xs uppercase tracking-widest px-3 py-1 bg-forest-900/80 border border-champagne-500/30">
              {slides[current].tag}
            </span>
            <span className="text-ivory-300/80 text-xs font-body hidden md:inline">
              {slides[current].title}
            </span>
          </div>

          {/* Slide Indicators and Arrows */}
          <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
            {/* Indicators */}
            <div className="flex items-center gap-2" role="tablist" aria-label="Slides">
              {slides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrent(idx)}
                  role="tab"
                  aria-selected={current === idx}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-1.5 transition-all duration-300 rounded-full ${
                    current === idx
                      ? 'w-8 bg-champagne-500'
                      : 'w-2 bg-ivory-200/30 hover:bg-ivory-200/60'
                  }`}
                />
              ))}
            </div>

            {/* Prev / Next controls */}
            <div className="flex items-center gap-1.5 ml-3">
              <button
                onClick={prevSlide}
                className="w-10 h-10 flex items-center justify-center border border-ivory-200/20 text-ivory-200 hover:border-champagne-500 hover:text-champagne-400 hover:bg-forest-900/60 transition-colors"
                aria-label="Previous photograph"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="w-10 h-10 flex items-center justify-center border border-ivory-200/20 text-ivory-200 hover:border-champagne-500 hover:text-champagne-400 hover:bg-forest-900/60 transition-colors"
                aria-label={isPaused ? 'Play slideshow' : 'Pause slideshow'}
              >
                {isPaused ? <Play size={14} /> : <Pause size={14} />}
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 flex items-center justify-center border border-ivory-200/20 text-ivory-200 hover:border-champagne-500 hover:text-champagne-400 hover:bg-forest-900/60 transition-colors"
                aria-label="Next photograph"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
