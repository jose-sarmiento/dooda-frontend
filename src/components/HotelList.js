import React, { useState, useEffect, useRef, useCallback } from "react";
import {Outlet, NavLink} from "react-router-dom"
import { Card, Loader, CardSkeletonLoading, SectionHeader } from "../components";
import usePaginateFetch from "../hooks/usePaginateFetch";
import { places } from "../mocks/links";

const HotelList = () => {
	const [page, setPage] = useState(1);
	const { results, loading, error, hasNext } = usePaginateFetch("hotel", page, 9);
	const observer = useRef();
	const lastElementRef = useCallback(
		(node) => {
			if (loading) return;
			if (observer.current) observer.current.disconnect();

			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && hasNext) {
					setPage((prevPage) => prevPage + 1);
				}
			});
			if (node) observer.current.observe(node);
		},
		[loading, hasNext]
	);
	return (
		<>
		<div className="section-header">
				<ul className="item-categories">
					{places.map((link, idx) => (
						<li className="item-categories__item" key={link.id}>
							<NavLink
								to={link.url}
								className={({ isActive }) =>
									isActive
										? "item-categories__link item-categories__link--active"
										: "item-categories__link"
								}
							>
								{link.text}
							</NavLink>
						</li>
					))}
				</ul>

				<div className="filters">
					<select name="filter" id="filter" className="filters__select">
						<option value="nearest">Nearest</option>
						<option value="price">Price</option>
						<option value="rating">Rating</option>
						<option value="nearest">Nearest</option>
					</select>
					<button className="filters__price-toggler">Filters</button>
				</div>
			</div>
		<section className="list-items-wrapper">
			<div className="card-wrapper">
				{results.map((data, idx) => {
					if (idx === results.length - 1) {
						return <Card ref={lastElementRef} key={data.id} data={data} />;
					}
					return <Card key={data.id} data={data} />;
				})}
				{loading && <CardSkeletonLoading/>}
			</div>
		</section>	
		</>
	)
}

export default HotelList