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
import { HeroScroll } from './HeroScroll'
import { HeroTitle } from './HeroTitle'
import { ProgressRail } from './ProgressRail'
import { StageHeading } from './StageHeading'
import { StageReveal } from './StageReveal'
import { StepsCarousel } from './StepsCarousel'
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
      className="inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-full bg-ruptura px-7 py-3 text-sm font-bold text-white shadow-[0_12px_40px_-12px_rgba(213,26,5,0.55)] transition-[transform,filter,box-shadow] duration-200 ease-out hover:brightness-110 hover:shadow-[0_16px_50px_-12px_rgba(213,26,5,0.7)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sistema active:translate-y-px"
    >
      {label}
    </a>
  )
}

function Fud({ children }: { children: React.ReactNode }) {
  return (
    <li className="glass rounded-full px-4 py-2 text-xs leading-snug text-white/70">{children}</li>
  )
}

const Stage = StageReveal

export function HomeLanding() {
  return (
    <main className="bg-background text-foreground">
      <ProgressRail />

      {/* ══ HERO — pinneado con scrub ══ */}
      <HeroScroll>
        <section className="relative flex min-h-svh flex-col justify-center overflow-hidden">
          <div data-hero-backdrop className="absolute inset-0">
            <div aria-hidden="true" className="glow-ruptura absolute inset-0" />
            <HeroBackdrop />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(ellipse_75%_60%_at_50%_45%,transparent_30%,#111111_100%)]"
            />
          </div>

          <div data-hero-content className="relative mx-auto w-full max-w-5xl px-5 py-28 text-center md:px-8">
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-white/50">
              {hero.eyebrow}
            </p>
            <div className="flex justify-center">
              <HeroTitle text={hero.h1} />
            </div>
            <p className="mx-auto mt-7 max-w-[54ch] text-balance text-base leading-relaxed text-white/65 md:text-lg">
              {hero.sub}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
              <CtaButton label={hero.ctaPrimary.label} href={hero.ctaPrimary.href} />
              <a
                href={hero.ctaSecondary.href}
                className="text-sm font-medium text-white/80 underline decoration-white/25 underline-offset-4 transition-colors hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sistema"
              >
                {hero.ctaSecondary.label} ↓
              </a>
            </div>
            <ul className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-2.5">
              {hero.fuds.map((f) => (
                <Fud key={f}>{f}</Fud>
              ))}
            </ul>
          </div>

          <div aria-hidden="true" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest text-white/30">
            Scroll
          </div>
        </section>
      </HeroScroll>

      <div className="mx-auto max-w-6xl space-y-32 px-5 pb-32 pt-24 md:space-y-44 md:px-8">
        {/* ══ 01 · EL PROBLEMA ══ */}
        <section>
          <Stage>
            <StageHeading stage={problema.stage} label={problema.label} titulo={problema.titulo} id="problema" />
            <ul className="relative mt-12 grid gap-4">
              {problema.preguntas.map((q, i) => (
                <li
                  key={q}
                  className={
                    'glass max-w-3xl px-7 py-6 font-display text-lg leading-snug text-white/90 md:text-2xl ' +
                    (i % 2 === 1 ? 'md:ml-24' : '')
                  }
                >
                  {q}
                </li>
              ))}
            </ul>
          </Stage>
        </section>

        {/* ══ 02 · EL SISTEMA (definición citable — GEO) ══ */}
        <section className="relative">
          <div aria-hidden="true" className="glow-sistema absolute -inset-x-16 -inset-y-10" />
          <Stage>
            <div className="relative">
              <StageHeading stage={definicion.stage} label={definicion.label} titulo={definicion.titulo} id="sistema" />
              <div className="mt-10 grid gap-6 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
                <div className="glass-deep space-y-5 p-8 text-base leading-relaxed md:p-10 md:text-lg">
                  <p className="text-white/90">{definicion.cuerpo}</p>
                  <p className="text-white/60">{definicion.antiMarca}</p>
                </div>
                <aside className="glass space-y-5 self-start p-7 text-sm leading-relaxed text-white/65">
                  <p>{definicion.diferenciacion}</p>
                  <p className="border-t border-white/10 pt-5">{definicion.local}</p>
                </aside>
              </div>
            </div>
          </Stage>
        </section>

        {/* ══ 03 · EL PORTAFOLIO ══ */}
        <section>
          <Stage>
            <StageHeading stage={portafolio.stage} label={portafolio.label} titulo={portafolio.titulo} id="portafolio" />
            <p className="mt-4 max-w-[52ch] text-sm text-white/50">{portafolio.nota}</p>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {portafolio.departamentos.map((d) => {
                const Icono = iconos[d.icono] ?? Target
                return (
                  <SpotlightCard
                    key={d.nombre}
                    className="glass-deep !rounded-3xl border-white/10 p-7 transition-transform duration-200 ease-out hover:-translate-y-1"
                    spotlightColor="rgba(213, 26, 5, 0.14)"
                  >
                    <span className="inline-flex rounded-2xl border border-white/10 bg-white/5 p-3">
                      <Icono aria-hidden="true" size={26} strokeWidth={1.5} className="text-white" />
                    </span>
                    <h3 className="mt-6 font-display text-2xl text-white">{d.nombre}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">{d.resultado}</p>
                    <p className="mt-5 border-t border-white/10 pt-4 text-xs uppercase tracking-wide text-white/40">
                      {d.roles}
                    </p>
                  </SpotlightCard>
                )
              })}
            </div>
          </Stage>
        </section>

        {/* ══ 04 · CÓMO SE INSTALA — slider horizontal scroll-driven ══ */}
        <section>
          <Stage>
            <StageHeading
              stage={comoFunciona.stage}
              label={comoFunciona.label}
              titulo={comoFunciona.titulo}
              id="como-funciona"
            />
          </Stage>
          <StepsCarousel pasos={comoFunciona.pasos} />
        </section>

        {/* ══ 05 · EVIDENCIA (placeholder honesto) ══ */}
        <section>
          <Stage>
            <StageHeading stage={evidencia.stage} label={evidencia.label} titulo={evidencia.titulo} id="evidencia" />
            <div className="glass mt-10 max-w-2xl p-8 md:p-10">
              <p className="text-base leading-relaxed text-white/75 md:text-lg">{evidencia.texto}</p>
            </div>
          </Stage>
        </section>

        {/* ══ 06 · TU NÚMERO (ROI) ══ */}
        <section className="relative">
          <div aria-hidden="true" className="glow-ruptura absolute -inset-x-16 -inset-y-10" />
          <Stage>
            <div className="relative">
              <StageHeading stage={roi.stage} label={roi.label} titulo={roi.titulo} id="roi" />
              <div className="mt-10 max-w-2xl space-y-6">
                <p className="text-base leading-relaxed text-white/70 md:text-lg">{roi.texto}</p>
                <p className="glass inline-block px-6 py-4 font-medium text-white">{roi.honesto}</p>
                <div>
                  <a
                    href={roi.cta.href}
                    className="text-sm font-medium text-white/85 underline decoration-white/25 underline-offset-4 transition-colors hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sistema"
                  >
                    {roi.cta.label} →
                  </a>
                </div>
              </div>
            </div>
          </Stage>
        </section>

        {/* ══ 07 · PREGUNTAS HONESTAS ══ */}
        <section>
          <Stage>
            <StageHeading stage={faq.stage} label={faq.label} titulo={faq.titulo} id="faq" />
            <div className="mt-12 grid max-w-3xl gap-3">
              {faq.items.map((item) => (
                <details key={item.q} className="glass group !rounded-2xl">
                  <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 px-7 py-5 font-display text-lg text-white marker:content-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sistema md:text-xl [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-white/40 transition-transform duration-150 ease-out group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="max-w-[62ch] px-7 pb-6 text-sm leading-relaxed text-white/60 md:text-base">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </Stage>
        </section>

        {/* ══ CTA FINAL ══ */}
        <section id="diagnostico" className="relative scroll-mt-28">
          <div aria-hidden="true" className="glow-ruptura absolute -inset-x-16 -inset-y-12" />
          <div className="glass-deep relative mx-auto max-w-3xl p-10 text-center md:p-14">
            <h2 className="mx-auto max-w-[20ch] text-balance font-display text-3xl leading-[1.08] tracking-tight text-white md:text-5xl">
              {ctaFinal.titulo}
            </h2>
            <p className="mx-auto mt-6 max-w-[48ch] text-balance text-base leading-relaxed text-white/65 md:text-lg">
              {ctaFinal.texto}
            </p>
            <div className="mt-9">
              <CtaButton label={ctaFinal.cta.label} href={ctaFinal.cta.href} />
              <p className="mt-3 text-xs text-white/45">{ctaFinal.contacto}</p>
            </div>
            <ul className="mx-auto mt-9 flex flex-wrap justify-center gap-2.5">
              {ctaFinal.fuds.map((f) => (
                <Fud key={f}>{f}</Fud>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}
