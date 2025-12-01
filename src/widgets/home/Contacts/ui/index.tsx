import { cn } from '@/shared/utils/cn'
import { type FC, type HTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import { Instagram } from '../svg/Instagram'
import { Vk } from '../svg/Vk'

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const Contacts: FC<Props> = ({ className, ...props }) => {
	return (
		<section
			{...props}
			className={cn('paddings-x-sections pt-25 pb-16', className)}
		>
			<h2 className='text-4xl font-medium mb-9'>Контактные данные</h2>
			<div className='flex justify-between items-start'>
				<nav className=''>
					<p className='text-lg w-[500px] mb-8'>
						Мы на связи и открыты к вопросам, предложениям и совместным
						проектам. Ниже указаны все популярные контакные данные
					</p>
					<Link className='text-2xl font-medium block' to='tel:+78005553535'>
						+7 (800) 555 35-35
					</Link>
					<Link
						className='text-2xl font-medium mb-9 mt-5 block'
						to='mailto:ggkit@gmail.com'
					>
						ggkit@gmail.com
					</Link>
					<div className='flex items-center gap-x-4'>
						<Link to='#'>
							<Instagram />
						</Link>
						<Link to='#'>
							<Vk />
						</Link>
					</div>
				</nav>
				<div className=''>
					<div className='w-[478px] h-[290px] bg-theme-primary-accent/80 rounded-md' />
					<h4 className='w-[365px] text-end text-lg mt-4 ml-auto'>
						Грозный, Чеченская Республика, проспект Мохаммеда Али, 8
					</h4>
				</div>
			</div>
		</section>
	)
}
