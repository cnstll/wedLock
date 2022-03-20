import {
	startonAxios,
	SMART_CONTRACT_NETWORK,
	SMART_CONTRACT_ADDRESS,
	WALLET_IMPORTED_ON_STARTON,
} from './startonAxios';
import balanceOf from './balanceOf';

const nfts = [
	'QmauPgmGAScJKcbsE1CE9ejfDHWkRQRPRhiBF6CS6gsodd',
	'Qmcpwe7eeW5fYo69vLbrmDszYgRxfhe7tfaYrC8ijh9DDv',
	'QmeVhTXviRmCwdp4tFxPeXHAoRnuKqNvjEbWDaE65hurrw',
];

async function mintNft(walletAddress, setTransaction, setError, index) {
	const balance = await balanceOf(walletAddress);
	console.log('balanceof', balance);
	if (balance === -1) {
		setError(true);
		return;
	}

	try {
		const nft = await startonAxios.post(
			`/smart-contract/${SMART_CONTRACT_NETWORK}/${SMART_CONTRACT_ADDRESS}/call`,
			{
				functionName: 'safeMint',
				signerWallet: WALLET_IMPORTED_ON_STARTON,
				speed: 'low',
				params: [walletAddress, nfts[index - 1]],
			}
		);

		setTransaction(nft.data.transactionHash);

		if (index === 1) {
			const time = new Date();
			time.setFullYear(time.getFullYear() + 1);
			localStorage.setItem(`timer_next_${walletAddress}_2`, time);

			time.setFullYear(time.getFullYear() + 1);
			localStorage.setItem(`timer_next_${walletAddress}_3`, time);
		}
		if (index === 2) {
			const time = new Date();
			localStorage.removeItem(`timer_next_${walletAddress}_2`);

			time.setFullYear(time.getFullYear() + 1);
			localStorage.setItem(`timer_next_${walletAddress}_3`, time);
		}
		localStorage.setItem(`number_nft_1`, 43);
		if (index === 1) {
			localStorage.setItem(`number_nft_2`, 2);
		}
		if (index === 2) {
			localStorage.setItem(`number_nft_3`, 3);
		}
		window.location.reload();
	} catch (error) {
		console.error(error);
	}
}

export default mintNft;
