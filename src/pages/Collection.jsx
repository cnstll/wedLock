import React from 'react';
import NavBar from '../components/NavBar';
import MetamaskButton from '../components/MetamaskButton';
import gold from '../assets/gold.gif';
import cuir from '../assets/cuire.gif';
import ruby from '../assets/ruby.gif';

const NFTwithButton = ({ image, ...props }) => {
	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<img src={image} style={{ width: 200, marginBottom: 15, borderRadius: 20 }} />
			<MetamaskButton {...props} />
		</div>
	);
};

export default function Collection({ account, status, connect, setTransaction, setError }) {
	return (
		<>
			<NavBar />
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-around',
					marginTop: 50,
				}}
			>
				<NFTwithButton
					image={gold}
					account={account}
					status={status}
					connect={connect}
					setTransaction={setTransaction}
					setError={setError}
					index={1}
				/>
				<NFTwithButton
					image={cuir}
					account={account}
					status={status}
					connect={connect}
					setTransaction={setTransaction}
					setError={setError}
					index={2}
				/>
				<NFTwithButton
					image={ruby}
					account={account}
					status={status}
					connect={connect}
					setTransaction={setTransaction}
					setError={setError}
					index={3}
				/>
			</div>
		</>
	);
}
