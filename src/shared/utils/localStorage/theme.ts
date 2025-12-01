import { THEME_LOCAL_STORAGE_KEY } from '@/shared/constants/localStorageKeys'
import type { EnThemesEntity } from '@/shared/types/entities/shared/Themes'

export const setLocalStorageTheme = (theme: EnThemesEntity) => {
	if (typeof window !== 'undefined') {
		return localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme)
	}
}
