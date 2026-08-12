'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type Slide = {
  image: string
  alt: string
  eyebrow: string
  title: string
  description: string
  ctaLabel: string
}

const slides: Slide[] = [
  {
    image: '/slider-campus.png',
    alt: 'Padmodaya Campus building and courtyard at golden hour',
    eyebrow: 'Welcome to Padmodaya Campus',
    title: 'Where Knowledge Meets Opportunity',
    description:
      'A community college committed to academic excellence, character, and the success of every student.',
    ctaLabel: 'Explore Programs',
  },
  {
    image: '/slider-library.png',
    alt: 'Students studying together in a modern library',
    eyebrow: 'A Culture of Learning',
    title: 'Resources That Empower You',
    description:
      'Well-equipped libraries, laboratories, and dedicated faculty to support your academic journey.',
    ctaLabel: 'Discover Facilities',
  },
  {
    image: '/slider-graduation.png',
    alt: 'Graduates celebrating and throwing caps in the air',
    eyebrow: 'Building Futures',
    title: 'Graduates Ready for the World',
    description:
      'Join thousands of alumni who launched successful careers from the foundation built at Padmodaya.',
    ctaLabel: 'Apply for Admission',
  },
]

const AUTOPLAY_MS = 5500

export function HeroSlider() {
  const [current, setCurrent] = useState(0)

  const goTo = useCallback((index: number) => {
    setCurrent((index + slides.length) % slides.length)
  }, [])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length)
    }, AUTOPLAY_MS)
    return () => clearInterval(timer)
  }, [current])

  return (
    <section
      className="relative h-[560px] w-full overflow-hidden md:h-[640px]"
      aria-roledescription="carousel"
      aria-label="Campus highlights"
    >
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
            index === current ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
          aria-hidden={index !== current}
        >
          <Image
            src={slide.image || '/placeholder.svg'}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/20" />

          <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-6">
            <div className="max-w-2xl">
              <p
                className={`mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-accent/95 px-4 py-1.5 text-sm font-medium text-accent-foreground transition-all delay-150 duration-700 ${
                  index === current
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0'
                }`}
              >
                {slide.eyebrow}
              </p>
              <h1
                className={`text-balance font-serif text-4xl font-semibold leading-tight text-primary-foreground transition-all delay-200 duration-700 md:text-6xl ${
                  index === current
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0'
                }`}
              >
                {slide.title}
              </h1>
              <p
                className={`mt-5 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/90 transition-all delay-300 duration-700 ${
                  index === current
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0'
                }`}
              >
                {slide.description}
              </p>
              <div
                className={`mt-8 flex flex-wrap gap-4 transition-all delay-500 duration-700 ${
                  index === current
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0'
                }`}
              >
                <a
                  href="#programs"
                  className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg transition-transform hover:-translate-y-0.5"
                >
                  {slide.ctaLabel}
                </a>
                <a
                  href="#about"
                  className="rounded-md border border-primary-foreground/40 bg-primary-foreground/10 px-6 py-3 text-sm font-semibold text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/20"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full border border-primary-foreground/30 bg-primary/30 p-3 text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary/60 md:flex"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full border border-primary-foreground/30 bg-primary/30 p-3 text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary/60 md:flex"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === current}
            className={`h-2.5 rounded-full transition-all ${
              index === current
                ? 'w-8 bg-accent'
                : 'w-2.5 bg-primary-foreground/50 hover:bg-primary-foreground/80'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
