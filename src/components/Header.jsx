import React, { useState } from 'react';
import '../styles/header.scss';
import Filter from './Filter';


const Header = () => {
	const [toggle, setToggle] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false);

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
					{/* <li
						className="navbar-shopping-cart"
						onClick={() => setToggleOrders(!toggleOrders)}
					>
						<img src={shoppingCart} alt="shopping cart" />
						{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
					</li> */}
				</ul>
			</div>
			{toggle && <Filter />}
			{/* {toggleOrders && <MyOrder />} */}
		</nav>
	);
}

export default Header;