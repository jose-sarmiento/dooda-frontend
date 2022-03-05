import React from 'react'
import heroimage from "../assets/images/hero-image.jpg"

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
					<button className="hero__cta">Explore now</button>	
				</div>	

				<figure className="hero__image-wrapper">
					<img src={heroimage} alt="travel bag with hat" className="hero__image" />
				</figure>	
			</div>
		</div>
	)
}

export default Hero