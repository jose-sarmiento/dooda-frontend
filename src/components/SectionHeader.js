import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CustomLink from "./CustomLink";
import Search from "./Search";
import { places } from "../mocks/links";

const SectionHeader = ({ toggle }) => {
	const [navWidth, setNavWidth] = useState(0);
	const [itemWidth, setItemWidth] = useState(0);

	const container = useRef();

	useEffect(() => {
		// const containerWidth = ulRef.current.getBoundingClientRect().width
		// const itemWidth = ulRef.current.querySelector(".item-categories__item").getBoundingClientRect().width

		// console.log(ulRef.current.getBoundingClientRect())
		// console.log(ulRef.current.clientWidth)
		console.log(container.current.clientWidth);
	}, [container]);

	return (
		<div className="section-header">
			<div className="section-header__container" ref={container}>
				<ul className="item-categories item-categories--web">
					{places.slice(0, 8).map((link, idx) => (
						<li className="item-categories__item" key={link.id}>
							<CustomLink to={link.url}>{link.text}</CustomLink>
						</li>
					))}
					<li className="item-categories__item item-categories__item--more">
						<span className="item-categories__link item-categories__link--more">
							more
							<i className="fa-solid fa-angle-down item-categories__icon"></i>
						</span>

						<ul className="sublinks">
							{places.slice(8).map((link, idx) => (
								<li className="sublinks__item">
									<CustomLink to={link.url}>
										{link.text}
									</CustomLink>
								</li>
							))}
						</ul>
					</li>
				</ul>

				<div className="item-categories--mobile">
					<div className="item-categories__arrow">
						<i className="fa-solid fa-chevron-right"></i>
					</div>
					<ul className="item-categories">
						{places.map((link, idx) => (
							<li className="item-categories__item" key={link.id}>
								<CustomLink to={link.url}>{link.text}</CustomLink>
							</li>
						))}
					</ul>
				</div>

				<div className="filters">
					<input 
						type="text" 
						className="filters__search" 
						placeholder="What are you looking for?"
					/>
					<button
						type="button"
						className="filters__filter-toggler"
						onClick={toggle}
					>
						Filters
					</button>
				</div>
			</div>
		</div>
	);
};

export default SectionHeader;
