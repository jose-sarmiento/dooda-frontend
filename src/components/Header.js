import React, { useRef, useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import user from "../assets/images/woman.jpg";
import {
	FaUmbrellaBeach,
	FaHotel,
	FaChevronRight,
	FaBell,
	FaEnvelope,
	FaCaretDown,
} from "react-icons/fa";
import { BiRestaurant } from "react-icons/bi";

const Header = () => {
	const [isOpenSubmenu, setIsOpenSubmenu] = useState(false);
	const [location, setLocation] = useState({});
	const submenuRef = useRef();

	useEffect(() => {
		const submenu = submenuRef.current;
		const { center, bottom } = location;

		submenuRef.current.style.left = `${center}px`;
		submenuRef.current.style.top = `${bottom}px`;
	}, [location]);

	const openSubmenu = (page, coordinates) => {
		setIsOpenSubmenu(true);
		setLocation(coordinates);
	};

	const closeSubmenu = () => setIsOpenSubmenu(false);

	const displaySubmenu = (e) => {
		const page = e.target.textContent;
		const tempBtn = e.target.getBoundingClientRect();
		const center = (tempBtn.left + tempBtn.right) / 2;
		const bottom = tempBtn.bottom - 6;

		openSubmenu(page, { center, bottom });
	};

	const handleMouseOver = (e) => {
		if (
			!(
				e.target.classList.contains("nav__link") ||
				e.target.classList.contains("submenu")
			)
		) {
			closeSubmenu();
		}
	};

	return (
		<header className="header" onMouseOver={handleMouseOver}>
			<a href="/" className="header__logo-wrapper">
				<img src={logo} alt="Dooda logo" className="header__logo" />
			</a>

			<div className="collapse">
				<ul className="nav nav--left">
					<li className="nav__item">
						<a href="#" className="nav__link">
							Home
						</a>
					</li>
					<li className="nav__item">
						<a
							href="#"
							className="nav__link"
							onMouseOver={displaySubmenu}
						>
							Places to stay
						</a>
					</li>
					<li className="nav__item">
						<a
							href="#"
							className="nav__link"
							onMouseOver={displaySubmenu}
						>
							Experiences
						</a>
					</li>
					<li className="nav__item">
						<a
							href="#"
							className="nav__link"
							onMouseOver={displaySubmenu}
						>
							Become a Host
						</a>
					</li>
				</ul>

				<ul className="nav nav--right">
					<li className="nav__item nav__item--user">
						<img
							src={user}
							alt="jane doe picture"
							className="nav__user-img"
						/>
						<a href="#" className="nav__link nav__link--name">
							Jane Doe
						</a>
					</li>
					<li className="nav__item nav__item--icons">
						<a href="#" className="nav__link">
							<FaEnvelope />
						</a>
					</li>

					<li className="nav__item nav__item--icons">
						<a href="#" className="nav__link">
							<FaBell />
						</a>
					</li>

					<li className="nav__item nav__item--icons">
						<a href="#" className="nav__link">
							<FaCaretDown />
						</a>
					</li>
				</ul>
			</div>

			<div
				className={
					isOpenSubmenu
						? "submenu submenu--grid-1 submenu--show"
						: "submenu submenu--grid-1"
				}
				ref={submenuRef}
				// onMouseOver={() => setIsOpenSubmenu(true)}
			>
				<div className="submenu__grid-item">
					<h4 className="submenu__heading">Places to stay</h4>
					<ul className="submenu__links">
						<li className="submenu__link-item">
							<a href="#" className="submenu__link">
								<FaHotel className="submenu__icon" />
								<span className="submenu__text">Hotels</span>
								<FaChevronRight />
							</a>
						</li>
						<li className="submenu__link-item">
							<a href="#" className="submenu__link">
								<BiRestaurant className="submenu__icon" />
								<span className="submenu__text">
									Restaurants
								</span>
								<FaChevronRight />
							</a>
						</li>
						<li className="submenu__link-item">
							<a href="#" className="submenu__link">
								<FaUmbrellaBeach className="submenu__icon" />
								<span className="submenu__text">Beachs</span>
								<FaChevronRight />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Header;
