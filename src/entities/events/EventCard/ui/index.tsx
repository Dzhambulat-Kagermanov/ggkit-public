import { EnEventsStatusesEntity } from '@/shared/types/entities'
import { Badge } from '@/shared/ui-kit/badge'
import { Button } from '@/shared/ui-kit/button'
import { cn } from '@/shared/utils/cn'
import { type FC, type HTMLAttributes } from 'react'
import type { TData } from '../model/Data'
import { formatTime } from '../utils/formatTime'

interface Props extends HTMLAttributes<HTMLLIElement> {
	data: TData
}

export const EventCard: FC<Props> = ({
	className,
	data: {
		description,
		eventType,
		finishDatetime,
		imagePaths,
		name,
		startDatetime,
		status,
		uuid,
	},
	...props
}) => {
	return (
		<li
			{...props}
			className={cn(
				'rounded-[10px] overflow-hidden bg-theme-primary-bg border border-theme-border',
				className
			)}
		>
			<div className='relative'>
				<div className='flex justify-end gap-x-2 w-full absolute right-4 top-4'>
					<Badge
						variant={
							status === EnEventsStatusesEntity.STARTED
								? 'active'
								: status === EnEventsStatusesEntity.FINISHED
								? 'passive'
								: 'intermediate'
						}
					>
						{status === EnEventsStatusesEntity.STARTED
							? 'Активный'
							: status === EnEventsStatusesEntity.FINISHED
							? 'Завершенный'
							: 'Идет набор'}
					</Badge>
				</div>
				<img
					src={imagePaths[0]}
					className='w-full bg-theme-primary-accent/60 h-[250px]'
				/>
			</div>
			<div className='p-5'>
				<time className='text-sm'>
					Время проведения: {formatTime(startDatetime)} -{' '}
					{formatTime(finishDatetime)}
				</time>
				<h2 className='text-lg font-medium mt-3 mb-5'>{name}</h2>
				<p className='text-sm line-clamp-3'>{description}</p>
				<Button size='lg' variant='default' className='mt-10 w-full'>
					Подробнее
				</Button>
			</div>
		</li>
	)
}
