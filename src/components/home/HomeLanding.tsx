import React from 'react'
import {
  FileCheck2,
  Gauge,
  MessageCircle,
  ShieldCheck,
  Target,
  type LucideIcon,
} from 'lucide-react'

import SpotlightCard from '@/components/SpotlightCard'
import { HeroBackdrop } from './HeroBackdrop'
import { StageReveal } from './StageReveal'
import { HeroTitle } from './HeroTitle'
import { StageHeading } from './StageHeading'
import {
  comoFunciona,
  ctaFinal,
  definicion,
  evidencia,
  faq,
  hero,
  portafolio,
  problema,
  roi,
} from './copy'

const iconos: Record<string, LucideIcon> = {
  'message-circle': MessageCircle,
  target: Target,
  'file-check-2': FileCheck2,
  'shield-check': ShieldCheck,
  gauge: Gauge,
}

function CtaButton({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="inline-flex min-h-11 items-center justify-center whitespace-nowrap bg-ruptura px-6 py-3 text-sm font-bold text-white transition-[transform,filter] duration-150 ease-out hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sistema active:translate-y-px"
    >
      {label}
    </a>
  )
}

function Fud({ children }: { children: React.ReactNode }) {
  return (
    <li className="border border-border px-3 py-1.5 text-xs leading-snug text-muted-foreground">
      {children}
    </li>
  )
}

const Stage = StageReveal

export function HomeLanding() {
  return (
    <main className="bg-background text-foreground">
      {/* ══ HERO ══ */}
      <section className="relative overflow-hidden">
        {/* Fallback estático: leve resplandor rojo sobre Obsidian (siempre presente, bajo el WebGL) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_20%,rgba(213,26,5,0.14),transparent_70%)]"
        />
        <HeroBackdrop />
        {/* Capa de contraste bajo el texto (regla de marca: overlay Obsidian bajo contenido sobre imagen) */}
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/70 to-transparent" />

        <div className="relative mx-auto flex min-h-[88svh] max-w-6xl flex-col justify-center px-5 py-28 md:px-8">
          <p className="mb-5 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            {hero.eyebrow}
          </p>
          <HeroTitle text={hero.h1} />
          <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-muted-foreground md:text-lg">
            {hero.sub}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <CtaButton label={hero.ctaPrimary.label} href={hero.ctaPrimary.href} />
            <a
              href={hero.ctaSecondary.href}
              className="text-sm font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sistema"
            >
              {hero.ctaSecondary.label} →
            </a>
          </div>
          <ul className="mt-10 flex max-w-3xl flex-wrap gap-2">
            {hero.fuds.map((f) => (
              <Fud key={f}>{f}</Fud>
            ))}
          </ul>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-28 px-5 pb-28 md:px-8 md:pb-36">
        {/* ══ 01 · EL PROBLEMA (PAS en Voice of Customer) ══ */}
        <section id="problema">
          <Stage>
            <StageHeading stage={problema.stage} label={problema.label} titulo={problema.titulo} />
            <ul className="mt-10">
              {problema.preguntas.map((q) => (
                <li
                  key={q}
                  className="border-b border-border py-5 font-display text-xl leading-snug text-foreground/90 md:text-2xl"
                >
                  {q}
                </li>
              ))}
            </ul>
          </Stage>
        </section>

        {/* ══ 02 · EL SISTEMA (definición citable — GEO) ══ */}
        <section id="sistema">
          <Stage>
            <StageHeading stage={definicion.stage} label={definicion.label} titulo={definicion.titulo} />
            <div className="mt-8 grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
              <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                <p className="text-foreground">{definicion.cuerpo}</p>
                <p>{definicion.antiMarca}</p>
              </div>
              <aside className="space-y-4 border-l-2 border-sistema pl-5 text-sm leading-relaxed text-muted-foreground">
                <p>{definicion.diferenciacion}</p>
                <p>{definicion.local}</p>
              </aside>
            </div>
          </Stage>
        </section>

        {/* ══ 03 · EL PORTAFOLIO ══ */}
        <section id="portafolio">
          <Stage>
            <StageHeading stage={portafolio.stage} label={portafolio.label} titulo={portafolio.titulo} />
            <p className="mt-4 max-w-[52ch] text-sm text-muted-foreground">{portafolio.nota}</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {portafolio.departamentos.map((d) => {
                const Icono = iconos[d.icono] ?? Target
                return (
                  <SpotlightCard
                    key={d.nombre}
                    className="rounded-none border-border bg-card p-6"
                    spotlightColor="rgba(213, 26, 5, 0.12)"
                  >
                    <Icono aria-hidden="true" size={28} strokeWidth={1.5} className="text-foreground" />
                    <h3 className="mt-5 font-display text-xl text-foreground">{d.nombre}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.resultado}</p>
                    <p className="mt-4 text-xs uppercase tracking-wide text-secundario">{d.roles}</p>
                  </SpotlightCard>
                )
              })}
            </div>
          </Stage>
        </section>

        {/* ══ 04 · CÓMO SE INSTALA (F4 step sequence — azul: proceso/datos) ══ */}
        <section id="como-funciona" className="scroll-mt-24">
          <Stage>
            <StageHeading stage={comoFunciona.stage} label={comoFunciona.label} titulo={comoFunciona.titulo} />
            <ol className="mt-10 grid gap-x-8 gap-y-10 md:grid-cols-2">
              {comoFunciona.pasos.map((p) => (
                <li key={p.n} className="border-t border-sistema/40 pt-5">
                  <span aria-hidden="true" className="font-display text-2xl text-sistema">
                    {p.n}.
                  </span>
                  <h3 className="mt-2 font-display text-xl text-foreground">{p.titulo}</h3>
                  <p className="mt-2 max-w-[46ch] text-sm leading-relaxed text-muted-foreground">{p.texto}</p>
                </li>
              ))}
            </ol>
          </Stage>
        </section>

        {/* ══ 05 · EVIDENCIA (placeholder honesto — nunca testimonios inventados) ══ */}
        <section id="evidencia">
          <Stage>
            <StageHeading stage={evidencia.stage} label={evidencia.label} titulo={evidencia.titulo} />
            <p className="mt-8 max-w-[58ch] text-base leading-relaxed text-muted-foreground md:text-lg">
              {evidencia.texto}
            </p>
          </Stage>
        </section>

        {/* ══ 06 · TU NÚMERO (ROI) ══ */}
        <section id="roi">
          <Stage>
            <StageHeading stage={roi.stage} label={roi.label} titulo={roi.titulo} />
            <div className="mt-8 max-w-[58ch] space-y-5">
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{roi.texto}</p>
              <p className="border-l-2 border-ruptura pl-4 font-medium text-foreground">{roi.honesto}</p>
              <a
                href={roi.cta.href}
                className="inline-block text-sm font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sistema"
              >
                {roi.cta.label} →
              </a>
            </div>
          </Stage>
        </section>

        {/* ══ 07 · PREGUNTAS HONESTAS (FAQ + schema en page.tsx) ══ */}
        <section id="faq" className="scroll-mt-24">
          <Stage>
            <StageHeading stage={faq.stage} label={faq.label} titulo={faq.titulo} />
            <div className="mt-10">
              {faq.items.map((item) => (
                <details key={item.q} className="group border-b border-border">
                  <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 py-5 font-display text-lg text-foreground marker:content-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sistema md:text-xl [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <span aria-hidden="true" className="shrink-0 text-muted-foreground transition-transform duration-150 ease-out group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="max-w-[62ch] pb-6 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </Stage>
        </section>

        {/* ══ CTA FINAL ══ */}
        <section id="diagnostico" className="scroll-mt-24 border-t-2 border-border pt-16">
          <h2 className="max-w-[22ch] font-display text-3xl leading-[1.1] tracking-tight text-foreground md:text-5xl">
            {ctaFinal.titulo}
          </h2>
          <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-muted-foreground md:text-lg">
            {ctaFinal.texto}
          </p>
          <div className="mt-9">
            <CtaButton label={ctaFinal.cta.label} href={ctaFinal.cta.href} />
            <p className="mt-3 text-xs text-muted-foreground">{ctaFinal.contacto}</p>
          </div>
          <ul className="mt-8 flex max-w-3xl flex-wrap gap-2">
            {ctaFinal.fuds.map((f) => (
              <Fud key={f}>{f}</Fud>
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
}
