import React from "react";
import { Link } from "react-router-dom";

const PlacesSubmenu = () => {
	return (
		<div className="submenu submenu--places">
			<ul className="submenu__group submenu__group--categories">
				<h3 className="submenu__heading submenu__heading--categories">What place you are looking?</h3>
				<li className="submenu__row">
					<span className="submenu__icon">
						<i className="fa-solid fa-bed"></i>
					</span>
					<Link to="/p/hotels" className="submenu__text">
						Hotel
					</Link>
				</li>
 
				<li className="submenu__row">
					<span className="submenu__icon">
						<i className="fa-solid fa-house-chimney"></i>
					</span>
					<Link to="/p/houses" className="submenu__text">
						Mini House
					</Link>
				</li>
				<li className="submenu__row">
					<span className="submenu__icon">
						<i className="fa-solid fa-water-ladder"></i>
					</span>
					<Link to="/p/pools" className="submenu__text">
						Pools
					</Link>
				</li>
				<li className="submenu__row">
					<span className="submenu__icon">
						<i className="fa-solid fa-person-swimming"></i>
					</span>
					<Link to="/p/beaches" className="submenu__text">
						Beach Resorts
					</Link>
				</li>
				<li className="submenu__row">
					<span className="submenu__icon">
						<i className="fa-solid fa-leaf"></i>
					</span>
					<Link to="/p/farms" className="submenu__text">
						Farm
					</Link>
				</li>
				<li className="submenu__row">
					<span className="submenu__icon">
						<i class="fa-solid fa-house-tree"></i>
					</span>
					<Link to="/p/cabins" className="submenu__text">
						Cabins
					</Link>
				</li>
				<li className="submenu__row">
					<span className="submenu__icon">
						<i class="fa-solid fa-campground"></i>
					</span>
					<Link to="/p/campers" className="submenu__text">
						Campers
					</Link>
				</li>
				<li className="submenu__row">
					<span className="submenu__icon">
						<i class="fa-solid fa-island-tropical"></i>
					</span>
					<Link to="/p/islands" className="submenu__text">
						Islands
					</Link>
				</li>
				<li className="submenu__row">
					<span className="submenu__icon">
						<i class="fa-solid fa-house-tree"></i>
					</span>
					<Link to="/p/treehouses" className="submenu__text">
						Treehouses
					</Link>
				</li>
				<li className="submenu__row">
					<span className="submenu__icon">
						<i class="fa-solid fa-ship"></i>
					</span>
					<Link to="/p/houseboats" className="submenu__text">
						HouseBoats
					</Link>
				</li>
			</ul>

			<ul className="submenu__group submenu__group--filters">
				<div className="submenu__group-header">
					<h3 className="submenu__heading">Places are grouped according to your liking</h3>
				</div>
				<li className="submenu__row">
					<span className="submenu__icon">
						<i className="fa-solid fa-map-location-dot"></i>
					</span>
					<Link to="/link" className="submenu__text">
						Nearest
					</Link>
				</li>

				<li className="submenu__row">
					<span className="submenu__icon">
						<i className="fa-solid fa-star"></i>
					</span>
					<Link to="/link" className="submenu__text">
						Highest Rated
					</Link>
				</li>
				<li className="submenu__row">
					<span className="submenu__icon">
						<i className="fa-solid fa-dollar-sign"></i>
					</span>
					<Link to="/link" className="submenu__text">
						Cheapest
					</Link>
				</li>
			</ul>

			<ul className="submenu__group submenu__group--topplaces">
				<h3 className="submenu__heading">Don't know where to go? We already planned ahead for you.</h3>
				<p className="submenu__description">Top places mostly visit by clients</p>
				<div className="grid-4 mt-1">
					<div className="top-place__place">
						<p className="top-place__name">Batangas</p>
						<span className="top-place__count">1,300 available</span>
					</div>
					<div className="top-place__place">
						<p className="top-place__name">Catanduanes</p>
						<span className="top-place__count">1,200 available</span>
					</div>
					<div className="top-place__place">
						<p className="top-place__name">Cebu</p>
						<span className="top-place__count">900 available</span>
					</div>
					<div className="top-place__place">
						<p className="top-place__name">Palawan</p>
						<span className="top-place__count">1,340 available</span>
					</div>
					<div className="top-place__place">
						<p className="top-place__name">Tagaytay</p>
						<span className="top-place__count">990 available</span>
					</div>
					<div className="top-place__place">
						<p className="top-place__name">Samar</p>
						<span className="top-place__count">300 available</span>
					</div>
				</div>
			</ul>
		</div>
	);
};

export default PlacesSubmenu;
