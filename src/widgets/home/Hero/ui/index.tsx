import { IMAGE_PATHS_CONFIG } from '@/shared/configs/image-paths'
import { cn } from '@/shared/utils/cn'
import { type FC, type HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const Hero: FC<Props> = ({ className, ...props }) => {
	return (
		<section
			{...props}
			className={cn(
				'px-15 w-full h-[545px] flex flex-col justify-center overflow-hidden relative z-0',
				className
			)}
		>
			<h1 className='text-[46px]'>ГГКИТ</h1>
			<p className='mt-[25px] w-[850px] leading-[140%]'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
				eget maximus nulla. Cras volutpat massa at aliquet aliquam. Sed
				scelerisque rutrum ornare. Sed leo sem, tristique ac tortor sit amet,
				commodo iaculis lectus. Praesent placerat, eros convallis venenatis
				pretium, sem turpis pretium ex, ac scelerisque lacus nisi ut ipsum.
				Mauris sagittis nisl eget maximus semper. Fusce lobortis diam quam, eu
				venenatis nulla sollicitudin vitae. Donec tempor libero sit amet mauris
				suscipit accumsan. Etiam nec nunc vitae nibh congue congue. Curabitur
				libero tortor, dignissim ac turpis id, ultrices scelerisque nisi. Morbi
				viverra et dui id sollicitudin. Donec eget nunc nec est porta tincidunt
				et ut quam.
			</p>
			<img
				src={IMAGE_PATHS_CONFIG.illustrations.HOME.heroBg}
				className='w-[2052px] h-auto absolute left-1/2 top-[-27px] -translate-x-1/2 z-[-2] opacity-25'
			/>
			<div className='absolute inset-0 z-[-1] backdrop-blur-[5px]' />
		</section>
	)
}
