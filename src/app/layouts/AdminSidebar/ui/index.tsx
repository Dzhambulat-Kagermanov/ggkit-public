import { MainSidebar } from '@/modules/MainSidebar'
import { cn } from '@/shared/utils/cn'
import { type FC, type HTMLAttributes } from 'react'
import { Outlet } from 'react-router-dom'

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const AdminSidebarLayout: FC<Props> = ({ className, ...props }) => {
	return (
		<div {...props} className={cn('', className)}>
			<MainSidebar />
			<Outlet />
		</div>
	)
}
