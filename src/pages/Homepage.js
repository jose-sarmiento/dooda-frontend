import React, { useRef, useEffect } from "react";

import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

import { gsap } from "gsap";
import Layout from "./Layout";
import { Reviews, Features, Hero, Previews, HostOffer, BookingSearch, Popular } from "../components";
import useAppContext from "../hooks/useAppContext";

const Homepage = () => {
	const { closeSubmenu, isSubmenuOpen } = useAppContext();

	const bannerRef = useRef();
	const headingRef = useRef();
	const headerRef = useRef();
	

	const q = gsap.utils.selector(bannerRef);
	const tl = useRef();

	useEffect(() => {
		tl.current = gsap
			.timeline({defaults: {ease: "power4.inOut", duration: 2}})
			.to(
				q(".hero__image"),
				{
					'clip-path': "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
					y: 0,
					opacity: 1,
					duration: 2.2,
					delay: .2,
					ease: "power4.inOut"
				})
			.to(q(".stagger"), {
				y: 0,
				'clip-path': "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
				opacity: 1,
				duration: 1.2,
				stagger: 0.5,
			}, "-=1");
	}, [bannerRef, q]);

	useEffect(() => {
		let observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting)
				headerRef.current.classList.add("header--dark");
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

			<BookingSearch />

			<Popular />

			<section className="features">
				<Features />
			</section>

			<section className="hostoffer">
				<HostOffer />
			</section>
		</Layout>
	);
};

export default Homepage;
