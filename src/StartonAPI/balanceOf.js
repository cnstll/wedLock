import { startonAxios, SMART_CONTRACT_NETWORK, SMART_CONTRACT_ADDRESS } from './startonAxios';

async function balanceOf(walletAddress) {
	try {
		const response = await startonAxios.post(
			`/smart-contract/${SMART_CONTRACT_NETWORK}/${SMART_CONTRACT_ADDRESS}/read`,
			{
				functionName: 'balanceOf',
				params: [walletAddress],
			}
		);
		const lastNFT = localStorage.getItem(`number_nft_${walletAddress}`);
		console.log(response.data.response.raw, lastNFT);
		if (lastNFT && response.data.response.raw + 1 === lastNFT) return -1;

		return response.data.response.raw;
	} catch (error) {
		console.error(error);
	}
}

export default balanceOf;
