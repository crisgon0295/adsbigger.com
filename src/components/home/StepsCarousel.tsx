'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useRef, useState } from 'react'

gsap.registerPlugin(ScrollTrigger)

type Paso = { n: string; titulo: string; texto: string }

/**
 * "Cómo se instala" como slider horizontal scroll-driven (firma Orano): la
 * sección se pinnea y los 4 pasos se deslizan horizontalmente conforme el
 * usuario scrollea en vertical, con barra de progreso en Azul Sistema
 * (proceso = datos, regla Matrix). En móvil (<1024px) o con reduced-motion
 * cae a una pila vertical simple — el scroll-jacking en teléfono es hostil.
 */
export function StepsCarousel({ pasos }: { pasos: Paso[] }) {
  const rootRef = useRef<HTMLDivElement>(null)
  const [horizontal, setHorizontal] = useState(false)

  useEffect(() => {
    const wide = window.matchMedia('(min-width: 1024px)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setHorizontal(wide && !reduced)
  }, [])

  useEffect(() => {
    if (!horizontal) return
    const root = rootRef.current
    if (!root) return
    const track = root.querySelector<HTMLElement>('[data-track]')
    const bar = root.querySelector<HTMLElement>('[data-bar]')
    if (!track) return

    const ctx = gsap.context(() => {
      const distance = () => track.scrollWidth - root.clientWidth
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: 'top top',
          end: () => `+=${distance() + 400}`,
          scrub: 0.5,
          pin: true,
          invalidateOnRefresh: true,
        },
      })
      tl.to(track, { x: () => -distance(), ease: 'none' }, 0)
      if (bar) tl.to(bar, { scaleX: 1, ease: 'none' }, 0)
    }, root)

    return () => ctx.revert()
  }, [horizontal])

  const Card = ({ p }: { p: Paso }) => (
    <article className="glass-deep flex h-full flex-col justify-between p-8 md:p-10">
      <span aria-hidden="true" className="font-display text-6xl leading-none text-sistema md:text-7xl">
        {p.n}
      </span>
      <div>
        <h3 className="mt-8 font-display text-2xl text-foreground md:text-3xl">{p.titulo}</h3>
        <p className="mt-3 max-w-[38ch] text-sm leading-relaxed text-muted-foreground md:text-base">
          {p.texto}
        </p>
      </div>
    </article>
  )

  if (!horizontal) {
    return (
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {pasos.map((p) => (
          <Card key={p.n} p={p} />
        ))}
      </div>
    )
  }

  return (
    <div ref={rootRef} className="relative mt-6 flex min-h-svh flex-col justify-center overflow-hidden">
      <div aria-hidden="true" className="glow-sistema absolute inset-0" />
      <div data-track className="relative flex w-max gap-6 pr-[20vw]">
        {pasos.map((p) => (
          <div key={p.n} className="h-[52svh] w-[38rem] max-w-[80vw] shrink-0">
            <Card p={p} />
          </div>
        ))}
      </div>
      <div className="relative mt-10 h-px w-full max-w-3xl overflow-hidden rounded bg-white/10">
        <div data-bar className="h-full w-full origin-left scale-x-0 bg-sistema" />
      </div>
    </div>
  )
}
