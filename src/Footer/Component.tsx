import React from 'react'

import { footer } from '@/components/home/copy'

/**
 * Footer de marca — archetipo Ft5 Statement: la frase madre como cierre
 * tipográfico grande; wordmark, tagline de la empresa matriz y meta debajo,
 * en tipo pequeño y apagado sobre una hairline. Sin columnas de sitemap
 * (Ft3 está vetado como huella de AI-footer). Ya no consulta el CMS.
 */
export async function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-obsidian text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-10 pt-16 md:px-8">
        <p className="max-w-[16ch] font-display text-3xl leading-[1.05] tracking-tight md:text-5xl">
          {footer.statement}
        </p>
        <div className="flex flex-wrap items-baseline justify-between gap-4 border-t border-border pt-4 text-xs text-muted-foreground">
          <span className="flex items-baseline gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/logo-horizontal-white.svg"
              alt="adsBigger"
              width={110}
              height={24}
              loading="lazy"
              decoding="async"
              className="h-5 w-auto self-center"
            />
            <span>{footer.tagline}</span>
          </span>
          <span>
            {footer.handle} · {footer.ciudad} · © {new Date().getFullYear()} adsBigger
          </span>
        </div>
      </div>
    </footer>
  )
}
