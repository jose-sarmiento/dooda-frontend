import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {populars} from "../mocks"

const Featured = () => {
	const [currIndex, setCurrIndex] = useState(0);
	const [paused, setPaused] = useState(false);

	useEffect(() => {
		if (currIndex > populars.length - 1) {
			setCurrIndex(0);
		}
	}, [currIndex]);

	useEffect(() => {
		if (paused) return;

		const interval = setInterval(() => {
			setCurrIndex(currIndex + 1);
		}, 5000);

		return () => {
			clearInterval(interval);
		};
	}, [currIndex, paused]);

	return (
		<div className="featured">
			<div className="featured__header">
				<h3 className="featured__heading">Recommended for you</h3>
				<Link to="/p/hotels" className="featured__link">See more</Link>
			</div>
			<div className="featured__wrapper">
				{populars.map((pop, idx) => {
					let position =
						"feat-card feat-card--next";
					if (idx === currIndex) {
						position =
							"feat-card feat-card--current";
					}
					if (
						idx === currIndex - 1 ||
						(currIndex === 0 &&
							idx === populars.length - 1)
					) {
						position =
							"feat-card feat-card--prev";
					}
					return (
						<div className={position} key={idx}>
							<figure className="feat-card__img-wrapper">
								<img src={pop.img} alt={pop.name} className="feat-card__img" />
							</figure>
							<p className="feat-card__place">{pop.type}</p>
							<p className="feat-card__name">{pop.name}</p>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Featured