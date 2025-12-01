import { cn } from '@/shared/utils/cn'
import { BreadCrumbs } from '@/widgets/events/BreadCrumbs'
import { Filters } from '@/widgets/events/Filters'
import { List } from '@/widgets/events/List'
import { type FC, type HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const EventsScreen: FC<Props> = ({ className, ...props }) => {
	return (
		<main {...props} className={cn('grow w-min', className)}>
			<Filters />
			<BreadCrumbs />
			<List />
		</main>
	)
}
