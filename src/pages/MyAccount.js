import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Layout from "./Layout";
import Profile from "./Profile";
import Notifications from "./Notifications";
import Wishlists from "./Wishlists";
import RecentBookings from "./RecentBookings";
import Settings from "./Settings";

import user from "../assets/images/woman.jpg";

const MyAccount = () => {
	return (
		<Layout>
			<div className="myaccount">
				<div className="myaccount__left">
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
								<i class="fa-solid fa-user"></i>
								Profile
							</NavLink>
						</li>
						<li className="myaccount__item">
							<NavLink
								to="notifications"
								className={({ isActive }) =>
									isActive
										? "myaccount__link myaccount__link--active"
										: "myaccount__link"
								}
							>
								<i class="fa-solid fa-bell"></i>
								Notifications
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
								<i class="fa-solid fa-heart"></i>
								Wishlists
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
								<i class="fa-solid fa-book"></i>
								Recent Bookings
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
