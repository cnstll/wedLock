import React from 'react';
import NavBar from '../components/NavBar';
import { Typography, Button } from '@mui/material';
import couple from '../assets/couple.jpeg';
import '../styles/style.css';

export default function Home({ connect }) {
	return (
		<>
			<NavBar />
			<div
				style={{
					heigth: '100%',
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
				}}
			>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-around',
						marginTop: '40px',
					}}
				>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
							margin: '30px 0px',
						}}
					>
						<div>
							<Typography align="center" variant="h5">
								What is WedLock
							</Typography>
							<Typography align="center">
								Lrzehvbdskvbsjhvbsdhjkvnlsibvhskdn
							</Typography>
						</div>

						<Button variant="contained" onClick={connect} className="Button">
							Connect your wallet
						</Button>
					</div>
					<img src={couple} style={{ maxWidth: 420, borderRadius: 15 }} />
				</div>
			</div>
		</>
	);
}
