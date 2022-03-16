import React, { useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {FiSearch } from "react-icons/fi";
import { gsap } from "gsap";
import PlacesSubmenu from "./PlacesSubmenu";
import HostSubmenu from "./HostSubmenu";

import useAppContext from "../hooks/useAppContext";

import logo from "../assets/images/doadasvglogo.svg";

const Header = React.forwardRef((props, ref) => {
	const headerRef = useRef();
	const location = useLocation();

	const { openSidebar } = useAppContext();

	useEffect(() => {
		gsap.to(headerRef.current, {
			'clip-path': "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
			opacity: 1,
			delay: 5,
			ease: "expo.out",
		});
	}, []);

	useEffect(() => {
		if (!ref) return;
		ref.current = headerRef.current;
	}, [headerRef, ref]);

	useEffect(() => {
		let lastScrollTop = 0;
		const hideHeaderOnScroll = () => {
			const scrollTop =
				window.pageYOffset || document.documentElement.scrollTop;
			if (location.pathname === "/") {
				if (scrollTop > lastScrollTop && headerRef.current) {
					headerRef.current.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)";
					headerRef.current.style.opacity = 0;
				} else {
					headerRef.current.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
					headerRef.current.style.opacity = 1;
				}
			}
			lastScrollTop = scrollTop;
		};
		window.addEventListener("scroll", hideHeaderOnScroll);
		// return window.removeEventListener("scroll", hideHeaderOnScroll)
	}, [headerRef, location]);

	return (
		<header
			className={
				location.pathname === "/"
					? "header header--start-transparent"
					: "header"
			}
			ref={headerRef}
		>
			<div className="header__container">
				<Link to="/" className="header__logo-wrapper">
					<img src={logo} alt="Dooda logo" className="header__logo" />
				</Link>

				<ul className="nav nav--left">
					{location.pathname !== "/" && (
						<form className="nav-search">
							<label
								htmlFor="nav-search"
								className="nav-search__label"
							>
								<FiSearch />
							</label>
							<input
								type="search"
								id="nav-search"
								placeholder="Where are you going?"
								className="nav-search__input"
							/>
						</form>
					)}
				</ul>

				<ul className="header-right">
					{location.pathname === "/" ? (
						<>
							<li className="nav__item">
								<Link to="/host/guide" className="nav__link">
									Become a Host
								</Link>
							</li>
							<li className="header-right__item">
								<Link to="/signin" className="nav__cta">
									Sign in | Sign up
								</Link>
							</li>
						</>
					) : (
						<li className="nav__item">
							<Link to="/host/guide" className="nav__link">
								Become a Host
							</Link>
						</li>
					)}
				</ul>

				<div className="header__mobile">
					<form>
						<input
							type="text"
							placeholder="Where are you going?"
							id="hm-search"
						/>
						<label
							className="header__search-icon"
							htmlFor="hm-search"
						>
							<FiSearch />
						</label>
					</form>
					<button
						className="header__hamburger"
						onClick={() => openSidebar()}
					>
						<i className="fa-solid fa-bars header__hamburger-icon"></i>
					</button>
				</div>
			</div>
		</header>
	);
});

export default Header;
