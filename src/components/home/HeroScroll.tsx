'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

/**
 * Hero pinneado con scrub (Apple/Orano-style): al hacer scroll, el contenido
 * del hero se eleva y desvanece mientras el fondo escala sutilmente — la
 * animación está atada a la posición del scroll (reversible), no a un timer.
 * Con prefers-reduced-motion no se crea ningún ScrollTrigger.
 */
export function HeroScroll({ children }: { children: React.ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const root = rootRef.current
    if (!root) return

    const content = root.querySelector('[data-hero-content]')
    const backdrop = root.querySelector('[data-hero-backdrop]')

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: 'top top',
          end: '+=70%',
          scrub: 0.6,
          pin: true,
          pinSpacing: true,
        },
      })
      if (content) tl.to(content, { yPercent: -18, opacity: 0, ease: 'none' }, 0)
      if (backdrop) tl.to(backdrop, { scale: 1.12, opacity: 0.5, ease: 'none' }, 0)
    }, root)

    return () => ctx.revert()
  }, [])

  return <div ref={rootRef}>{children}</div>
}
