import React, { useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { gsap } from "gsap";
import {Link} from "react-router-dom"
import hotels from "../mocks/hotels";
import Layout from "./Layout";
import { Card, Reviews, Steps, Features, Hero, Previews, HostOffer } from "../components";
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
			.to(q(".hero__content"), {
				y: 10,
				duration: 1,
			})
			.fromTo(q(".hero__search"), {
				opacity: 0,
				x: -50
			}, {
				duration: 1,
				opacity: 1,
				x: 0
			}, "-=1")
			.fromTo(q(".float__item"), {
				y: 20,
				opacity: 0,
			},{
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

			<section className="features">
				<Features />
			</section>

			<section className="hostoffer">
				<HostOffer />
			</section>

			<section className="section section-reviews">
				<div className="container">
					<Reviews />
				</div>
			</section>
		</Layout>
	);
};

export default Homepage;
