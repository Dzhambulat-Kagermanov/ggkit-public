import { cn } from '@/shared/utils/cn'
import { type FC, type HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const EventsScreen: FC<Props> = ({ className, ...props }) => {
	return <main {...props} className={cn('', className)}></main>
}
