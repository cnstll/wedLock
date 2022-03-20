import axios from 'axios';

const API_KEY = 'oaBzd45CP3ek31SJDtXyp7oiP58iPUWw';

export const startonAxios = axios.create({
	baseURL: 'https://api.starton.io/v2',
	headers: {
		'x-api-key': API_KEY,
	},
});

export const SMART_CONTRACT_NETWORK = 'polygon-mumbai';
export const SMART_CONTRACT_ADDRESS = '0x2398Aa2b0503e72f9B4Cfa757E7204534f5efd9A';
export const WALLET_IMPORTED_ON_STARTON = '0x05c3eC5430d50533F2f0AEACf2eC16C50958b9de';
