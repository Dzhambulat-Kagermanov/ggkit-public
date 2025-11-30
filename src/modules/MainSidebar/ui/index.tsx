import { cn } from '@/shared/lib/cn'
import { type FC, type HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const MainSidebar: FC<Props> = ({ className, ...props }) => {
	return <aside {...props} className={cn('', className)}></aside>
}
