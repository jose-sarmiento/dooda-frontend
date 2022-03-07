import React, {useEffect, useRef} from 'react'
import {Link} from "react-router-dom"
import heroimage from "../assets/images/contrasted.jpg"

import woman from "../assets/images/woman.jpg"

const Hero = React.forwardRef((props, ref) => {
	const overlay = useRef()

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = overlay.current.scrollTop
			console.log(scrollTop)
			let elementHeight =overlay.current.clientHeight;
	        let opacity = ((1 - (elementHeight - scrollTop) / elementHeight) * 0.8) + 0.2;
			// overlay.current.style.opacity = opacity
		}

		window.addEventListener("scroll", handleScroll)
	  	return () => window.removeEventListener("scroll", handleScroll);
	}, [])


	return (
		<div className="hero" ref={ref}>
			<div className="overlay" ref={overlay}></div>
			<div className="hero__container">
				<div className="hero__content stagger">
					<h1 className="hero__heading-1">DOODA</h1>				
					<h1 className="hero__heading-2">The Best Online Booking <br/> Platform</h1>
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
})

export default Hero