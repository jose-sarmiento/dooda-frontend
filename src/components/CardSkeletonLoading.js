import React from "react";

const CardSkeletonLoading = () => {
	return (
		<>
			{[...Array(8).keys()].map((x, idx) => (
				<div className="card card--noshadow" key={idx}>
					<figure className="card__img-wrapper skeleton"></figure>
					<div className="card__header card__header--skeleton">
						<span className="card__price skeleton skeleton--text card__price--skeleton"></span>
						<span className="card__stars skeleton skeleton--text card__stars--skeleton"></span>
					</div>
					<div className="card__body">
						<div className="card__body-container">
							<span className="card__name skeleton skeleton--text"></span>
							<span className="card__name skeleton skeleton--text"></span>
							<span className="card__location card__location--skeleton">
								<span className="skeleton skeleton--text"></span>
								<span className="skeleton skeleton--text"></span>
							</span>
						</div>
						<button className="btn btn--small skeleton card__btn--skeleton"></button>
					</div>
				</div>
			))}
		</>
	);
};

export default CardSkeletonLoading;
