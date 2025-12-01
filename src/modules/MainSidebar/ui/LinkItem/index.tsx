import { cn } from '@/shared/utils/cn'
import { type FC, type ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface Props {
	className?: string
	to: string
	icon: {
		size: 'small' | 'big'
		node: ReactNode
	}
	children: ReactNode
}

export const LinkItem: FC<Props> = ({
	className,
	to,
	children,
	icon: { size, node },
	...props
}) => {
	return (
		<Link
			{...props}
			to={to}
			className={cn(
				'[&_svg]:h-auto flex items-center text-xl gap-3 px-5 py-4 border-b border-b-theme-border hover:bg-secondary duration-150',
				{
					['[&_svg]:w-10']: size === 'big',
					['[&_svg]:w-6']: size === 'small',
				},
				className
			)}
		>
			{node}
			{children}
		</Link>
	)
}
