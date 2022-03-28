import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
						<Link to="/">Todos</Link>
					</li>
					<li>
						<Link to="/favorites">Favoritos</Link>
					</li>
					<li>
						<Link to="/episodes">Episodios</Link>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				{/* <ul>
					<li className="navbar-email" onClick={handleToggle}>
						Especies
					</li>
				</ul> */}
			</div>
			{toggle && <Filter />}
		</nav>
	);
}

export default Header;