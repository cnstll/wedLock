import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo_animated.gif';

export default function NavBar() {
	return (
		<div
			style={{
				height: 80,
				backgroundColor: '#fcdfcf',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
				padding: '0px 50px 0px 30px',
			}}
		>
			<div>
				<img src={Logo} style={{ height: 65, borderRadius: 10 }} />
			</div>
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				<div style={{ padding: 20 }}>
					<Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
						Home
					</Link>
				</div>
				<div style={{ padding: 20 }}>
					<Link to="/collection" style={{ textDecoration: 'none', color: 'black' }}>
						Collection
					</Link>
				</div>
			</div>
		</div>
	);
}
