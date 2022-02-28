import React from 'react'
import CustomLink from "./CustomLink"
import { places } from "../mocks/links";

const SectionHeader = () => {
	// const [min, setMin] = useState(15000);
	// const [max, setMax] = useState(40000);
	return (
		<div className="section-header container">
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
	)
}

export default SectionHeader