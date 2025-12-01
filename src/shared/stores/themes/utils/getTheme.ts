import { THEME_LOCAL_STORAGE_KEY } from '@/shared/constants/localStorageKeys'
import { EnThemesEntity } from '@/shared/types/entities/shared/Themes'

export const getTheme = () => {
	const theme: string | null = localStorage.getItem(THEME_LOCAL_STORAGE_KEY)

	if (theme !== null) {
		switch (theme) {
			case EnThemesEntity.DARK:
				return EnThemesEntity.DARK

			case EnThemesEntity.LIGHT:
				return EnThemesEntity.LIGHT

			default:
				return EnThemesEntity.LIGHT
		}
	}
	return EnThemesEntity.LIGHT
}
