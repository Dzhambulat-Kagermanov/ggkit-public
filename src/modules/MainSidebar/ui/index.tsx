import { IMAGE_PATHS_CONFIG } from '@/shared/configs/image-paths'
import { ROUTES } from '@/shared/configs/routes'
import { EnEventsTypesEntity } from '@/shared/types/entities'
import { cn } from '@/shared/utils/cn'
import { CalendarDays, CircleUser, Star, ThumbsUp } from 'lucide-react'
import { type FC, type HTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import { LinkItem } from './LinkItem'
import { LoginModal } from './LoginModal'
import { ThemeSwitcher } from './ThemeSwticher'

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const MainSidebar: FC<Props> = ({ className, ...props }) => {
	return (
		<aside
			{...props}
			className={cn(
				'shadow-primary w-77 bg-theme-primary-bg px-7 py-8 h-screen scroll-hidden z-2',
				className
			)}
		>
			<Link to={ROUTES.HOME}>
				<img
					className='mx-auto w-25 aspect-square'
					src={IMAGE_PATHS_CONFIG.illustrations.ggkitLogo}
				/>
				<h2 className='font-medium text-center text-[2.5rem] mt-2'>ГГКИТ</h2>
			</Link>

			<nav className='mt-12'>
				<LoginModal>
					<LinkItem
						isForceRedirect
						children='Войти'
						icon={{
							node: <CircleUser color='currentColor' />,
							size: 'big',
						}}
						to={ROUTES.PROFILE_PERSONAL_INFO}
					/>
				</LoginModal>
				<div className='mt-13'>
					<LinkItem
						children='О нас'
						icon={{
							node: <CalendarDays color='currentColor' />,
							size: 'small',
						}}
						to={ROUTES.HOME}
					/>
					<LinkItem
						children='Конкурсы'
						icon={{
							node: <Star color='currentColor' />,
							size: 'small',
						}}
						to={ROUTES.EVENTS({ type: EnEventsTypesEntity.COMPETITIONS })}
					/>
					<LinkItem
						children='Чемпионаты'
						icon={{
							node: <Star color='currentColor' />,
							size: 'small',
						}}
						to={ROUTES.EVENTS({ type: EnEventsTypesEntity.CHAMPIONSHIPS })}
					/>
					<LinkItem
						children='Олимпиады'
						icon={{
							node: <Star color='currentColor' />,
							size: 'small',
						}}
						to={ROUTES.EVENTS({ type: EnEventsTypesEntity.OLYMPIADS })}
					/>
					<LinkItem
						children='Турниры'
						icon={{
							node: <Star color='currentColor' />,
							size: 'small',
						}}
						to={ROUTES.EVENTS({ type: EnEventsTypesEntity.TOURNAMENTS })}
					/>
					<LinkItem
						children='Опросы'
						icon={{
							node: <ThumbsUp color='currentColor' />,
							size: 'small',
						}}
						to={ROUTES.QUIZ()}
					/>
				</div>
			</nav>
			<ThemeSwitcher />
		</aside>
	)
}
