import {
	themesSetThemeSetter,
	themesThemeSelector,
	useThemeStore,
} from '@/shared/stores/themes'
import { EnThemesEntity } from '@/shared/types/entities/shared/Themes'
import { cn } from '@/shared/utils/cn'
import { Moon, Sun } from 'lucide-react'
import { type FC, type HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {}

const activeCls = ''
const btnCls = 'relative size-12 flex items-center justify-center'

export const ThemeSwitcher: FC<Props> = ({ className, ...props }) => {
	const theme = useThemeStore(themesThemeSelector)
	const setTheme = useThemeStore(themesSetThemeSetter)

	return (
		<div
			{...props}
			className='flex gap-x-3 border-2 border-theme-border w-max rounded-full mt-13 relative'
		>
			<div
				className={cn(
					'rounded-full border-2 border-theme-border absolute top-1/2 -translate-y-1/2 size-[3.25rem] bg-theme-secondary duration-200',
					{
						['left-0 -translate-x-[0.125rem]']: theme === EnThemesEntity.DARK,
						['left-full -translate-x-[calc(100%-0.125rem)]']:
							theme === EnThemesEntity.LIGHT,
					}
				)}
			/>
			<button
				type='button'
				onClick={() => {
					if (theme === EnThemesEntity.DARK) {
						setTheme(EnThemesEntity.LIGHT)
					} else setTheme(EnThemesEntity.DARK)
				}}
				className={cn(btnCls, {
					[activeCls]: theme === EnThemesEntity.DARK,
				})}
			>
				<Moon className='size-7 text-theme-primary-text' />
			</button>
			<button
				type='button'
				onClick={() => {
					if (theme === EnThemesEntity.LIGHT) {
						setTheme(EnThemesEntity.DARK)
					} else setTheme(EnThemesEntity.LIGHT)
				}}
				className={cn(btnCls, {
					[activeCls]: theme === EnThemesEntity.LIGHT,
				})}
			>
				<Sun className='size-7 text-theme-primary-text' />
			</button>
		</div>
	)
}
