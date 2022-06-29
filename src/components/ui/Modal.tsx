import { ReactNode } from 'react';

export interface ModalProps {
	children: ReactNode;
	active: boolean;
	onClose: () => void;
	title: string;
}

export default function Modal({
	children,
	active,
	onClose,
	title,
}: ModalProps) {
	return (
		<div
			className={`absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-full bg-white p-4 transition-all ${
				active ? 'opacity-100' : 'top-10 opacity-0 pointer-events-none'
			}`}
		>
			<div className='flex justify-between items-center'>
				<h2 className='text-md font-medium'>{title}</h2>
				<button onClick={onClose}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='w-7 h-5'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						strokeWidth={1.5}
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M6 18L18 6M6 6l12 12'
						/>
					</svg>
				</button>
			</div>
			<div className='border-t-[1px] border-slate-200 mt-2 pt-8 grid gap-4'>
				{children}
			</div>
		</div>
	);
}
