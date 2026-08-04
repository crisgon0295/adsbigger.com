import React from 'react'

/**
 * Encabezado de etapa v2 (redesign "Instalación inmersiva"): numeral fantasma
 * gigante detrás del contenido (firma Orano-style), etiqueta en small caps y
 * título display encima. El numeral es decorativo (aria-hidden) y nunca
 * intercepta el puntero.
 */
export function StageHeading({
  stage,
  label,
  titulo,
  id,
}: {
  stage: string
  label: string
  titulo: string
  id?: string
}) {
  return (
    <header id={id} className="relative scroll-mt-28">
      <span aria-hidden="true" className="ghost-numeral absolute -top-14 right-0 md:-top-24">
        {stage}
      </span>
      <div className="relative">
        <p className="flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          <span aria-hidden="true" className="font-display text-2xl leading-none text-ruptura">
            {stage}
          </span>
          {label}
        </p>
        <h2 className="mt-5 max-w-[22ch] text-balance font-display text-3xl leading-[1.08] tracking-tight text-foreground md:text-5xl">
          {titulo}
        </h2>
      </div>
    </header>
  )
}
