import React, { useState, useRef, useEffect } from "react";
import { FaSearch, FaBook, FaUmbrellaBeach, FaLock, FaChevronDown } from "react-icons/fa";
import PriceSlider from "./PriceSlider";
import girl from "../assets/images/bianca.jpg";
import boy from "../assets/images/cliford.jpg";

const Banner = () => {
	const [min, setMin] = useState(15000);
	const [max, setMax] = useState(40000);
	const [category, setCategory] = useState("all");
	const [isOpenOptions, setIsOpenOptions] = useState(false);

	const customSelectRef = useRef();

	useEffect(() => {
		customSelectRef.current.tabIndex = 0;
		customSelectRef.current.addEventListener("click", handleCustomSelectClick);
		customSelectRef.current.addEventListener("blur", () => setIsOpenOptions(false));
	}, []);

	useEffect(() => {
		if (isOpenOptions) customSelectRef.current.classList.toggle("focus");
		else customSelectRef.current.classList.remove("focus");
	}, [isOpenOptions]);

	const handleCustomSelectClick = (e) => setIsOpenOptions((prev) => !prev);

	const handleOptionSelect = (e) => setCategory(e.target.getAttribute("data-value"));

	return (
		<div className="banner">
			<div className="banner__content">
				<h2 className="banner__heading">Dooda</h2>
				<h1 className="banner__subheading">Book for Resorts & Hotels Online </h1>

				<p className="banner__description">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem in nisi,
					veritatis ab ex, aperiam! Explicabo, a? Reprehenderit ex vero
				</p>

				<button className="btn btn--primary banner__cta">Book now</button>
			</div>

			<div className="banner__float">
				<div className="banner__float-left">
					<h4 className="statistics__heading">Why Dooda?</h4>
					<div className="statistics">
						<div className="stats">
							<span className="stats__icon">
								<i className="stats__logo fas fa-peso-sign"></i>
							</span>
							<span className="stats__text">Easy Payments</span>
						</div>
						<div className="stats">
							<span className="stats__icon">
								<i className="stats__logo fas fa-heart"></i>
							</span>
							<span className="stats__text">Customer Service</span>
						</div>
						<div className="stats">
							<span className="stats__icon">
								<i className="stats__logo fas fa-chart-line"></i>
							</span>
							<span className="stats__text">In demand</span>
						</div>
						<div className="stats">
							<span className="stats__icon">
								<i className="stats__logo fa fa-lock"></i>
							</span>
							<span className="stats__text">Secure</span>
						</div>
					</div>
					<div className="ratings">
						<span className="ratings__text">
							Lucy, John and <span className="red">13,320</span> users recommended
							Dooda
						</span>
						<figure className="ratings__img-wrapper">
							<img src={girl} alt="lucy" className="ratings__user" />
						</figure>
						<figure className="ratings__img-wrapper">
							<img src={boy} alt="lucy" className="ratings__user" />
						</figure>
						<figure className="ratings__img-wrapper">
							<img src={girl} alt="lucy" className="ratings__user" />
						</figure>
						<figure className="ratings__img-wrapper">
							<img src={boy} alt="lucy" className="ratings__user" />
						</figure>
						<figure className="ratings__img-wrapper">
							<img src={girl} alt="lucy" className="ratings__user" />
						</figure>
					</div>
				</div>

				<div className="banner__float-rights">
					<form action="#" className="search" spellCheck={false}>
						<input
							type="text"
							className="search__input"
							id="search"
							placeholder="Start searching"
						/>
						<label htmlFor="search" className="search__label">
							<FaSearch />
						</label>
						<div className="custom-select" ref={customSelectRef}>
							<span className="custom-select__value">{category}</span>
							<FaChevronDown className="custom-select__arrow" />
							<div className="custom-select__options">
								<div
									className={
										category === "all"
											? "custom-select__option custom-select__option--selected"
											: "custom-select__option"
									}
									data-value="all"
									onClick={handleOptionSelect}
								>
									All
								</div>
								<div
									className={
										category === "places"
											? "custom-select__option custom-select__option--selected"
											: "custom-select__option"
									}
									data-value="places"
									onClick={handleOptionSelect}
								>
									Places
								</div>
								<div
									className={
										category === "experiences"
											? "custom-select__option custom-select__option--selected"
											: "custom-select__option"
									}
									data-value="experiences"
									onClick={handleOptionSelect}
								>
									Experiences
								</div>
							</div>
						</div>
					</form>
					{/*	<small className="search__note">
						Note: Use filters below to narrow result
					</small>*/}

					<div className="search-filter">
						{/*<form className="categories">
							<h4 className="categories__type">Type:</h4>
							<div className="categories__category">
								<input
									type="radio"
									name="category"
									className="categories__input"
									id="all"
									value="all"
									checked={"all" === category}
									onChange={handleCategoryChange}
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
									value="resort"
									checked={"resort" === category}
									onChange={handleCategoryChange}
								/>
								<label
									htmlFor="resort"
									name="category"
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
									value="hotel"
									checked={"hotel" === category}
									onChange={handleCategoryChange}
								/>
								<label
									htmlFor="hotel"
									className="categories__label"
								>
									<div className="categories__circle"></div>
									Hotel
								</label>
							</div>
						</form>
*/}
						<div className="search__price-filter">
							<h4 className="price__range">Price range:</h4>
							<PriceSlider min={min} max={max} setMin={setMin} setMax={setMax} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
