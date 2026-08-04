# design.md — Sistema "Instalación inmersiva" · adsBigger

Sistema de diseño bloqueado del sitio (redesign v2, agosto 2026). Toda página
nueva se construye dentro de este sistema — en proyectos gestionados por
`design.md` la regla de diversificación de hallmark se INVIERTE: las páginas
deben compartir el sistema, no diferenciarse entre sí.

**ADN**: scroll-storytelling industrial (slider inmersivo con numerales
gigantes, rail de progreso, scrub reversible) + premium industrial oscuro
(renders dramáticos, acento cálido puntual) + material Apple-glass. Todo sobre
la marca adsBigger (Brand System v2).

## 1. Tokens (fuente viva: `@theme` en `src/app/(frontend)/globals.css`)

- **Paper**: Obsidian `#111111` — dark-first fijo, sin modo claro público.
- **Acentos (regla Matrix, nunca juntos en un mismo bloque)**: Rojo Ruptura
  `#D51A05` = CTA/urgencia/tensión/etapa activa · Azul Sistema `#179DFF` =
  proceso/datos/progreso/focus ring.
- **Texto sobre Obsidian**: escala de blancos con alpha — `white/90` cuerpo
  protagonista, `white/60-70` cuerpo secundario, `white/40-50` meta,
  `white/25-35` decorativo. Nunca gris medio plano como texto principal.
- **Tipografía**: DM Serif Display (display, roman, tracking -2%) + DM Sans
  (cuerpo/UI). Nunca italic en headers. `text-balance` en títulos centrados.
- **Espaciado**: múltiplos de 8; secciones separadas por `space-y-32/44`.

## 2. Material (utilidades en globals.css)

- `.glass` — panel esmerilado base: blur 24px, borde `white/10`, highlight
  interno. Para tarjetas, pills, FAQ, aside.
- `.glass-deep` — panel protagonista: gradiente sutil + blur 28px + sombra
  profunda. Para el bloque principal de una sección y CTAs finales.
- `.glow-ruptura` / `.glow-sistema` — luz ambiental radial detrás del glass.
  **Regla dura: el glass sin glow detrás no se lee — siempre van en pareja.**
  Un solo glow por sección, según regla Matrix.
- `.ghost-numeral` — numeral fantasma gigante (decorativo, `white/3.5%`).
- **Radios**: `rounded-3xl`/`1.5rem` en paneles, `rounded-full` en pills,
  botones y nav. (El redesign abandona las esquinas duras de v1.)
- **CTA primario**: pill roja con sombra roja difusa
  (`shadow-[0_12px_40px_-12px_rgba(213,26,5,0.55)]`), hover brightness+sombra,
  active translate-y-px. Uno protagonista por vista.

## 3. Motion (GSAP ScrollTrigger — gsap ya instalado)

- **Lenguaje**: scrub atado al scroll (reversible), nunca timers decorativos.
  Easings firmes (`power2/3.out`, `ease: none` en scrub). Sin bounce.
- **Patrones aprobados**: hero pin+scrub (contenido sube y desvanece, fondo
  escala — `HeroScroll`); slider horizontal pinneado con barra de progreso
  (`StepsCarousel`); rail fijo de etapas con IntersectionObserver
  (`ProgressRail`); reveal de etapa una sola vez (`StageReveal`); SplitText en
  el H1 (una vez). Máx. 3 primitivas por página.
- **Guardias obligatorias**: `prefers-reduced-motion` desactiva TODO (pin,
  scrub, slider→pila vertical, SplitText→h1 plano); scroll-jacking prohibido
  en <1024px; WebGL (Threads) solo en el hero de la Home, nunca en otra página.

## 4. Estructura por tipo de página

- **Home** (construida): Narrative Workflow 01–07 + ProgressRail + hero pin.
- **Silos N2** (`/empleados-ia/*`): mismo material, macro más corta —
  hero compacto (sin pin) con glow del departamento, grid de empleados en
  `glass-deep` + SpotlightCard, CTA final glass. SIN ProgressRail (es firma de
  la Home). Numerales fantasma permitidos solo si la página narra etapas.
- **Landings N3** (producto): hero compacto con H1 fórmula SOP (keyword +
  beneficio + geo), TOC glass sticky, secciones PAS/funciones/límites en
  paneles glass alternando glow rojo (dolor/CTA) y azul (funciones/KPIs),
  FAQ estilo Home, CTA final `glass-deep` centrado.
- **/precios/**: tabla de niveles en paneles `glass-deep` (el nivel
  recomendado con borde `ruptura/40` + glow), FAQ de facturación.
- **Calculadora ROI / Diagnóstico**: formularios dentro de `glass-deep`,
  inputs `bg-white/5 border-white/10 rounded-2xl` con focus ring Azul Sistema,
  divulgación progresiva (SOP Doc. 02 Fase 10).
- **Blog**: paper Obsidian, prosa `white/80`, ancho 700–800px, sin glass en el
  cuerpo (solo en tarjetas de CTA) — la lectura manda.

## 5. Prohibiciones (siguen vigentes del Brand System + hallmark)

Cero: métricas/testimonios inventados, italic en headers, gradient text,
carruseles auto en móvil, stock photos, emojis en UI (solo Lucide 1.5px),
glitch, dos acentos en un bloque, fondos claros como base (Paper `#F4F4F2`
queda reservado a documentos/PDF, no al sitio), glassmorphism sin glow detrás
(la causa #1 de "glass sucio").

## Exports

Tokens portables: `tokens.css` (raíz del repo). Tailwind v4 `@theme`:
`src/app/(frontend)/globals.css`.
