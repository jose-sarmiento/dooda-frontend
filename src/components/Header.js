import React, { useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { gsap } from "gsap";
import PlacesSubmenu from "./PlacesSubmenu";
import HostSubmenu from "./HostSubmenu";
import MyAccountSubmenu from "./MyAccountSubmenu";

import useAppContext from "../hooks/useAppContext";

import logo from "../assets/images/doadasvglogo.svg";
import user from "../assets/images/woman.jpg";

const Header = React.forwardRef((props, ref) => {
	const headerRef = useRef();
	const location = useLocation();

	const { openSidebar } = useAppContext();

	useEffect(() => {
		gsap.to(headerRef.current, {
			scaleY: 1,
			opacity: 1,
			pointerEvents: "all",
			delay: 4,
			ease: "expo.out",
		});
	}, []);

	useEffect(() => {
		if (!ref) return;
		ref.current = headerRef.current;
	}, [headerRef, ref]);

	useEffect(() => {
		let lastScrollTop = 0
		const hideHeaderOnScroll = () => {
			const scrollTop = window.pageYOffset ||document.documentElement.scrollTop
			if(scrollTop > lastScrollTop && headerRef.current) {
				headerRef.current.style.transform = "scaleY(0)"
				headerRef.current.style.opacity = 0
			} else {
				headerRef.current.style.transform = "scaleY(1)"
				headerRef.current.style.opacity = 1
			}
			lastScrollTop = scrollTop
		}
		window.addEventListener("scroll", hideHeaderOnScroll)
		// return window.removeEventListener("scroll", hideHeaderOnScroll)
	},[headerRef])

	return (
		<header
			className={location.pathname === "/" ? "header header--start-transparent" : "header"}
			ref={headerRef}
		>
			<div className="header__container">
				<Link to="/" className="header__logo-wrapper">
					<img src={logo} alt="Dooda logo" className="header__logo" />
				</Link>

				<ul className="nav nav--left">
					<li className="nav__item">
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive ? "nav__link nav__link--active" : "nav__link"
							}
						>
							Home
						</NavLink>
						
						{/*<HomeSubmenu />*/}
					</li>
					<li className="nav__item">
						<NavLink
							to="/p/hotels"
							className={({ isActive }) =>
								isActive ? "nav__link nav__link--active" : "nav__link"
							}
						>
							Places to Stay
						</NavLink>
						<PlacesSubmenu />
					</li>
					{/*<li className="nav__item">
						<NavLink
							to="/p/hotels"
							className={({ isActive }) =>
								isActive ? "nav__link nav__link--active" : "nav__link"
							}
						>
							Outdoor Experience
						</NavLink>
						<PlacesSubmenu />
					</li>*/}
					<li className="nav__item">
						<NavLink
							to="/host/guide"
							className={({ isActive }) =>
								isActive ? "nav__link nav__link--active" : "nav__link"
							}
						>
							Become a Host
						</NavLink>
						<HostSubmenu />
					</li>
				</ul>

				<ul className="header-right">
					<li className="header-right__item">
						<Link to="/signin" className="nav__cta">
							Login
						</Link>
					</li>
				</ul>

				<div className="header__mobile">
					<figure className="header__user">
						<img src={user} alt="profile" className="header__user-image" />
					</figure>
					<h6 className="header__username">JaneDoe</h6>
					<button className="header__hamburger" onClick={() => openSidebar()}>
						<i className="fa-solid fa-bars header__hamburger-icon"></i>
					</button>
				</div>
			</div>
		</header>
	);
});

export default Header;
