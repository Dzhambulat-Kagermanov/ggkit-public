import { EventCard } from '@/entities/events/EventCard'
import {
	EnEventsStatusesEntity,
	EnEventsTypesEntity,
} from '@/shared/types/entities'
import { cn } from '@/shared/utils/cn'
import { type FC, type HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLUListElement> {}

export const List: FC<Props> = ({ className, ...props }) => {
	return (
		<ul
			{...props}
			className={cn(
				'grid grid-cols-3 gap-8 items-start auto-rows-max paddings-x-sections grow pb-10',
				className
			)}
		>
			<EventCard
				data={{
					description:
						'Lorem ipsum dolor sit das dasdsadsa amet, consectetur adipiscing elit. Pellentesque eget maximus dasds nulla. Cras volutpat massa at aliquet aliquam. Sed scelerisque rutrum ornare. das Sed leo sem, tristique ac tortor sit amet, commodo iaculis lectus. Pr',
					name: 'Какое блюдо добавить в меню в столовой?',
					status: EnEventsStatusesEntity.FINISHED,
					uuid: 'fewqfqew',
					startDatetime:
						'Mon Nov 01 2025 12:03:07 GMT+0300 (Москва, стандартное время)',
					finishDatetime:
						'Mon Nov 02 2025 12:03:07 GMT+0300 (Москва, стандартное время)',
					eventType: EnEventsTypesEntity.OLYMPIADS,
					imagePaths: [''],
				}}
			/>
			<EventCard
				data={{
					description:
						'Lorem ipsum dolor sit das dasdsadsa amet, consectetur adipiscing elit. Pellentesque eget maximus dasds nulla. Cras volutpat massa at aliquet aliquam. Sed scelerisque rutrum ornare. das Sed leo sem, tristique ac tortor sit amet, commodo iaculis lectus. Pr',
					name: 'Какое блюдо добавить в меню в столовой?',
					status: EnEventsStatusesEntity.RECRUITING,
					uuid: 'fewqfqew',
					startDatetime:
						'Mon Dec 02 2025 12:03:07 GMT+0300 (Москва, стандартное время)',
					finishDatetime:
						'Mon Dec 03 2025 12:03:07 GMT+0300 (Москва, стандартное время)',
					eventType: EnEventsTypesEntity.OLYMPIADS,
					imagePaths: [''],
				}}
			/>
			<EventCard
				data={{
					description:
						'Lorem ipsum dolor sit das dasdsadsa amet, consectetur adipiscing elit. Pellentesque eget maximus dasds nulla. Cras volutpat massa at aliquet aliquam. Sed scelerisque rutrum ornare. das Sed leo sem, tristique ac tortor sit amet, commodo iaculis lectus. Pr',
					name: 'Какое блюдо добавить в меню в столовой?',
					status: EnEventsStatusesEntity.STARTED,
					uuid: 'fewqfqew',
					startDatetime:
						'Mon Dec 01 2025 12:03:07 GMT+0300 (Москва, стандартное время)',
					finishDatetime:
						'Mon Dec 02 2025 12:03:07 GMT+0300 (Москва, стандартное время)',
					eventType: EnEventsTypesEntity.OLYMPIADS,
					imagePaths: [''],
				}}
			/>
		</ul>
	)
}
