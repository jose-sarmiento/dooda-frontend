import React from 'react'
import {Link} from "react-router-dom"
import {FaExpandAlt} from "react-icons/fa"
import {Stars} from "../components"

import img1 from "../assets/images/twinrock.jpg"
import img2 from "../assets/images/tr2.jpg"
import img3 from "../assets/images/tr3.jpg"
import map from "../assets/images/trmap.jpg"

const Profile = () => {
	return (
		<div className="profile">
			<div className="p-section p-section--personal">
				<h3 className="profile__heading">Personal Info</h3>
				<p className="profile__name">Name: Jane Smith Doe</p>
				<p className="profile__address">Address: San Pedro Virac, Catanduanes</p>
				<p className="profile__email">E-mail: jane@gmail.com</p>
				<p className="profile__contact">Contact number: 09052720082</p>
			</div>
			<div className="p-section p-section--active">
				<h3 className="profile__heading">Active Bookings</h3>
				<div className="booking">
					<div className="booking__header">
						<div className="booking__header-left">
							<Link to="/p/hotels/ey32e9837839" className="booking__name">Catanduanes Twin Rock Beach Resort</Link>
							<p>Igang Virac Catanduanes 4800</p>
							<p className="booking__stars">5.0 <Stars/></p>
						</div>
						<div className="booking__header-right">
							<p>March 23 - 27 2022</p>
							<p>5 guest</p>
							<p>4 days remaining</p>
						</div>
					</div>
					<div className="booking__gallery">
						<figure><img src={img1} alt="igang" /></figure>
						<div className="map">
							<img src={map} alt="map" />
							<Link to="#" className="booking__map-link" target="_blank">
								<FaExpandAlt />
							</Link>
						</div>
						<figure><img src={img2} alt="igang" /></figure>
						<figure><img src={img3} alt="igang" /></figure>
					</div>
				</div>
			</div>
			<div className="p-section p-section--recent"></div>
		</div>
	)
}

export default Profile