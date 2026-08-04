import React from 'react'

import { BrandNav } from './BrandNav'

/**
 * Header de marca (N1b, navegación desnuda del Doc. 04). Ya no consulta el
 * global "header" del CMS: los destinos de la Home son anclas fijas y esto
 * permite que la página raíz sea 100% estática. Cuando existan los silos de
 * Nivel 2 (Sprint 3), el nav volverá a leer del CMS.
 */
export async function Header() {
  return <BrandNav />
}
