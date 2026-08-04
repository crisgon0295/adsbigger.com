'use client'

import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

/**
 * Nav de marca — archetipo N1b (SaaS three-section) con "navegación desnuda"
 * del Doc. 04: logo + 3 anclas + CTA. Frost-on-scroll (transparente sobre el
 * hero, se congela con blur + hairline al pasar ~24px). En móvil el cluster
 * central se oculta: solo logo + CTA sticky (regla AGENTS.md Paso 4).
 */
const links = [
  { label: 'El sistema', href: '#sistema' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Preguntas', href: '#faq' },
]

export function BrandNav() {
  const [scrolled, setScrolled] = useState(false)
  const ticking = useRef(false)

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return
      ticking.current = true
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24)
        ticking.current = false
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={
        'fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-200 ' +
        (scrolled
          ? 'border-border bg-obsidian/75 shadow-[0_8px_28px_-18px_rgba(0,0,0,0.6)] backdrop-blur-lg'
          : 'border-transparent bg-transparent')
      }
    >
      <div className="mx-auto grid h-16 max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-5 md:px-8">
        <Link href="/" className="justify-self-start focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sistema">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/logo-horizontal-white.svg"
            alt="adsBigger"
            width={160}
            height={34}
            fetchPriority="high"
            decoding="async"
            className="h-[30px] w-auto"
          />
        </Link>
        <nav aria-label="Principal" className="hidden justify-self-center md:flex md:gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sistema"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#diagnostico"
          className="min-h-11 content-center justify-self-end whitespace-nowrap bg-ruptura px-4 py-2 text-sm font-bold text-white transition-[filter] duration-150 ease-out hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sistema active:translate-y-px"
        >
          Diagnóstico Gratis
        </a>
      </div>
    </header>
  )
}
