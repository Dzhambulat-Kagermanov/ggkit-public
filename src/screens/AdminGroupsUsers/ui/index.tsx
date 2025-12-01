import { cn } from '@/shared/utils/cn'
import { type FC, type HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const AdminGroupsUsersScreen: FC<Props> = ({ className, ...props }) => {
	return <main {...props} className={cn('', className)}></main>
}
