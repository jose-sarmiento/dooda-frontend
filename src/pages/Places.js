import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Card, PriceSlider } from "../components";

import hotels from "../mocks/hotels";
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
							<Link
								to={link.url}
								className={idx === 0 ? "item-categories__link item-categories__link--active" : "item-categories__link"}
				 			>
								{link.text}
							</Link>
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

			<section className="list-items-wrapper">
				<div className="card-wrapper">
					{hotels.map((hotel) => (
						<Card key={hotel.id} data={hotel} />
					))}
				</div>
			</section>
		</>
	);
};

export default Places;
