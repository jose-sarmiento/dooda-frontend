import React, { useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { gsap } from "gsap";
import {Link} from "react-router-dom"
import hotels from "../mocks/hotels";
import Layout from "./Layout";
import { Card, Reviews, Steps, Features, Hero, Previews } from "../components";
import useAppContext from "../hooks/useAppContext";

import manmountain from "../assets/images/contrasted.jpg";
import manswimming from "../assets/images/contrasted2.jpg";
import outdoor from "../assets/images/cliford.jpg";
import room from "../assets/images/4.jpg";


const Homepage = () => {
	const { closeSubmenu, isSubmenuOpen } = useAppContext();

	const bannerRef = useRef();
	const headingRef = useRef();
	const headerRef = useRef();

	const q = gsap.utils.selector(bannerRef);
	const tl = useRef();

	useEffect(() => {
		tl.current = gsap
			.timeline()
			.to(q(".overlay"), {
				opacity: 1,
				duration: 1,
				ease: "expo.out",
			})
			.delay(1)
			.to(q(".stagger"), {
				clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
				opacity: 1,
				duration: 2,
				stagger: 0.6,
			})
			.fromTo(q(".float__item"), {
				y: 20,
				opacity: 0,
			},{
				delay: 1,
				y: 0,
				opacity: 1,
				stagger: 0.2,
			});
	}, [bannerRef, q]);

	useEffect(() => {
		let observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) headerRef.current.classList.add("header--dark");
			else headerRef.current.classList.remove("header--dark");
		}, {});

		observer.observe(bannerRef.current.querySelector(".hero__heading-1"));
	}, [headingRef, headerRef]);

	const handleMouseOver = () => {
		if (isSubmenuOpen) closeSubmenu();
	};

	return (
		<Layout ref={headerRef}>

			<Hero ref={bannerRef} />

			<Previews />

			<section className="section section-reviews">
				<div className="container">
					<Reviews />
				</div>
			</section>

			<section className="section section--features">
				<Features />
			</section>

			<section className="section-join-now">
				<div className="section-join-now__container">
					<h2 className="section-join-now__heading">Want to Host Your Place ?</h2>
					<span className="section-join-now__bar"></span>
					<p className="section-join-now__sub">Join as a host in Dooda now</p>
					<p className="section-join-now__sub">Benefit from the feautures provided by Dooda to Help your business grow</p>
					<button className="section-join-now__cta">Learn How to Host Now</button>
				</div>
			</section>
		</Layout>
	);
};

export default Homepage;
