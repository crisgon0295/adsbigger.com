import type { Metadata } from 'next'
import React from 'react'

import { HomeLanding } from '@/components/home/HomeLanding'
import { faq } from '@/components/home/copy'
import { getServerSideURL } from '@/utilities/getURL'

// La Home es contenido estático (copy del Documento 04 en copy.ts) — no
// consulta la base de datos, así que se prerenderiza en build para el mejor
// LCP posible. Cuando el copy migre a bloques de Payload, volverá a ISR.
export const dynamic = 'force-static'

export default function HomePage() {
  const url = getServerSideURL()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${url}/#organization`,
        name: 'adsBigger',
        url: `${url}/`,
        logo: `${url}/brand/logo-horizontal-white.svg`,
        email: 'agency.adsbigger@gmail.com',
        description:
          'No vendemos bots. Instalamos empleados de IA conectados a WhatsApp, CRM y facturación para pymes en LATAM.',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Bogotá',
          addressCountry: 'CO',
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${url}/#website`,
        url: `${url}/`,
        name: 'adsBigger — Empleados de IA para pymes',
        inLanguage: 'es',
        publisher: { '@id': `${url}/#organization` },
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${url}/#localbusiness`,
        name: 'adsBigger',
        url: `${url}/`,
        image: `${url}/brand/logo-horizontal-white.svg`,
        email: 'agency.adsbigger@gmail.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Bogotá',
          addressRegion: 'Bogotá D.C.',
          addressCountry: 'CO',
        },
        areaServed: ['CO', 'MX', 'CL', 'PE', 'AR'],
        priceRange: '$$$',
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}/#faq`,
        mainEntity: faq.items.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeLanding />
    </>
  )
}

export function generateMetadata(): Metadata {
  const url = getServerSideURL()
  return {
    // Keyword Tier 1 lo más a la izquierda (Doc. 05 / SOP Doc. 02)
    title: 'Empleados de IA para pymes | adsBigger',
    description:
      'No vendemos bots. Instalamos empleados de IA conectados a WhatsApp, tu CRM y tu facturación: ejecutan procesos reales, con control humano y trazabilidad. Bogotá, Colombia.',
    alternates: { canonical: `${url}/` },
  }
}
