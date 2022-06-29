import { useState } from 'react';
import Timer from './components/Timer';
import Button from './components/ui/Button';
import Input, { InputTypes } from './components/ui/Input';
import Modal from './components/ui/Modal';

export default function App() {
	const [modal, setModal] = useState<boolean>(false);
	const [event, setEvent] = useState<string>('открытия макдака');
	const [date, setDate] = useState<string>('2022-06-29T21:19');

	return (
		<div className='container max-w-xl'>
			<Modal
				title='Редактировать таймер'
				active={modal}
				onClose={() => setModal(false)}
			>
				<div className='flex gap-2 items-center'>
					<span>До</span>
					<Input
						onChange={(e) => setEvent(e.target.value)}
						value={event}
						placeholder='Название события'
						classes='grow'
					/>
					<span>осталось</span>
				</div>
				<Input
					onChange={(e) => setDate(e.target.value)}
					value={date}
					field
					type={InputTypes.DATE}
					placeholder='Дата события'
				/>
			</Modal>
			<div className='flex flex-col min-h-screen pt-8 pb-4'>
				<Timer onFinish={() => setModal(true)} event={event} date={date} />
				<Button classes='mt-auto self-center' onClick={() => setModal(true)}>
					Изменить
				</Button>
			</div>
		</div>
	);
}
