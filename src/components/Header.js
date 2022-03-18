import React, { useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {FiSearch } from "react-icons/fi";
import {RiMenu3Line } from "react-icons/ri";
import { gsap } from "gsap";

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
					if(window.innerWidth <= 911) {
						// show search form only
						headerRef.current.classList.remove("scroll-up")
						headerRef.current.classList.add("scroll-down")
					} else {
						headerRef.current.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)";
						headerRef.current.style.opacity = 0;
					}
				} else {
					if(window.innerWidth <= 911) {
						// scroll down
						// hide search form
						headerRef.current.classList.remove("scroll-down")
						headerRef.current.classList.add("scroll-up")
					} else {
						headerRef.current.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
						headerRef.current.style.opacity = 1;
					}
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

				<ul className="nav">
					<li className="nav__item">
						<Link to="/host/guide" className="nav__link">
							My Account
						</Link>
					</li>
					<li className="nav__item">
						<Link to="/host/guide" className="nav__link">
							Become a Host
						</Link>
					</li>
					<li className="nav__item">
						<Link to="/signin" className="nav__link">
							Sign in | Sign up
						</Link>
					</li>
					<button
						className="header__hamburger"
						onClick={() => openSidebar()}
					>
						<RiMenu3Line className="header__hamburger-icon" />
					</button>
				</ul>
			</div>
		</header>
	);
});

export default Header;
