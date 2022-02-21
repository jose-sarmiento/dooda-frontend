import React, {useState} from "react";
import { FaSearch, FaBook, FaUmbrellaBeach, FaHotel } from "react-icons/fa";
import PriceSlider from "./PriceSlider";
import girl from "../assets/images/bianca.jpg";
import boy from "../assets/images/cliford.jpg";

const Banner = () => {
	const [min, setMin] = useState(15000)
	const [max, setMax] = useState(40000)

	return (
		<div className="banner">
			<div className="banner__content">
				<h2 className="banner__heading">Dooda</h2>
				<h1 className="banner__subheading">
					Book for Resorts & Hotels Online{" "}
				</h1>

				<p className="banner__description">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Quidem in nisi, veritatis ab ex, aperiam! Explicabo, a?
					Reprehenderit ex vero
				</p>

				<button className="btn btn--primary banner__cta">
					Book now
				</button>
			</div>

			<div className="banner__float">
				<div className="banner__float-left">
					{/*	<div className="statistics">
						<div className="stats">
							<i className="stats__logo fas fa-book"></i>
							<h2 className="stats__number">1,290</h2>
							<h4 className="stats__text">Bookings per week</h4>
						</div>
						<div className="stats">
							<i className="stats__logo fas fa-umbrella-beach"></i>
							<h2 className="stats__number">15,467</h2>
							<h4 className="stats__text">Available Resorts</h4>
						</div>
						<div className="stats">
							<i className="stats__logo fas fa-hotel"></i>
							<h2 className="stats__number">10,034</h2>
							<h4 className="stats__text">Available Hotels</h4>
						</div>
					</div>*/}
				</div>

				<div className="banner__float-rights">
					<form action="#" className="search">
						<input
							type="text"
							className="search__input"
							id="search"
							placeholder="Search for hotel & resort name or location"
						/>
						<label htmlFor="search" className="search__label">
							<FaSearch />
						</label>
					</form>
					{/*	<small className="search__note">
						Note: Use filters below to narrow result
					</small>*/}

					<div className="search-filter">
						<div className="categories">
							<h4 className="categories__type">Type:</h4>
							<div className="categories__category">
								<input
									type="radio"
									name="category"
									id="all"
									className="categories__input"
								/>
								<label
									htmlFor="all"
									className="categories__label"
								>
									<div className="categories__circle"></div>
									Both
								</label>
							</div>
							<div className="categories__category">
								<input
									type="radio"
									name="category"
									id="resort"
									className="categories__input"
								/>
								<label
									htmlFor="resort"
									className="categories__label"
								>
									<div className="categories__circle"></div>
									Resort
								</label>
							</div>
							<div className="categories__category">
								<input
									type="radio"
									name="category"
									id="hotel"
									className="categories__input"
								/>
								<label
									htmlFor="hotel"
									className="categories__label"
								>
									<div className="categories__circle"></div>
									Hotel
								</label>
							</div>
						</div>
						<div className="price">
							<h4 className="price__range">Price range:</h4>
							<div className="price__min-max">
								<div className="price__group">
									<span className="price__label">Min:</span>
									<input
										type="number"
										name="min"
										id="min"
										value={min}
										onChange={(e) => {
											setMin(e.target.value)
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
											setMax(e.target.value)
										}}
										className="price__input price__input--min"
									/>
								</div>
							</div>
							<PriceSlider 
								min={min} 
								max={max} 
								setMin={setMin}
								setMax={setMax}
							/>
						</div>
					</div>

					{/*	<div className="reviews">
						<div className="reviews__left">
							
						</div>
						<div className="reviews__right">
							
						</div>
					</div>*/}
				</div>
			</div>
		</div>
	);
};

export default Banner;
