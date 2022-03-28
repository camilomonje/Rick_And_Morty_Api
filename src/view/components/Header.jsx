import React, { useState } from 'react';
import '../styles/header.scss';
import Filter from './Filter';


const Header = () => {
	const [toggle, setToggle] = useState(false);

	const handleToggle = () => {
		setToggle(!toggle);
	}

	return (
		<nav>
			<div className="navbar-left">
				<img src="https://www.pngitem.com/pimgs/m/25-258834_rick-and-morty-logo-and-image-rick-and.png" alt="logo" className="nav-logo" />
				<ul>
					<li>
						<a href="/">Todos</a>
					</li>
					<li>
						<a href="/">Favoritos</a>
					</li>
					
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={handleToggle}>
						Especies
					</li>
				</ul>
			</div>
			{toggle && <Filter />}
		</nav>
	);
}

export default Header;