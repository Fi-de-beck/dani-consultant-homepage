import { useState } from 'react';
import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai';
import logo from '../../img/logo/logo.png';

export default function Header() {
	const [open, setOpen] = useState(false);

	return (
		<div className='bg-gray-100'>
			<div className='w-11/12 flex items-center px-5 h-16 justify-between max-w-7xl m-auto'>
				<div
					className={`${
						open ? 'bg-gray-200 h-max ' : 'h-0 opacity-0'
					} fixed top-14 md:hidden flex flex-col text-lg w-auto rounded-lg left-5 transition-all duration-500 z-50 select-none cursor-pointer`}
				>
					<p
						className='py-2 px-4 pt-2 hover:bg-gray-50 rounded-t-lg'
						onClick={() => setOpen(!open)}
					>
						Cursos
					</p>
					<a
						className='py-2 px-4 border-t border-gray-300 pt-2 hover:bg-gray-50'
						href='#pacotes'
						onClick={() => setOpen(!open)}
					>
						Pacotes
					</a>
					<a
						className='py-2 px-4 border-t pt-2 border-gray-300 hover:bg-gray-50'
						href='#sobre-mim'
						onClick={() => setOpen(!open)}
					>
						Sobre mim
					</a>
				</div>
				{!open ? (
					<AiOutlineMenu
						onClick={() => setOpen(!open)}
						size={20}
						className='md:hidden'
					/>
				) : (
					<AiOutlineCloseCircle
						onClick={() => setOpen(!open)}
						size={20}
						className='md:hidden'
					/>
				)}
				<img src={logo} alt='logo' className='h-10' />
				<div className='hidden md:flex gap-14 h-12 items-center font-semibold'>
					<p className='cursor-pointer'>Cursos</p>
					<a className='cursor-pointer' href='#pacotes'>
						Pacotes
					</a>
					<a className='cursor-pointer' href='#sobre-mim'>
						Sobre mim
					</a>
				</div>
				<div className='flex gap-2'>
					<a
						className='rounded-lg bg-yellowgreen py-2 px-3 font-semibold text-sm hover:bg-yellowgreendark shadow-sm'
						href='https://wa.me/5541998182058'
						target='blank'
					>
						Fale comigo aqui!
					</a>
				</div>
			</div>
		</div>
	);
}
