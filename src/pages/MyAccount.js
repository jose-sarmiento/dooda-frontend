import React, {useState} from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import {FaBars} from "react-icons/fa"
import Layout from "./Layout";
import Profile from "./Profile";
import Notifications from "./Notifications";
import Wishlists from "./Wishlists";
import RecentBookings from "./RecentBookings";

import user from "../assets/images/woman.jpg";

const MyAccount = () => {
	const [open, setOpen] = useState(false)

	return (
		<Layout>
			<div className="myaccount">
				<div className={open ? "myaccount__left myaccount__left--active" : "myaccount__left"}>
					<FaBars className="myaccount__menu-icon" onClick={() => setOpen(prev => !prev)}/>
					<div className="myaccount__profile">
						<figure className="myaccount__profile-image-wrapper">
							<img src={user} alt="jane" className="myaccount__profile-image" />
						</figure>
						<h2 className="myaccount__name">Jane Smith Doe</h2>
						<p className="myaccount__job">Tourist</p>
					</div>
					<ul className="myaccount__links">
						<li className="myaccount__item">
							<NavLink
								to="profile"
								className={({ isActive }) =>
									isActive
										? "myaccount__link myaccount__link--active"
										: "myaccount__link"
								}
							>
								<i className="fa-solid fa-user myaccount__link-icon"></i>
								<span className="myaccount__link-text">Profile</span>
							</NavLink>
						</li>
						<li className="myaccount__item">
							<NavLink
								to="wishlists"
								className={({ isActive }) =>
									isActive
										? "myaccount__link myaccount__link--active"
										: "myaccount__link"
								}
							>
								<i className="fa-solid fa-heart myaccount__link-icon"></i>
								<span className="myaccount__link-text">Wishlists</span>
							</NavLink>
						</li>
						<li className="myaccount__item">
							<NavLink
								to="recent"
								className={({ isActive }) =>
									isActive
										? "myaccount__link myaccount__link--active"
										: "myaccount__link"
								}
							>
								<i className="fa-solid fa-book myaccount__link-icon"></i>
								<span className="myaccount__link-text">Recent Bookings</span>
							</NavLink>
						</li>
					</ul>
				</div>
				<div className="myaccount__right">
					<Routes>
						<Route path="profile" element={<Profile />} />
						<Route path="notifications" element={<Notifications />} />
						<Route path="wishlists" element={<Wishlists />} />
						<Route path="recent" element={<RecentBookings />} />
					</Routes>
				</div>
			</div>
		</Layout>
	);
};

export default MyAccount;
