import React, { useRef, useEffect } from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
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
	const bookSearchRef = useRef();

	const q = gsap.utils.selector(bannerRef);
	const tl = useRef();

	useEffect(() => {
		tl.current = gsap
			.timeline()
			.to(q(".overlay"), {
				transform: "scale(0)",
				opacity: 0,
				duration: .5
			})
			.delay(1.2)
			.to(q(".hero__image"), {
				y: 0,
				opacity: 1,
				duration: .6
			}, "-=.4")
			.to(q(".stagger"), {
				x: 0,
				opacity: 1,
				duration: .5,
				stagger: 0.3,
			})
	}, [bannerRef, q]);

	useEffect(() => {
		let observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) headerRef.current.classList.add("header--dark");
			else headerRef.current.classList.remove("header--dark");
		}, {});

		observer.observe(bannerRef.current.querySelector(".hero__heading-1"));
	}, [headingRef, headerRef]);

	useEffect(() => {
		let observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				bookSearchRef.current.style.transform = "translateY(-50%)"
			} else {
				bookSearchRef.current.style.transform = "translateY(0)"
			}
		}, {
			threshold: 1
		});

		observer.observe(bookSearchRef.current);
	}, [bookSearchRef]);

	const handleMouseOver = () => {
		if (isSubmenuOpen) closeSubmenu();
	};

	return (
		<Layout ref={headerRef}>

			<Hero ref={bannerRef} />

			<div className="book-search" ref={bookSearchRef}>
				<div className="book-search__item">
					<FaMapMarkerAlt className="book-search__icon" />

					<div className="book-search__form">
						<div className="book-search__select">Location <span className="book-search__angle"><i className="fa-solid fa-angle-down"></i></span></div>
						<span className="book-search__value">Virac, Catanduanes</span>
					</div>
				</div>
				<div className="book-search__item">
					<FaMapMarkerAlt className="book-search__icon" />

					<div className="book-search__form">
						<div className="book-search__select">Places <span className="book-search__angle"><i className="fa-solid fa-angle-down"></i></span></div>
						<span className="book-search__value">Beach Resort</span>
					</div>
				</div>
				<div className="book-search__item">
					<FaMapMarkerAlt className="book-search__icon" />

					<div className="book-search__form">
						<div className="book-search__select">Date <span className="book-search__angle"><i className="fa-solid fa-angle-down"></i></span></div>
						<span className="book-search__value">Feb 14, 2022</span>
					</div>
				</div>
				<div className="book-search__item">
					<button><FiSearch/></button>
				</div>
			</div>

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
