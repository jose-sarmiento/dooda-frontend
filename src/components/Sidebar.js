import React from 'react'
import {NavLink, Link} from "react-router-dom"
import useAppContext from "../hooks/useAppContext"

const Sidebar = () => {
	const {isOpenSidebar, closeSidebar} = useAppContext()

	return (
		<div className={isOpenSidebar ? "sidebar sidebar--show" : "sidebar"}>
			<button className="sidebar__close" onClick={() => closeSidebar()}>Close</button>
			<ul className="sidebar__links">
					<li className="sidebar__item">
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive ? "sidebar__link sidebar__link--active" : "sidebar__link"
							}
						>
							<i className="fa-solid fa-house"></i>
							Home
						</NavLink>
					</li>

					<li className="sidebar__item">
						<NavLink
							to="/p/hotels"
							className={({ isActive }) =>
								isActive ? "sidebar__link sidebar__link--active" : "sidebar__link"
							}
						>
							<i className="fa-solid fa-shoe-prints"></i>
							Places to Stay
						</NavLink>
					</li>

					<li className="sidebar__item">
						<NavLink
							to="/host/guide"
							className={({ isActive }) =>
								isActive ? "sidebar__link sidebar__link--active" : "sidebar__link"
							}
						>
							<i className="fa-solid fa-user-plus"></i>
							Become a Host
						</NavLink>
					</li>

					<li className="sidebar__item">
						<NavLink
							to="/account/profile"
							className={({ isActive }) =>
								isActive ? "sidebar__link sidebar__link--active" : "sidebar__link"
							}
						>
							<i className="fa-solid fa-user"></i>
							My Account
						</NavLink>
					</li>
				</ul>
			
			<div className="sidebar__item">
				<Link to="#" className="sidebar__link">
					<i className="fa-solid fa-gear sidebar__cog"></i>
					Settings
				</Link>
			</div>
		</div>
	)
}

export default Sidebar