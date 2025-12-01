import { useThemeInit } from '@/shared/hooks/useThemeInit'
import { type FC, type ReactNode } from 'react'

interface Props {
	children: ReactNode
}

export const ThemeProvider: FC<Props> = ({ children }) => {
	useThemeInit()

	return children
}
