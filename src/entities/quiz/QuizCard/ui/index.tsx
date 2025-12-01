import { EnQuizStatusesEntity } from '@/shared/types/entities'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/shared/ui-kit/accordion'
import { Badge } from '@/shared/ui-kit/badge'
import { Button } from '@/shared/ui-kit/button'
import { cn } from '@/shared/utils/cn'
import { plural } from '@/shared/utils/plural'
import { type FC, type HTMLAttributes } from 'react'
import type { TData } from '../model/Data'

interface Props extends HTMLAttributes<HTMLDivElement> {
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
			<AccordionItem
				{...props}
				value='main'
				className={cn(
					'bg-theme-primary-bg w-full rounded-[0.35rem] border-b-0',
					className
				)}
			>
				<div className='px-10 pb-12 pt-5'>
					<div className='flex justify-end gap-x-2 w-full'>
						{endAt !== undefined ? (
							<Badge variant='default'>7 дней 24:33:59</Badge>
						) : null}
						<Badge variant='info'>
							{totalVotes} {plural(totalVotes, ['голос', 'голоса', 'голосов'])}
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
					<h2 className='text-2xl mt-7'>{name}</h2>
					<h3 className='text-lg mt-5'>{description}</h3>
					<AccordionTrigger className='flex-0 mt-10 w-min p-0'>
						<Button variant='default'>Проголосовать</Button>
					</AccordionTrigger>
				</div>
				<AccordionContent className='px-10 py-6 border-t-primary-border border-t-2'>
					1
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}
