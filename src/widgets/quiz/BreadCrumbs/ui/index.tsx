import { ROUTES } from '@/shared/configs/routes'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbSeparator,
} from '@/shared/ui-kit/breadcrumb'
import { type FC, type HTMLAttributes } from 'react'
import { Link } from 'react-router-dom'

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const BreadCrumbs: FC<Props> = ({ ...props }) => {
	return (
		<Breadcrumb {...props} className='paddings-x-sections my-12'>
			<BreadcrumbList>
				<BreadcrumbItem>
					<Link to={ROUTES.HOME}>Главная</Link>
				</BreadcrumbItem>
				<BreadcrumbSeparator>/</BreadcrumbSeparator>
				<BreadcrumbItem>Опросы</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	)
}
