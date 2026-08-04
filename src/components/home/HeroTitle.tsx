'use client'

import React, { useEffect, useState } from 'react'
import SplitText from '@/components/SplitText'

/**
 * H1 del hero con revelado SplitText (React Bits/gsap): una sola vez, rápido
 * (regla de marca: el texto aparece "con corte", no con fades lentos).
 * Con prefers-reduced-motion se renderiza el h1 plano, sin animación.
 * El texto viaja en el SSR inicial (SplitText renderiza el tag con contenido),
 * así que LCP y SEO no dependen de la hidratación.
 */
export function HeroTitle({ text }: { text: string }) {
  const [reduced, setReduced] = useState<boolean | null>(null)

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  const className =
    'max-w-[18ch] font-display text-4xl leading-[1.08] tracking-tight text-foreground md:text-6xl'

  // Antes de saber la preferencia (SSR y primer paint) y cuando hay
  // reduced-motion: h1 plano. Solo tras confirmar que se permite motion se
  // monta la variante animada.
  if (reduced !== false) {
    return <h1 className={className}>{text}</h1>
  }

  return (
    <SplitText
      text={text}
      tag="h1"
      className={className}
      splitType="words"
      delay={28}
      duration={0.5}
      ease="power3.out"
      from={{ opacity: 0, y: 24 }}
      to={{ opacity: 1, y: 0 }}
      threshold={0.1}
      textAlign="left"
    />
  )
}
