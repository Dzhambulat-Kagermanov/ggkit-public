import {
	EnEventsSortTypesEntity,
	EnEventsStatusesEntity,
} from '@/shared/types/entities'
import { Input } from '@/shared/ui-kit/input'
import { Label } from '@/shared/ui-kit/label'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/shared/ui-kit/select'
import { cn } from '@/shared/utils/cn'
import { type FC, type HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const Filters: FC<Props> = ({ className, ...props }) => {
	return (
		<section
			{...props}
			className={cn(
				'paddings-x-sections py-7 bg-theme-primary-bg flex gap-x-9',
				className
			)}
		>
			<div className='flex-1'>
				<Label htmlFor='search' className='text-base font-montserrat'>
					Поиск по названию
				</Label>
				<Input id='search' className='mt-2' />
			</div>
			<div className='flex-1'>
				<Label htmlFor='status' className='text-base font-montserrat'>
					Статус
				</Label>
				<Select>
					<SelectTrigger className='w-full mt-2'>
						<SelectValue placeholder='Не выбрано' />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value={EnEventsStatusesEntity.RECRUITING}>
							Идет набор
						</SelectItem>
						<SelectItem value={EnEventsStatusesEntity.STARTED}>
							Начавшиеся
						</SelectItem>
						<SelectItem value={EnEventsStatusesEntity.FINISHED}>
							Завершенные
						</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<div className='flex-1 overflow-hidden'>
				<Label htmlFor='sort' className='text-base font-montserrat'>
					Сортировка
				</Label>
				<Select>
					<SelectTrigger className='w-full mt-2'>
						<SelectValue placeholder='Не выбрано' />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value={EnEventsSortTypesEntity.DATE_PUBLISH_ASC}>
							По возрастанию по дате публикации
						</SelectItem>
						<SelectItem value={EnEventsSortTypesEntity.DATE_PUBLISH_DESC}>
							По убыванию по дате публикации
						</SelectItem>
					</SelectContent>
				</Select>
			</div>
		</section>
	)
}
