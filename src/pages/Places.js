import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, NavLink, Routes, Route } from "react-router-dom";
import { Card, PriceSlider, Loader, Hotels, Pools, Houses, Beaches, Farms, CustomLink } from "../components";
import { places } from "../mocks/links";

const Places = () => {
	const [min, setMin] = useState(15000);
	const [max, setMax] = useState(40000);

	return (
		<>
			<div className="section-header">
				<ul className="item-categories">
					{places.map((link, idx) => (
						<li className="item-categories__item" key={link.id}>
							<CustomLink
								to={link.url}
							>
								{link.text}
							</CustomLink>
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
				{/*<div className="filters">
					<h4 className="filters__heading">Filters:</h4>
					<select name="filter" id="filter" className="filters__select">
						<option value="nearest">Nearest</option>
						<option value="nearest">Price</option>
						<option value="nearest">Rating</option>
						<option value="nearest">Nearest</option>
					</select>
					<div className="filters__price">
						<PriceSlider
								min={min}
								max={max}
								setMin={setMin}
								setMax={setMax}
							/>
					</div>
				</div>*/}
			</div>

			<Routes>
				<Route path="hotels" element={<Hotels />} />
				<Route path="houses" element={<Houses />} />
				<Route path="pools" element={<Pools />} />
				<Route path="beach" element={<Beaches />} />
				<Route path="farms" element={<Farms />} />
			</Routes>

			{/*<section className="list-items-wrapper">
				<div className="card-wrapper">
					{results.map((data, idx) => {
						if(idx === results.length -1) {
							return <Card ref={lastElementRef} key={data.id} data={data} />
						}
						return <Card key={data.id} data={data} />
					})}
					{loading && <Loader/>}
				</div>
			</section>*/}
		</>
	);
};

export default Places;
