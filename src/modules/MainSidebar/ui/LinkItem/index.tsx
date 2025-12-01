import { UiActiveLink } from '@/shared/ui-kit/ActiveLink'
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
	isForceRedirect?: boolean
}

const mainCls = (
	isActive: boolean,
	size: 'small' | 'big',
	className?: string
) =>
	cn(
		'[&_svg]:h-auto flex items-center text-xl gap-3 px-5 py-4 hover:bg-secondary duration-150 w-full rounded-sm relative before:absolute before:w-[96%] before:left-1/2 before:-translate-x-1/2 before:bottom-0 before:h-[1px] before:bg-theme-border',
		{
			['[&_svg]:w-10']: size === 'big',
			['[&_svg]:w-6']: size === 'small',
			['bg-secondary cursor-default']: isActive,
		},
		className
	)
export const LinkItem: FC<Props> = ({
	className,
	to,
	children,
	isForceRedirect,
	icon: { size, node },
	...props
}) => {
	return (
		<UiActiveLink isQueryParamsCheck to={to}>
			{({ isActive }) =>
				!isForceRedirect ? (
					<Link
						{...props}
						to={to}
						className={mainCls(isActive, size, className)}
					>
						{node}
						{children}
					</Link>
				) : (
					<button
						{...props}
						type='button'
						className={mainCls(isActive, size, className)}
					>
						{node}
						{children}
					</button>
				)
			}
		</UiActiveLink>
	)
}
