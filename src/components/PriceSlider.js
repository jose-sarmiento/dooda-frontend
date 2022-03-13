import React from "react";
import { Range } from "rc-slider";
import "rc-slider/assets/index.css";

const minPrice = 10000;
const maxPrice = 50000;
const PriceSlider = ({ min, max, setMin, setMax }) => {
	const marks = {
		10000: {
			style: {
				color: "#000",
			},
			label: "10,000",
		},
		30000: {
			style: {
				color: "#000",
			},
			label: "30,000",
		},
		50000: {
			style: {
				color: "#000",
			},
			label: "50,000",
		},
	};

	return (
		<div className="price">
			
			<div className="price__min-max">
				<div className="price__group">
					<span className="price__label">Min:</span>
					<input
						type="number"
						name="min"
						id="min"
						value={min}
						onChange={(e) => {
							setMin(e.target.value);
						}}
						className="price__input price__input--min"
					/>
				</div>
				<div className="price__group">
					<span className="price__label">Max:</span>
					<input
						type="number"
						name="min"
						id="min"
						value={max}
						onChange={(e) => {
							setMax(e.target.value);
						}}
						className="price__input price__input--min"
					/>
				</div>
			</div>
			<div className="slider">
				<Range
					min={minPrice}
					max={maxPrice}
					defaultValue={[min, max]}
					step={5000}
					dots={true}
					cross={false}
					marks={marks}
				/>
			</div>
		</div>
	);
};

export default PriceSlider;
