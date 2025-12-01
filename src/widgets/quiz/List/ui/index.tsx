import { QuizCard } from '@/entities/quiz/QuizCard'
import { EnQuizStatusesEntity } from '@/shared/types/entities'
import { cn } from '@/shared/utils/cn'
import { type FC, type HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const List: FC<Props> = ({ className, ...props }) => {
	return (
		<div
			{...props}
			className={cn(
				'grid grid-cols-2 gap-12 items-start auto-rows-max paddings-x-sections grow pb-10',
				className
			)}
		>
			<QuizCard
				data={{
					createdAt:
						'Mon Dec 01 2025 12:03:07 GMT+0300 (Москва, стандартное время)',
					description:
						'Lorem ipsum dolor sit das dasdsadsa amet, consectetur adipiscing elit. Pellentesque eget maximus dasds nulla. Cras volutpat massa at aliquet aliquam. Sed scelerisque rutrum ornare. das Sed leo sem, tristique ac tortor sit amet, commodo iaculis lectus. Pr',
					name: 'Какое блюдо добавить в меню в столовой?',
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
					endAt:
						'Mon Dec 02 2025 12:03:07 GMT+0300 (Москва, стандартное время)',
				}}
			/>
			<QuizCard
				data={{
					createdAt:
						'Mon Dec 01 2025 12:03:07 GMT+0300 (Москва, стандартное время)',
					description:
						'Lorem ipsum dolor sit das dasdsadsa amet, consectetur adipiscing elit. Pellentesque eget maximus dasds nulla. Cras volutpat massa at aliquet aliquam. Sed scelerisque rutrum ornare. das Sed leo sem, tristique ac tortor sit amet, commodo iaculis lectus. Pr',
					name: 'Какую блюдо добавить в меню в столовой?',
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
					endAt:
						'Mon Dec 02 2025 12:03:07 GMT+0300 (Москва, стандартное время)',
				}}
			/>
			<QuizCard
				data={{
					createdAt:
						'Mon Dec 01 2025 12:03:07 GMT+0300 (Москва, стандартное время)',
					description:
						'Lorem ipsum dolor sit das dasdsadsa amet, consectetur adipiscing elit. Pellentesque eget maximus dasds nulla. Cras volutpat massa at aliquet aliquam. Sed scelerisque rutrum ornare. das Sed leo sem, tristique ac tortor sit amet, commodo iaculis lectus. Pr',
					name: 'Какую блюдо добавить в меню в столовой?',
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
					createdAt:
						'Mon Dec 01 2025 12:03:07 GMT+0300 (Москва, стандартное время)',
					description:
						'Lorem ipsum dolor sit das dasdsadsa amet, consectetur adipiscing elit. Pellentesque eget maximus dasds nulla. Cras volutpat massa at aliquet aliquam. Sed scelerisque rutrum ornare. das Sed leo sem, tristique ac tortor sit amet, commodo iaculis lectus. Pr',
					name: 'Какую блюдо добавить в меню в столовой?',
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
					endAt:
						'Mon Dec 02 2025 12:03:07 GMT+0300 (Москва, стандартное время)',
				}}
			/>
		</div>
	)
}
