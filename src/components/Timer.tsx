import { useEffect, useState } from 'react';

export interface TimerInfoInterface {
	onFinish: () => void;
	event: string;
	date: string;
}

export default function Timer({ onFinish, event, date }: TimerInfoInterface) {
	const [days, setDays] = useState<number>(0);
	const [hours, setHours] = useState<number>(0);
	const [minutes, setMinutes] = useState<number>(0);
	const [seconds, setSeconds] = useState<number>(0);
	const [finished, setFinished] = useState<boolean>(false);

	console.log('rerender');

	const tick = () => {
		const elapsed = Date.parse(date) - Date.now();
		const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
		const hours = Math.floor(
			(elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		);
		const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);
		setDays(days);
		setHours(hours);
		setMinutes(minutes);
		setSeconds(seconds);

		if (elapsed <= 0) {
			setFinished(true);
			setDays(0);
			setHours(0);
			setMinutes(0);
			setSeconds(0);
			onFinish();
		}
	};

	useEffect(() => {
		const timer = setInterval(tick, 1000);
		if (finished && Date.parse(date) <= Date.now()) {
			clearInterval(timer);
		} else {
			setFinished(false);
		}

		return () => clearInterval(timer);
	}, [date]);

	return (
		<>
			<h1 className='text-2xl font-semibold mb-8'>До {event} осталось:</h1>
			<div className='divide-y divide-slate-200'>
				<div className='py-3'>{days} дней</div>
				<div className='py-3'>{hours} часов</div>
				<div className='py-3'>{minutes} минуты</div>
				<div className='py-3'>{seconds} секунд</div>
			</div>
		</>
	);
}
