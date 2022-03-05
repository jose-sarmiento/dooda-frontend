import React, { useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { gsap } from "gsap";
import {Link} from "react-router-dom"
import hotels from "../mocks/hotels";
import Layout from "./Layout";
import { Card, Reviews, Steps, Features, Hero } from "../components";
import useAppContext from "../hooks/useAppContext";

import manmountain from "../assets/images/contrasted.jpg";
import manswimming from "../assets/images/contrasted2.jpg";
import outdoor from "../assets/images/cliford.jpg";
import room from "../assets/images/4.jpg";

import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/lens.jpg";
import img5 from "../assets/images/img3-small.jpg";

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

		// observer.observe(headingRef.current);
	}, [headingRef, headerRef]);

	const handleMouseOver = () => {
		if (isSubmenuOpen) closeSubmenu();
	};

	return (
		<Layout ref={headerRef}>

			<Hero />

			<div className="previews">
				<div className="previews__container">
					<div className="previews__header">
						<h2 className="previews__heading">Most Bookings This Month</h2>
					</div>

					<div className="preview preview--active">
						<div className="preview__images">
							<div className="preview__image-wrap preview__image-wrap--current">
								<img src={img5} alt="shh" className="preview__image" />
							</div>
							<div className="preview__image-wrap preview__image-wrap--prev">
								<img src={img2} alt="shh" className="preview__image" />
							</div>
							<div className="preview__image-wrap preview__image-wrap--next">
								<img src={img3} alt="shh" className="preview__image" />
							</div>
						</div>

						<div className="preview__prev-btn preview__action">
							<i className="fa-solid fa-angle-left"></i>
						</div>
						<div className="preview__next-btn preview__action">
							<i className="fa-solid fa-angle-right"></i>
						</div>

						<div className="preview__footer">
							<div className="preview__footer-left">
								<p className="preview__name">Virac Hotel and Resort</p>
								<p className="preview__location">Virac Catandanes</p>
							</div>
							<button className="preview__cta">View</button>
						</div>
					</div>
					
					<div className="preview-single">
						<div className="preview-single__image-wrap">
							<img src={img1} alt="shh" className="preview-single__image" />
						</div>

						<div className="preview-single__footer preview-single__footer--cream">
							<p className="preview-single__name">Ocean View Hotel</p>
							<p className="preview-single__location">Conception Virac Catandanes</p>
						</div>
					</div>

					<div className="preview-single">
						<div className="preview-single__image-wrap">
							<img src={img4} alt="shh" className="preview-single__image" />
						</div>

						<div className="preview-single__footer">
							<p className="preview-single__name">Island Hopping</p>
							<p className="preview-single__location">Palawan</p>
						</div>
					</div>
				</div>
			</div>

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
