import React from 'react';
import { Typography, Button } from '@mui/material';
import mintNFT from '../StartonAPI/mintNft';
import MyTimer from '../components/MyTimer';

export default function MetamaskButton({
	account,
	status,
	connect,
	setTransaction,
	setError,
	index,
}) {
	const nft = localStorage.getItem(`number_nft_${index}`);
	//	let time = localStorage.getItem(`timer_next_${account}_${index}`);
	//	let testTime = '';
	//	if (time !== null) testTime = new Date(time);
	console.log(index, nft);
	return (
		<>
			{status === 'notConnected' && (
				<Button variant="contained" onClick={connect}>
					Connect your wallet
				</Button>
			)}
			{status === 'connected' && (
				<Button
					onClick={() => mintNFT(account, setTransaction, setError, index)}
					disabled={(nft === null && index !== 1) || (nft !== null && index === 1)}
				>
					{(nft === null && index !== 1) || (nft !== null && index === 1)
						? 'Locked'
						: 'Mint your love'}
				</Button>
			)}
		</>
	);
}
{
	/*{

}
{
	transaction && (
		<Link href={`https://mumbai.polygonscan.com/tx/${transaction}`} target="_blank">
			See transaction
		</Link>
	);
}*/
}
