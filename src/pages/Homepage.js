import React, { useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { gsap } from "gsap";
import {Link} from "react-router-dom"
import hotels from "../mocks/hotels";
import Layout from "./Layout";
import { Card, Reviews, Steps, Features } from "../components";
import useAppContext from "../hooks/useAppContext";

import manmountain from "../assets/images/contrasted.jpg";
import manswimming from "../assets/images/contrasted2.jpg";

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
			.to(q(".fh-banner__image--mountain"), {
				y: 0,
				opacity: 1,
				duration: 1.2,
				ease: "expo.out",
			})
			.to(
				q(".fh-banner__image--swimming"),
				{
					y: 0,
					opacity: 1,
					duration: 1.2,
					ease: "expo.out",
				},
				"-=1.2"
			)
			.to(q(".stagger"), {
				clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
				opacity: 1,
				duration: 1,
				ease: "expo.out",
				stagger: 0.4,
			});
	}, [bannerRef, q]);

	useEffect(() => {
		let observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) headerRef.current.classList.add("header--dark");
			else headerRef.current.classList.remove("header--dark");
		}, {});

		observer.observe(headingRef.current);
	}, [headingRef, headerRef]);

	const handleMouseOver = () => {
		if (isSubmenuOpen) closeSubmenu();
	};

	return (
		<Layout ref={headerRef}>
			{/*<Banner />*/}
			<section className="fh-banner" onMouseOver={handleMouseOver}>
				<div className="container fh-banner__content" ref={bannerRef}>

					<div className="fh-banner__text">
						<h1 className="fh-banner__heading stagger" ref={headingRef}>
							Find your next destination
						</h1>
						<h2 className="fh-banner__subheading stagger">
							Trusted by over 200,000 users all over Philippines
						</h2>
						<Link to="/p/hotels" className="fh-banner__cta stagger">Browse Now</Link>
						<div className="fh-banner__line-break stagger">
							<span className="fh-banner__or">OR</span>
						</div>
						<form className="fh-banner__search stagger">
							<input type="text" id="search-form" className="fh-banner__input"
							placeholder="e.g Twin Rock Beach Resort" />
							<button className="fh-banner__submit-btn">
								<FaSearch />
							</button>
						</form>
					</div>

					<figure className="container fh-banner__image fh-banner__image--swimming">
						<img src={manswimming} alt="manswimming" className="fh-banner__img" />
					</figure>
					<figure className="container fh-banner__image fh-banner__image--mountain">
						<img
							src={manmountain}
							alt="man standing on top of mountain"
							className="fh-banner__img"
						/>
					</figure>

				{/*	<div className="fh-banner__footer">
						<FaFacebook className="fh-banner__social" />
						<FaFacebook className="fh-banner__social" />
						<FaFacebook className="fh-banner__social" />
					</div>*/}
				</div>
			</section>

			<section className="section section--popular">
				<div className="container">
					<h2 className="section__heading">Popular Places This month</h2>

				<div className="card-wrapper">
					{hotels.slice(0, 3).map((hotel) => (
						<Card key={hotel.id} data={hotel} discounted={true} />
					))}
				</div>
				</div>
			</section>

			<section className=" section section--steps">
				<div className="container">
					<h2 className="section__heading">3 Easy Step Booking Process</h2>
					<Steps />
				</div>
			</section>

			<section className="section section-reviews">
				<div className="container">
					<Reviews />
				</div>
			</section>

			<section className="section section--features">
				<Features />
			</section>
		</Layout>
	);
};

export default Homepage;
