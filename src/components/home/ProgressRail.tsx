'use client'

import React, { useEffect, useState } from 'react'

/**
 * Rail de progreso fijo (firma Orano): los números de etapa 01–07 en el borde
 * derecho; el activo se enciende en Rojo Ruptura conforme la sección entra al
 * viewport. Solo desktop (≥1280px) — en móvil sería ruido. Navegable: cada
 * número es un ancla real.
 */
const etapas = [
  { n: '01', id: 'problema' },
  { n: '02', id: 'sistema' },
  { n: '03', id: 'portafolio' },
  { n: '04', id: 'como-funciona' },
  { n: '05', id: 'evidencia' },
  { n: '06', id: 'roi' },
  { n: '07', id: 'faq' },
]

export function ProgressRail() {
  const [activo, setActivo] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActivo(e.target.id)
        }
      },
      { rootMargin: '-40% 0px -50% 0px' },
    )
    for (const s of etapas) {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      aria-label="Progreso"
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-3 xl:flex"
    >
      {etapas.map((s) => {
        const isActive = activo === s.id
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            aria-current={isActive ? 'true' : undefined}
            className={
              'flex items-center gap-2 text-xs transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sistema ' +
              (isActive ? 'font-bold text-ruptura' : 'text-white/25 hover:text-white/60')
            }
          >
            <span className={'h-px transition-all duration-200 ' + (isActive ? 'w-6 bg-ruptura' : 'w-3 bg-white/20')} />
            {s.n}
          </a>
        )
      })}
    </nav>
  )
}
