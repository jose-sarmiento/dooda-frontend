import React, { useState, useRef, useEffect } from "react";
import { FaFacebook, FaSearch } from "react-icons/fa";
import { gsap } from "gsap";
import hotels from "../mocks/hotels";
import Layout from "./Layout";
import { Banner, Card, Reviews, Steps, Features, SearchForm } from "../components";
import useAppContext from "../hooks/useAppContext";

import manmountain from "../assets/images/contrasted.jpg";
import manswimming from "../assets/images/contrasted2.jpg";
import logo from "../assets/images/logo.png";

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
	}, [bannerRef]);

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
						<button className="fh-banner__cta stagger">Browse Now</button>

						<form className="fh-banner__search">
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

					<div className="fh-banner__footer">
						<FaFacebook className="fh-banner__social" />
						<FaFacebook className="fh-banner__social" />
						<FaFacebook className="fh-banner__social" />
					</div>
				</div>
			</section>

			<section className=" section section--steps">
				<h2 className="section__heading">3 Easy Step Booking Process</h2>
				<Steps />
			</section>

			<section className="section section-reviews">
				<Reviews />
			</section>

			<section className="section ">
				<h2 className="section__heading">Popular Hotels and Resorts</h2>

				<div className="card-wrapper">
					{hotels.slice(0, 3).map((hotel) => (
						<Card key={hotel.id} data={hotel} />
					))}
				</div>
			</section>

			<section className="section section--features ">
				<Features />
			</section>
		</Layout>
	);
};

export default Homepage;
