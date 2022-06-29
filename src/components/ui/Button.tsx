import { ReactNode } from 'react';

export interface ButtonProps {
	children: ReactNode;
	onClick?: () => void;
	classes?: string;
}

export default function Button({ children, onClick, classes }: ButtonProps) {
	return (
		<button
			onClick={onClick}
			className={`bg-rose-500 text-white text-sm rounded-md px-4 py-2 ${
				classes || ''
			}`}
		>
			{children}
		</button>
	);
}
