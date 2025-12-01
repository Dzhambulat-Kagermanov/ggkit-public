import type { State } from './store'

export { useThemeStore } from './store'

// SELECTOR
export const themesThemeSelector = (state: State) => state.theme

// SETTERS
export const themesSetThemeSetter = (state: State) => state.setTheme
