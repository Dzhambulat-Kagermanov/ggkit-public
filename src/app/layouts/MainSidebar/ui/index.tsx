import { cn } from '@/shared/lib/cn'
import { type FC, type HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const MainSidebar: FC<Props> = ({ className, ...props }) => {
	return (
		<div className={cn('', className)}>
			<MainSidebar />
			<Outlet />
		</div>
	)
}
