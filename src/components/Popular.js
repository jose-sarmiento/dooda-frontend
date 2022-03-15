import React from 'react'
import {Link} from "react-router-dom"
import {populars} from "../mocks"

const Popular = () => {
	
	return (
		<div className="popular-section">
			<div className="grid-12">
				<div className="popular-section__header">
					<div>
					    <p className="popular-section__subheading">Don't have idea where to go?</p>
						<h2 className="popular-section__heading">Inspiration for your <span className="itallic">Next Trip</span></h2>
					</div>

					<Link to="/p/hotels" className="arrow-link">
						<span className="arrow-link__text">See all <i className="fa-solid fa-arrow-right-long ml-1"></i></span>
					</Link>
				</div>
				<div className="popular-section__populars">
					{populars.map((pop, idx) => (
						<div className="_card" key={idx}>
							<figure className="_card__img-wrapper">
								<img src={pop.img} alt={pop.name} className="_card__img" />
							</figure>
							<p className="_card__place">{pop.type}</p>
							<p className="_card__name">{pop.name}</p>
							<Link to="/p/hotels/217w82178" className="_card__cta">see details</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Popular