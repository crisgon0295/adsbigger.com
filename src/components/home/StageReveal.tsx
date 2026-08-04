'use client'

import React, { useEffect, useState } from 'react'
import AnimatedContent from '@/components/AnimatedContent'

/**
 * Entrada de etapa (Narrative Workflow): fade + desplazamiento corto al entrar
 * al viewport, una sola vez. AnimatedContent (React Bits/gsap) no trae guardia
 * de prefers-reduced-motion, así que se aplica aquí: con la preferencia activa
 * (o antes de hidratar) el contenido se muestra plano.
 */
export function StageReveal({ children }: { children: React.ReactNode }) {
  const [motionOk, setMotionOk] = useState<boolean | null>(null)

  useEffect(() => {
    setMotionOk(!window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  if (motionOk !== true) return <div>{children}</div>

  return (
    <AnimatedContent
      distance={40}
      direction="vertical"
      duration={0.55}
      ease="power2.out"
      initialOpacity={0}
      animateOpacity
      threshold={0.15}
    >
      {children}
    </AnimatedContent>
  )
}
