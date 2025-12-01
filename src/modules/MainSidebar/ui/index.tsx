import { IMAGE_PATHS_CONFIG } from '@/shared/configs/image-paths'
import { ROUTES } from '@/shared/configs/routes'
import { cn } from '@/shared/utils/cn'
import { type FC, type HTMLAttributes } from 'react'
import { Link } from 'react-router-dom'

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const MainSidebar: FC<Props> = ({ className, ...props }) => {
	return (
		<aside {...props} className={cn('', className)}>
			<Link to={ROUTES.HOME}>
				<img src={IMAGE_PATHS_CONFIG.illustrations.ggkitLogo} />
				<h2 className='font-medium'>ГГКИТ</h2>
			</Link>

			<nav className=''></nav>
		</aside>
	)
}
