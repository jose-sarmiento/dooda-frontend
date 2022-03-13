import React from "react";
import { Link } from "react-router-dom";

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
						<Link to="/account/profile" className="submenu__text">
							Profile
						</Link>
					</li>

					<li className="submenu__row">
						<span className="submenu__icon">
							<i className="fa-solid fa-bell"></i>
						</span>
						<Link to="/account/notifications" className="submenu__text">
							Notifications
						</Link>
					</li>

					<li className="submenu__row">
						<span className="submenu__icon">
							<i className="fa-solid fa-bell"></i>
						</span>
						<Link to="/account/wishlists" className="submenu__text">
							Wishlists
						</Link>
					</li>

					<li className="submenu__row">
						<span className="submenu__icon">
							<i className="fa-solid fa-book"></i>
						</span>
						<Link to="/account/recent" className="submenu__text">
							Recent Bookings
						</Link>
					</li>
					
				</ul>
				<div className="account__me">
					<figure className="account__picture-wrapper">
						<img src={woman} alt="picture" className="account__picture" />
					</figure>
					<div className="account__info">
						<h4 className="account__name">Jane Doe</h4>
						<h4 className="account__job">Tourist</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyAccountSubmenu;
