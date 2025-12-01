import { THEME_LOCAL_STORAGE_KEY } from '@/shared/constants/localStorageKeys'
import { EnThemesEntity } from '@/shared/types/entities/shared/Themes'
import { setLocalStorageTheme } from '@/shared/utils/localStorage/theme'
import { create } from 'zustand'
import { getTheme } from './utils/getTheme'

export interface State {
	theme: EnThemesEntity | null
	setTheme: (theme: EnThemesEntity) => void
}

export const useThemeStore = create<State>()(set => ({
	theme: getTheme(),

	setTheme: theme => {
		document.documentElement.setAttribute('data-theme', theme)
		setLocalStorageTheme(theme)
		set({ theme })
	},
}))
