import type { Theme } from './types'

export const themeLocalStorageKey = 'payload-theme'

// adsBigger es dark-first por marca (Obsidian #111111 como fondo base) —
// no se respeta la preferencia de sistema para el sitio público.
export const defaultTheme = 'dark'

export const getImplicitPreference = (): Theme | null => {
  const mediaQuery = '(prefers-color-scheme: dark)'
  const mql = window.matchMedia(mediaQuery)
  const hasImplicitPreference = typeof mql.matches === 'boolean'

  if (hasImplicitPreference) {
    return mql.matches ? 'dark' : 'light'
  }

  return null
}
