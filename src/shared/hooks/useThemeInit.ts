import { useEffect } from 'react'
import { THEME_LOCAL_STORAGE_KEY } from '../constants/localStorageKeys'
import { EnThemesEntity } from '../types/entities/shared/Themes'

export const useThemeInit = () => {
	const theme = localStorage.getItem(THEME_LOCAL_STORAGE_KEY)
	console.log(theme)

	useEffect(() => {
		if (theme !== null) {
			document.documentElement.setAttribute('data-theme', theme)
		} else {
			document.documentElement.setAttribute('data-theme', EnThemesEntity.LIGHT)
		}
	}, [])
}
