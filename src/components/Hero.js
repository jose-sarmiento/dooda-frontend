import React, {useEffect, useRef, useState} from 'react'
import {Link} from "react-router-dom"
import Search from "./Search"

import treehouse from "../assets/images/boat.png"
import logo from "../assets/images/doadasvglogo.svg"


import woman from "../assets/images/girlwithbackpack.jpg"

import useAppContext from "../hooks/useAppContext";

const Hero = React.forwardRef((props, ref) => {

	const overlay = useRef()
	const {openCalendar, closeCalendar, isOpenCalendar} = useAppContext() 


	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = overlay.current.scrollTop
			let elementHeight =overlay.current.clientHeight;
		}

		window.addEventListener("scroll", handleScroll)
	  	return () => window.removeEventListener("scroll", handleScroll);
	}, [])


	const handleOpenCalendar = () => {
		if(isOpenCalendar) {
			closeCalendar()
		} else {
			openCalendar()
		}
	} 


	return (
		<div className="hero" ref={ref}>
			<div className="overlay">
				<img src={logo} alt="logo" />
			</div>
			<div className="hero__container">
				<div className="hero__image">
					<img src={woman} alt="girl with backpack" />
				</div>

				<div className="hero__content">
					<h1 className="hero__heading-1 stagger">DOODA</h1>				
					<h1 className="hero__heading-2 stagger">The <span className="itallic">best online</span> booking <br/> platform</h1>
					<p className="hero__sub stagger">Trusted by over 200,000 users all over Philippines</p>
					<p className="hero__sub stagger">With over 500,000 available bookings</p>
					<Link to="/p/hotels" className="hero__cta stagger" ><i className="fa-solid fa-play"></i>Explore now</Link>	
				</div>	
			</div>
		</div>
	)
})

export default Hero