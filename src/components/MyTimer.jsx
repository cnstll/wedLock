import { Button } from '@mui/material';
import React from 'react';
import { useTimer } from 'react-timer-hook';

export default function MyTimer({ time, walletAddress }) {
	const { days } = useTimer({
		time,
		onExpire: () => localStorage.removeItem(`timer_next_${walletAddress}`),
	});

	return (
		<div style={{ textAlign: 'center' }}>
			<div style={{ fontSize: '20px' }}>
				<span>{days} Days</span>
			</div>
			<Button
				onClick={() => {
					localStorage.removeItem(`timer_next_${walletAddress}`);
					window.location.reload();
				}}
			>
				Pass
			</Button>
		</div>
	);
}
