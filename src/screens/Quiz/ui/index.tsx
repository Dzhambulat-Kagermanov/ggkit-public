import { cn } from '@/shared/utils/cn'
import { BreadCrumbs } from '@/widgets/quiz/BreadCrumbs'
import { Filters } from '@/widgets/quiz/Filters'
import { type FC, type HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const QuizScreen: FC<Props> = ({ className, ...props }) => {
	return (
		<main {...props} className={cn('grow w-min', className)}>
			<Filters />
			<BreadCrumbs />
		</main>
	)
}
