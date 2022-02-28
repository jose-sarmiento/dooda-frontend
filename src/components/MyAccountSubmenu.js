import React from 'react'
import {FaUser, FaBook, FaBell, FaHeart} from "react-icons/fa"
import {Link} from "react-router-dom"

const MyAccountSubmenu = () => {
	return (
		<div className="submenu submenu--account">
			<ul className="submenu__group">
				<h3 className="submenu__heading">Me</h3>
				<li className="submenu__row">
					<span className="submenu__icon">
						<i class="fa-solid fa-user"></i>
					</span>
					<Link to="/link" className="submenu__text">Profile</Link>
				</li>

				<li className="submenu__row">
					<span className="submenu__icon">
						<i class="fa-solid fa-bell"></i>
					</span>
					<Link to="/link" className="submenu__text">Bookings</Link>
				</li>
				<li className="submenu__row">
					<span className="submenu__icon">
						<i class="fa-solid fa-bell"></i>
					</span>
					<Link to="/link" className="submenu__text">Notifications</Link>
				</li>
				<li className="submenu__row">
					<span className="submenu__icon">
						<i class="fa-solid fa-heart"></i>
					</span>
					<Link to="/link" className="submenu__text">Wishlist</Link>
				</li>
			</ul>	
			<ul className="submenu__group">
				<h3 className="submenu__heading">Authentication</h3>
				<li className="submenu__row">
					<span className="submenu__icon">
						<i class="fa-solid fa-arrow-right-to-bracket"></i>
					</span>
					<Link to="/link" className="submenu__text">Login</Link>
				</li>
				<li className="submenu__row">
					<span className="submenu__icon">
						<i class="fa-solid fa-arrow-right-from-bracket"></i>
					</span>
					<Link to="/link" className="submenu__text">Register</Link>
				</li>
			</ul>		
		</div>
	)
}

export default MyAccountSubmenu