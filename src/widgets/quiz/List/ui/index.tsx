import { QuizCard } from '@/entities/quiz/QuizCard'
import { EnQuizStatusesEntity } from '@/shared/types/entities'
import { cn } from '@/shared/utils/cn'
import { type FC, type HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLUListElement> {}

export const List: FC<Props> = ({ className, ...props }) => {
	return (
		<ul
			{...props}
			className={cn(
				'grid grid-cols-3 gap-12 auto-rows-max paddings-x-sections',
				className
			)}
		>
			<QuizCard
				data={{
					createdAt: new Date().toString(),
					description: 'Test',
					name: 'Test',
					status: EnQuizStatusesEntity.ACTIVE,
					totalVotes: 20,
					uuid: 'fewqfqew',
					variants: [
						{
							currentVotes: 10,
							renderText: 'Banan',
							value: 'fewifiejwfgijew',
						},
						{
							currentVotes: 4,
							renderText: 'Apple',
							value: 'hyrthrhtr',
						},
						{
							currentVotes: 4,
							renderText: 'Mellon',
							value: 'fewqfew',
						},
					],
					votedValue: 'fewqfew',
					endAt: new Date().toString(),
				}}
			/>
			<QuizCard
				data={{
					createdAt: new Date().toString(),
					description: 'Test',
					name: 'Test',
					status: EnQuizStatusesEntity.ACTIVE,
					totalVotes: 20,
					uuid: 'fewqfqew',
					variants: [
						{
							currentVotes: 10,
							renderText: 'Banan',
							value: 'fewifiejwfgijew',
						},
						{
							currentVotes: 4,
							renderText: 'Apple',
							value: 'hyrthrhtr',
						},
						{
							currentVotes: 4,
							renderText: 'Mellon',
							value: 'fewqfew',
						},
					],
					endAt: new Date().toString(),
				}}
			/>
			<QuizCard
				data={{
					createdAt: new Date().toString(),
					description: 'Test',
					name: 'Test',
					status: EnQuizStatusesEntity.ACTIVE,
					totalVotes: 20,
					uuid: 'fewqfqew',
					variants: [
						{
							currentVotes: 10,
							renderText: 'Banan',
							value: 'fewifiejwfgijew',
						},
						{
							currentVotes: 4,
							renderText: 'Apple',
							value: 'hyrthrhtr',
						},
						{
							currentVotes: 4,
							renderText: 'Mellon',
							value: 'fewqfew',
						},
					],
				}}
			/>
			<QuizCard
				data={{
					createdAt: new Date().toString(),
					description: 'Test',
					name: 'Test',
					status: EnQuizStatusesEntity.FINISHED,
					totalVotes: 20,
					uuid: 'fewqfqew',
					variants: [
						{
							currentVotes: 10,
							renderText: 'Banan',
							value: 'fewifiejwfgijew',
						},
						{
							currentVotes: 4,
							renderText: 'Apple',
							value: 'hyrthrhtr',
						},
						{
							currentVotes: 4,
							renderText: 'Mellon',
							value: 'fewqfew',
						},
					],
					endAt: new Date().toString(),
				}}
			/>
		</ul>
	)
}
