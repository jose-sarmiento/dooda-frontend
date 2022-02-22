import React, { useState } from "react";
import { FaSearch, FaBook, FaUmbrellaBeach, FaLock } from "react-icons/fa";
import PriceSlider from "./PriceSlider";
import girl from "../assets/images/bianca.jpg";
import boy from "../assets/images/cliford.jpg";

const Banner = () => {
	const [min, setMin] = useState(15000);
	const [max, setMax] = useState(40000);

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
					<h4 className="statistics__heading">Why Dooda?</h4>
					<div className="statistics">
						<div className="stats">
							<span className="stats__icon">
								<i className="stats__logo fas fa-peso-sign"></i>
							</span>
							<h4 className="stats__text">Easy Payments</h4>
						</div>
						<div className="stats">
							<span className="stats__icon">
								<i className="stats__logo fas fa-heart"></i>
							</span>
							<h4 className="stats__text">Good Customer Service</h4>
						</div>
						<div className="stats">
							<span className="stats__icon">
								<i className="stats__logo fas fa-book"></i>
							</span>
							<h4 className="stats__text">flexibility</h4>
						</div>
						<div className="stats">
							<span className="stats__icon">
								<i className="stats__logo fa fa-lock"></i>
							</span>
							<h4 className="stats__text">Secure transactions</h4>
						</div>
					</div>
					<div className="ratings">
						<span className="ratings__text">
							Lucy, John and <span className="red">13,320</span> users recommended Dooda
						</span>
						<figure className="ratings__img-wrapper">
							<img
								src={girl}
								alt="lucy"
								className="ratings__user"
							/>
						</figure>
						<figure className="ratings__img-wrapper">
							<img
								src={boy}
								alt="lucy"
								className="ratings__user"
							/>
						</figure>
						<figure className="ratings__img-wrapper">
							<img
								src={girl}
								alt="lucy"
								className="ratings__user"
							/>
						</figure>
						<figure className="ratings__img-wrapper">
							<img
								src={boy}
								alt="lucy"
								className="ratings__user"
							/>
						</figure>
						<figure className="ratings__img-wrapper">
							<img src={girl} alt="lucy" className="ratings__user" />
						</figure>
					</div>
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

						<div className="search__price-filter">
							<h4 className="price__range">Price range:</h4>
							<PriceSlider
								min={min}
								max={max}
								setMin={setMin}
								setMax={setMax}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
