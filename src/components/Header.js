import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { gsap } from "gsap";
import PlacesSubmenu from "./PlacesSubmenu";
import HostSubmenu from "./HostSubmenu";
import MyAccountSubmenu from "./MyAccountSubmenu";

import logo from "../assets/images/logo.png";

const Header = React.forwardRef((props, ref) => {
	const headerRef = useRef();

	useEffect(() => {
		gsap.to(headerRef.current, {
			y: 0,
			opacity: 1,
			pointerEvents: "all",
			delay: 3.4,
			ease: "expo.out",
		});
	}, []);

	useEffect(() => {
		if(!ref) return;
		ref.current = headerRef.current
	}, [headerRef, ref])

	return (
		<header className="header" ref={headerRef}>
			<div className="header__container">
				<Link to="/" className="header__logo-wrapper">
					<img src={logo} alt="Dooda logo" className="header__logo" />
				</Link>

				<ul className="nav nav--left">
					<li className="nav__item">
						<Link to="/" className="nav__link nav__link--active">
							Home
						</Link>
						{/*<HomeSubmenu />*/}
					</li>
					<li className="nav__item">
						<Link to="/p/hotels" className="nav__link">
							Destinations
						</Link>
						<PlacesSubmenu />
					</li>
					<li className="nav__item">
						<Link to="/host/guide" className="nav__link">
							Become a Host
						</Link>
						<HostSubmenu />
					</li>
					<li className="nav__item">
						<Link to="/account" className="nav__link">
							My Account
						</Link>
						<MyAccountSubmenu />
					</li>
				</ul>

				<ul className="header-right">
					<li className="header-right__item">
						<Link to="/signin" className="nav__cta">Login</Link>
					</li>

					<li className="header-right__item">
						<button className="header-right__button">
							<FiMenu className="header-right__icon" />
						</button>
					</li>
				</ul>
			</div>
		</header>
	);
});

export default Header;
