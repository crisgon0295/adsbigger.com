'use client'

import Link from 'next/link'
import React from 'react'

/**
 * Nav v2 (redesign "Instalación inmersiva") — archetipo N5 floating pill:
 * píldora esmerilada despegada de los bordes, blur real, estilo Apple.
 * Navegación desnuda del Doc. 04: logo + 3 anclas + CTA. En móvil el cluster
 * central se oculta: solo logo + CTA (regla AGENTS.md Paso 4).
 * Nota de rotación hallmark: nav anterior N1b → este build N5, porque el
 * redesign pide material glass y la píldora es su expresión de navegación.
 */
const links = [
  { label: 'El sistema', href: '#sistema' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Preguntas', href: '#faq' },
]

export function BrandNav() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <div className="glass flex h-14 w-full max-w-3xl items-center justify-between gap-3 !rounded-full pl-5 pr-2">
        <Link
          href="/"
          className="shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sistema"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/logo-horizontal-white.svg"
            alt="adsBigger"
            width={150}
            height={32}
            fetchPriority="high"
            decoding="async"
            className="h-7 w-auto"
          />
        </Link>
        <nav aria-label="Principal" className="hidden md:flex md:gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm text-white/60 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sistema"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#diagnostico"
          className="inline-flex min-h-10 shrink-0 items-center whitespace-nowrap rounded-full bg-ruptura px-5 py-2 text-sm font-bold text-white transition-[filter] duration-150 ease-out hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sistema active:translate-y-px"
        >
          Diagnóstico Gratis
        </a>
      </div>
    </header>
  )
}
