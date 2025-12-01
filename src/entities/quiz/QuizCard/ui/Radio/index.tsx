import { Label } from '@/shared/ui-kit/label'
import { RadioGroupItem } from '@/shared/ui-kit/radio-group'
import { cn } from '@/shared/utils/cn'
import { type FC, type HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
	value: string
}

export const Radio: FC<Props> = ({ className, value, children, ...props }) => {
	return (
		<div
			{...props}
			className={cn('flex gap-x-2 items-center min-h-6', className)}
		>
			<RadioGroupItem id={`radio-${value}`} value={value} />
			<Label className='text-lg' htmlFor={`radio-${value}`}>
				{children}
			</Label>
		</div>
	)
}
