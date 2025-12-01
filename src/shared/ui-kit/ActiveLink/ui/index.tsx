import { type FC, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

interface Props {
	children: (params: { isActive: boolean }) => ReactNode
	to: string
	isQueryParamsCheck?: boolean // делаем опциональным
}

export const UiActiveLink: FC<Props> = ({
	children,
	to,
	isQueryParamsCheck = false,
}) => {
	const location = useLocation()

	let cleanToPathname: string
	try {
		const normalizedTo = to.trim()
		const url = new URL(normalizedTo, 'https://fake.com')
		cleanToPathname = url.pathname
	} catch {
		cleanToPathname = to.split('?')[0].split('#')[0]
	}

	let isActive = false

	if (isQueryParamsCheck) {
		const currentFullPath = `${location.pathname}${location.search}`
		const targetUrl = new URL(to, 'https://fake.com')
		const targetFullPath = `${targetUrl.pathname}${targetUrl.search}`
		isActive = currentFullPath === targetFullPath
	} else {
		// Сравниваем только pathname
		isActive = location.pathname === cleanToPathname
	}

	return children({ isActive })
}
