import React from "react";
import { Link } from "react-router-dom";
import { FaUmbrellaBeach, FaHotel, FaBell, FaEnvelope, FaCaretDown } from "react-icons/fa";
import { BiRestaurant } from "react-icons/bi";

import logo from "../assets/images/logo.png";
import user from "../assets/images/woman.jpg";

const Header = () => {

	return (
		<header className="header">
			<Link to="/" className="header__logo-wrapper">
				<img src={logo} alt="Dooda logo" className="header__logo" />
			</Link>

			<div className="collapse">
				<ul className="nav nav--left">
					<li className="nav__item">
						<Link to="/" className="nav__link">
							Home
						</Link>
					</li>
					<li className="nav__item">
						<Link to="/places" className="nav__link">
							Places to stay
						</Link>
					</li>
					<li className="nav__item">
						<Link to="/experiences" className="nav__link">
							Experiences
						</Link>
					</li>
				</ul>

				<ul className="nav nav--right">
					<li className="nav__item nav__item--user">
						<img src={user} alt="jane doe picture" className="nav__user-img" />
						<Link to="/profile" className="nav__link nav__link--name">
							Jane Doe
						</Link>
					</li>

					<li className="nav__item nav__item--icons">
						<Link to="/notifications" className="nav__link">
							<FaBell />
						</Link>
					</li>

					<li className="nav__item">
						<button className="nav__link nav__link--btn">
							<FaCaretDown/>
						</button>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
