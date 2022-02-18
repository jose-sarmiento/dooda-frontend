import React from 'react'
import logo from "../assets/images/logo.png"

const Header = () => {
	return (
		<header className="header">
			<a href="#" className="header__logo-wrapper">
				<img src={logo} alt="Dooda logo" className="header__logo" />
			</a>

			<div className="collapse">
				<ul className="nav nav--left">
					<li className="nav__item">
						<a href="#" className="nav__link">Home</a>
					</li>
					<li className="nav__item">
						<a href="#" className="nav__link">Contact</a>
					</li>
				</ul>

				<ul className="nav nav--right">
					<li className="nav__item">
						<a href="#" className="nav__link">Contact us:  (+63)9076342521</a>
					</li>
					<li className="nav__item">
						<a href="#" className="nav__link nav__link--login">Login</a>
					</li>
				</ul>
			</div>
				
			
		</header>
	)
}

export default Header