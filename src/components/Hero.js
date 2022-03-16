import React from 'react'
import {Link} from "react-router-dom"

import logo from "../assets/images/doadasvglogo.svg"
import woman from "../assets/images/girlwithbackpack.jpg"


const Hero = React.forwardRef((props, ref) => {

	return (
		<div className="hero" ref={ref}>

			<div className="hero__container">
				<div className="hero__image">
					<img src={woman} alt="girl with backpack" />
				</div>

				<div className="hero__content">
					<h1 className="hero__heading-1 stagger">DOODA</h1>				
					<h1 className="hero__heading-2 stagger">The <span className="itallic">Best</span><br/>Online Booking <br/>Platform</h1>
					<span className="hero__bar stagger"></span>
					<p className="hero__sub stagger">Trusted by over 200,000 users all over Philippines</p>
					<p className="hero__sub stagger">With over 500,000 available bookings</p>
					<Link to="/p/hotels" className="hero__cta stagger" ><i className="fa-solid fa-play"></i>Explore now</Link>	
				</div>	
			</div>
		</div>
	)
})

export default Hero