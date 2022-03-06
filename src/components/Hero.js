import React from 'react'
import {Link} from "react-router-dom"
import heroimage from "../assets/images/hero-image.jpg"

import woman from "../assets/images/woman.jpg"

const Hero = () => {
	return (
		<div className="hero">
			<div className="hero__container">
				<div className="hero__content">
					<h1 className="hero__heading-1">DOODA</h1>				
					<h1 className="hero__heading-2">Find your next destination</h1>
					<span className="hero__bar"></span>	
					<p className="hero__sub">Trusted by over 200,000 users all over Philippines</p>
					<p className="hero__sub">With over 500,000 available bookings</p>
					<Link to="/p/hotels" className="hero__cta">Explore now</Link>	
				</div>	

				<figure className="hero__image-wrapper">
					<img src={heroimage} alt="travel bag with hat" className="hero__image" />
				</figure>	

				<div className="float">
					<div className="float__item float__item--profile">
						<img src={woman} alt="jane doe picture" className="float__user-img" />
						<div className="float__tooltips">Account</div>
					</div>
					<div className="float__item float__item--notifications">
						<i class="fa-solid fa-bell"></i>
						<div className="float__tooltips">Notifications</div>
					</div>
					<div className="float__item float__item--wishlists">
						<i class="fa-solid fa-heart"></i>
						<div className="float__tooltips">Wishlists</div>
					</div>
					<div className="float__item float__item--calendar">
						<i class="fa-solid fa-calendar-days"></i>
						<div className="float__tooltips">Calendar</div>
					</div>
					<div className="float__item float__item--map">
						<i class="fa-solid fa-map"></i>
						<div className="float__tooltips">Map</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero