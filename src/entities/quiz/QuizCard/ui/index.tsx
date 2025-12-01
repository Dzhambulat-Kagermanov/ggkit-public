import { EnQuizStatusesEntity } from '@/shared/types/entities'
import { Badge } from '@/shared/ui-kit/badge'
import { cn } from '@/shared/utils/cn'
import { type FC, type HTMLAttributes } from 'react'
import type { TData } from '../model/Data'

interface Props extends HTMLAttributes<HTMLLIElement> {
	data: TData
}

export const QuizCard: FC<Props> = ({
	className,
	data: {
		votedValue,
		endAt,
		variants,
		uuid,
		totalVotes,
		status,
		name,
		description,
		createdAt,
	},
	...props
}) => {
	return (
		<li {...props} className={cn('', className)}>
			<div className=''>
				<Badge variant='secondary'>7 дней 24:33:59</Badge>
				<Badge variant='secondary'>98 голосов</Badge>
				<Badge variant='secondary'>
					{status === EnQuizStatusesEntity.ACTIVE ? 'Активный' : 'Завершенный'}
				</Badge>
			</div>
		</li>
	)
}
