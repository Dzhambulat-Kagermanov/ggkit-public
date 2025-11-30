import { ROUTES } from '@/shared/configs/routes'
import { cn } from '@/shared/lib/cn'
import { type FC } from 'react'

interface Props {
	className?: string
	to: string
	icon: {
		size: 'small' | 'big'
		node: ReactNode
	}
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
			to={ROUTES.HOME}
			className={cn(
				'[&_svg]:h-auto flex gap-2 px-5 py-4 border-b border-b',
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
