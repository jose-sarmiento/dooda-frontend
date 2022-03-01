import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUmbrellaBeach, FaHotel, FaBell, FaEnvelope } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { BiRestaurant } from "react-icons/bi";
import { gsap } from "gsap";
import useAppContext from "../hooks/useAppContext";
import PlacesSubmenu from "./PlacesSubmenu";
import HomeSubmenu from "./HomeSubmenu";
import HostSubmenu from "./HostSubmenu";
import MyAccountSubmenu from "./MyAccountSubmenu";

import logo from "../assets/images/logo.png";
import user from "../assets/images/woman.jpg";

const Header = React.forwardRef((props, ref) => {
	const { closeSubmenu, openSubmenu } = useAppContext();

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

	const handleMouseOver = (e) => {
		const page = e.target.textContent;
		const link = e.target.getBoundingClientRect();
		const center = (link.left + link.right) / 2;
		const bottom = link.bottom - 3;
		openSubmenu(page, { center, bottom });
	};

	const handleHeaderHover = (e) => {
		if (e.target.classList.contains("nav__link")) return;
		closeSubmenu();
	};

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
						<Link to="/experiences" className="nav__link">
							Become a Host
						</Link>
						<HostSubmenu />
					</li>
					<li className="nav__item">
						<Link to="/experiences" className="nav__link">
							My Account
						</Link>
						<MyAccountSubmenu />
					</li>
				</ul>

				<ul className="header-right">
					{/*<li className="nav__item nav__item--user">
						<img src={user} alt="jane doe picture" className="nav__user-img" />
						<Link to="/profile" className="nav__link nav__link--name">
							Jane
						</Link>
					</li>*/}

					<li className="header-right__item">
						<button className="nav__cta">Login</button>
					</li>

					<li className="header-right__item">
						<button className="header-right__button">
							<FiMenu className="header-right__icon" />
						</button>
					</li>

					{/*<li className="nav__item nav__item--signin">
						<button className="nav__link nav__link--btn">
							<FaCaretDown/>
						</button>
					</li>*/}
					
				</ul>
			</div>
		</header>
	);
});

export default Header;
