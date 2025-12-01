import { Progress } from '@/shared/ui-kit/progress'
import { RadioGroupItem } from '@/shared/ui-kit/radio-group'
import { cn } from '@/shared/utils/cn'
import { type FC, type HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
	value: string
	currentVotes: number
	totalVotes: number
}

export const VotedRadio: FC<Props> = ({
	className,
	value,
	children,
	currentVotes,
	totalVotes,
	...props
}) => {
	const percent = (currentVotes / totalVotes) * 100

	return (
		<div
			{...props}
			className={cn('flex gap-x-2 items-center relative min-h-10', className)}
		>
			<div className='absolute top-0 -translate-y-[calc(50%+0.125rem)] text-sm gap-x-1 flex font-medium -translate-x-1.5'>
				<p className='min-w-8 text-center'>{percent}%</p>
				<p className=''>{children}</p>
			</div>
			<RadioGroupItem id={`radio-${value}`} value={value} />
			<Progress className='grow w-min' value={percent} />
		</div>
	)
}
