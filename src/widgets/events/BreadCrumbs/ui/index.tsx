import { ROUTES } from '@/shared/configs/routes'
import { isEventsType } from '@/shared/types/guards'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbSeparator,
} from '@/shared/ui-kit/breadcrumb'
import { type FC, type HTMLAttributes } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { RENDER_MAPPING_CONFIG } from '../configs/render-mapping'

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const BreadCrumbs: FC<Props> = ({ ...props }) => {
	const { search } = useLocation()

	const queryParams = new URLSearchParams(search)

	const type = queryParams.get('type')

	if (!isEventsType(type)) return null

	return (
		<Breadcrumb {...props} className='paddings-x-sections my-12'>
			<BreadcrumbList>
				<BreadcrumbItem>
					<Link to={ROUTES.HOME}>Главная</Link>
				</BreadcrumbItem>
				<BreadcrumbSeparator>/</BreadcrumbSeparator>
				<BreadcrumbItem>Мероприятия</BreadcrumbItem>
				<BreadcrumbSeparator>/</BreadcrumbSeparator>
				<BreadcrumbItem>{RENDER_MAPPING_CONFIG[type].text}</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	)
}
