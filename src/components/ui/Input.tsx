import { ChangeEvent } from 'react';

export enum InputTypes {
	TEXT = 'text',
	NUMBER = 'number',
	DATE = 'datetime-local',
}

export interface InputProps {
	placeholder: string;
	type?: InputTypes;
	value?: string;
	classes?: string;
	field?: boolean;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
	placeholder,
	type,
	value,
	classes,
	field,
	onChange,
}: InputProps) {
	return (
		<label className={`block ${classes || ''}`}>
			{field && <p className='font-medium mb-2'>{placeholder}</p>}
			<input
				className='w-full px-4 py-2 rounded-md bg-slate-100 placeholder:text-slate-400'
				type={type || InputTypes.TEXT}
				onChange={onChange}
				value={value}
				placeholder={(!field && placeholder) || ''}
			/>
		</label>
	);
}
