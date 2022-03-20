import React, { useState } from 'react';
import { useMetaMask } from 'metamask-react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Mint from './pages/Mint';
import Collection from './pages/Collection';

const App = () => {
	const { status, connect, account } = useMetaMask();
	const [transaction, setTransaction] = useState(null);
	const [error, setError] = useState(false);

	let timeLeft = localStorage.getItem(`timer_next_${account}`);
	if (timeLeft) timeLeft = new Date(timeLeft);
	//error ? (<div>You sold one of your NFTs ! Goog luck with your next marriage !</div>

	return (
		<div style={{ height: '100vh', backgroundColor: '#FDF3EA' }}>
			<Routes>
				<Route path="/" element={<Home connect={connect} />} />
				<Route path="mint" element={<Mint />} />
				<Route
					path="collection"
					element={
						<Collection
							account={account}
							status={status}
							connect={connect}
							setTransaction={setTransaction}
							setError={setError}
						/>
					}
				/>
			</Routes>
		</div>
	);
};

export default App;
