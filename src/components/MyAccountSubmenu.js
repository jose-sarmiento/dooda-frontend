import React from "react";
import { FaUser, FaBook, FaBell, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

import place from "../assets/images/bg-small.jpg"
import woman from "../assets/images/woman.jpg"

const MyAccountSubmenu = () => {
	return (
		<div className="submenu submenu--account">
			<div className="account">
				<ul className="account__links">
					<li className="submenu__row">
						<span className="submenu__icon">
							<i className="fa-solid fa-user"></i>
						</span>
						<Link to="/link" className="submenu__text">
							Profile
						</Link>
					</li>

					<li className="submenu__row">
						<span className="submenu__icon">
							<i className="fa-solid fa-book"></i>
						</span>
						<Link to="/link" className="submenu__text">
							Bookings
						</Link>
					</li>
					<li className="submenu__row">
						<span className="submenu__icon">
							<i className="fa-solid fa-bell"></i>
						</span>
						<Link to="/link" className="submenu__text">
							Notifications
						</Link>
					</li>
				</ul>
				<div className="account__me">
					<figure className="account__picture-wrapper">
						<img src={woman} alt="picture" className="account__picture" />
					</figure>
					<h4 className="account__name">Jane Doe</h4>

					<p className="account__active-heading">Active Booking/s</p>
					<div className="account__active-booked">
						<figure className="account__place">
							<img src={place} alt="place" className="account__picture" />
						</figure>
						<div>
							<p className="account__placename">Twin Rock Beach Resort</p>
							<p className="account__date">March 14 - 28<span className="account__remaining">2 days left</span></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyAccountSubmenu;
