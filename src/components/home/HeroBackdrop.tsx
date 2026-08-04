'use client'

import dynamic from 'next/dynamic'
import React, { useEffect, useState } from 'react'

const Threads = dynamic(() => import('@/components/Threads'), { ssr: false })

/**
 * Fondo del hero: Threads (React Bits, WebGL) en Rojo Ruptura sobre Obsidian —
 * la "ruta roja" del zorro (Brand Style / propuesta comercial). Presupuesto de
 * performance del Doc. 09 §5.4: es el ÚNICO WebGL de todo el sitio, solo se
 * monta en viewports ≥768px, sin reduced-motion y sin data-saver; en cualquier
 * otro caso queda el fallback estático CSS (el degradado del contenedor padre).
 */
export function HeroBackdrop() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const wide = window.matchMedia('(min-width: 768px)').matches
    type NetworkInformation = { saveData?: boolean }
    const conn = (navigator as Navigator & { connection?: NetworkInformation }).connection
    const saveData = conn?.saveData === true
    setEnabled(!reduced && wide && !saveData)
  }, [])

  if (!enabled) return null

  return (
    <div aria-hidden="true" className="absolute inset-0">
      <Threads color={[0.835, 0.102, 0.02]} amplitude={0.9} distance={0.25} enableMouseInteraction={false} />
    </div>
  )
}
