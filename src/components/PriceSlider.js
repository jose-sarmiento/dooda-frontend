import React, { useState } from "react";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

const minPrice = 10000
const maxPrice = 50000
const PriceSlider = ({min, max, setMin, setMax}) => {

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
	);
};

export default PriceSlider;
