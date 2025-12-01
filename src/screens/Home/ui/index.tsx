import { cn } from '@/shared/utils/cn'
import { Contacts } from '@/widgets/home/Contacts'
import { Hero } from '@/widgets/home/Hero'
import { type FC, type HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const HomeScreen: FC<Props> = ({ className, ...props }) => {
	return (
		<main {...props} className={cn('grow w-min scroll-primary', className)}>
			<Hero />
			<Contacts />
		</main>
	)
}
