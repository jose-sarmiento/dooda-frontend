import React from "react";
import hotels from "../mocks/hotels";

import {Banner, Card, Reviews, Steps, Features} from "../components";

const Homepage = () => {
	return (
		<>
			<Banner />

			<section className="section section--steps">
				<h2 className="section__heading">
					3 Easy Step Booking Process
			</h2>
				<Steps />
			</section>

			<section className="section">
				<h2 className="section__heading">Popular Hotels and Resorts</h2>

				<div className="card-wrapper">
					{hotels.slice(0, 3).map((hotel) => (
						<Card key={hotel.id} data={hotel} />
					))}
				</div>
			</section>

			<section className="section section-reviews">
				<Reviews />
			</section>

			<section className="section section--features">
				<Features />
			</section>
		</>
	);
};

export default Homepage;
