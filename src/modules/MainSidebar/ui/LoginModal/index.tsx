import { Button } from '@/shared/ui-kit/button'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogTrigger,
} from '@/shared/ui-kit/dialog'
import { Input } from '@/shared/ui-kit/input'
import { Label } from '@/shared/ui-kit/label'
import { X } from 'lucide-react'
import { type FC, type HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const LoginModal: FC<Props> = ({ className, children, ...props }) => {
	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent
				{...props}
				showCloseButton={false}
				className='block rounded-[28px] bg-theme-primary-bg'
			>
				<div className='p-10 relative'>
					<DialogClose className='absolute right-3 top-3'>
						<X className='size-8' />
					</DialogClose>
					<h2 className='text-2xl font-bold text-center'>Логин</h2>
					<p className='text-lg font-medium text-center text-theme-third-text mt-2.5 mb-7'>
						Введите свои данные для входа
					</p>
					<form
						className=''
						onSubmit={e => {
							e.preventDefault()
						}}
					>
						<div className='flex flex-col gap-y-4'>
							<div className='flex-1'>
								<Label htmlFor='login' className='text-base font-montserrat'>
									Логин
								</Label>
								<Input id='login' className='mt-2' />
							</div>
							<div className='flex-1'>
								<Label htmlFor='password' className='text-base font-montserrat'>
									Пароль
								</Label>
								<Input type='password' id='password' className='mt-2' />
							</div>
						</div>
						<Button size='lg' variant='default' className='w-full mt-6'>
							Войти
						</Button>
					</form>
				</div>
			</DialogContent>
		</Dialog>
	)
}
