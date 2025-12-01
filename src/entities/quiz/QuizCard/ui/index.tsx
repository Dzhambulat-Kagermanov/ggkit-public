import { EnQuizStatusesEntity } from '@/shared/types/entities'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/shared/ui-kit/accordion'
import { Badge } from '@/shared/ui-kit/badge'
import { cn } from '@/shared/utils/cn'
import { plural } from '@/shared/utils/plural'
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
		<Accordion asChild type='multiple'>
			<AccordionItem value='main'>
				<AccordionTrigger>
					<li {...props} className={cn('w-full', className)}>
						<div className='flex justify-end gap-x-2 w-full'>
							{endAt !== undefined ? (
								<Badge variant='default'>7 дней 24:33:59</Badge>
							) : null}
							<Badge variant='info'>
								{totalVotes}{' '}
								{plural(totalVotes, ['голос', 'голоса', 'голосов'])}
							</Badge>
							<Badge
								variant={
									status === EnQuizStatusesEntity.ACTIVE ? 'active' : 'passive'
								}
							>
								{status === EnQuizStatusesEntity.ACTIVE
									? 'Активный'
									: 'Завершенный'}
							</Badge>
						</div>
					</li>
				</AccordionTrigger>
				<AccordionContent>1</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}
