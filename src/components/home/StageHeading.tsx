import React from 'react'

/**
 * Encabezado de etapa del Narrative Workflow: número grande en Rojo Ruptura
 * apilado SOBRE el título (nunca a la izquierda — regla hallmark gate 54),
 * con regla gruesa numerada como divisor de etapa. Numerado estilo Hormozi
 * del Brand System v2 (módulo 09).
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
    <header id={id} className="scroll-mt-24">
      <div aria-hidden="true" className="flex items-baseline gap-4 border-t-2 border-border pt-6">
        <span className="font-display text-5xl leading-none text-ruptura md:text-6xl">{stage}</span>
        <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          {label}
        </span>
      </div>
      <h2 className="mt-6 max-w-[24ch] font-display text-3xl leading-[1.1] tracking-tight text-foreground md:text-5xl">
        {titulo}
      </h2>
    </header>
  )
}
