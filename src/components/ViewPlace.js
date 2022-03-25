import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Stars from "./Stars";

import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";
import img5 from "../assets/images/5.jpg";
import men from "../assets/images/men.jpg";
import woman from "../assets/images/woman.jpg";

import { pesoFormat } from "../utils/pesoFormat";
import useAppContext from "../hooks/useAppContext";

const ViewPlace = () => {
	const { openModal, notify } = useAppContext();
	const [currIndex, setCurrIndex] = useState(0);
	const [paused, setPaused] = useState(false);

	const images = [img1, img2, img3, img4, img5]
	const navigate = useNavigate();

	useEffect(() => {
		if (currIndex > images.length - 1) {
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

	const handleModalOpen = () => openModal();

	return (
		<div className="sub-page">
			<div className="hotel">
				<div className="hotel__top">
					<button onClick={() => navigate(-1)} className="btn btn--back">
						Go Back
					</button>
				</div>
				<div className="hotel-header">
					<div className="d-flex flex-between mb-1">
						<Stars count={5} />
					</div>
					<div className="d-flex flex-between">
						<div className="hotel-header__left">
							<h1 className="hotel__name">
								Catanduanes Midtown Inn
							</h1>
							<p className="hotel__price">
								{pesoFormat(1200)} per night
							</p>
							<p className="hotel__location">
								5k killometers away
							</p>
						</div>
						<div className="hotel-header__right">
							<button
								onClick={() => notify("Added to wishlist")} 
								className="hotel-header__btn hotel-header__btn--addtoBtn">
								Add to Wishlist
							</button>
							<button
								className="hotel-header__btn hotel-header__btn--book-now"
								onClick={handleModalOpen}
							>
								Book now
							</button>
						</div>
					</div>
				</div>

				<div className="hotel__images hotel__images--web">
					{images.map((img, idx) =>(
						<figure key={idx} className={`hotel__img-wrapper hotel__img-wrapper--${idx + 1}`}>
							<img
								src={img}
								alt="first image"
								className="hotel__image"
							/>
						</figure>
					))}
				</div>

				<div className="hotel__images hotel__images--mobile">
					{images.map((img, idx) => {
						let position =
								"hotel__img-wrapper hotel__img-wrapper--next";
							if (idx === currIndex) {
								position =
									"hotel__img-wrapper hotel__img-wrapper--current";
							}
							if (
								idx === currIndex - 1 ||
								(currIndex === 0 &&
									idx === images.length - 1)
							) {
								position =
									"hotel__img-wrapper hotel__img-wrapper--prev";
							}

						return (
							<figure key={idx} className={position}>
								<img
									src={img}
									alt="first image"
									className="hotel__image"
								/>
							</figure>
						)
					})}
				</div>



				<div className="hotel__details">
					<div className="hotel__description">
						<h3 className="hotel__description-heading">
							Description
						</h3>
						<p className="hotel__paragraph">
							Lorem, ipsum dolor, sit amet consectetur adipisicing
							elit. Id tempore error quod, rem saepe aspernatur
							excepturi aperiam sequi beatae nesciunt delectus
							quasi? Quos enim culpa consequuntur, cupiditate
							laudantium necessitatibus fugiat, odit adipisci
							nulla iste excepturi magni veniam officiis
							aspernatur facere!
						</p>
						<p className="hotel__paragraph">
							In doloribus, pariatur, harum vero voluptates,
							dolorem placeat iste totam officia earum eius, alias
							nemo accusamus modi et obcaecati magnam ratione esse
							veritatis. Laborum iusto, amet. Amet esse quod,
							quae, ad suscipit dolorum illum quos nisi
							consequuntur delectus, ut deserunt saepe, dolorem
							obcaecati porro eius accusamus hic laudantium
							dolores placeat sunt aliquid. Officiis, optio,
							inventore. Aliquid iure vero ea suscipit, dolore
							voluptates dolorem odio officiis minus animi,
							perferendis deserunt porro assumenda nisi!
						</p>

						<h4 className="hotel__description-heading-2">
							Amenities
						</h4>
						<div className="hotel__offers">
							<span className="hotel__offer">
								wifi connection
							</span>
							<span className="hotel__offer">2 bedrooms</span>
							<span className="hotel__offer">near airport</span>
							<span className="hotel__offer">
								wifi connection
							</span>
							<span className="hotel__offer">2 bedrooms</span>
							<span className="hotel__offer">near airport</span>
							<span className="hotel__offer">
								wifi connection
							</span>
							<span className="hotel__offer">2 bedrooms</span>
							<span className="hotel__offer">near airport</span>
							<span className="hotel__offer">
								wifi connection
							</span>
							<span className="hotel__offer">2 bedrooms</span>
							<span className="hotel__offer">near airport</span>
						</div>

						<h4 className="hotel__description-heading-2">
							Facilities
						</h4>
						<div className="hotel__offers">
							<span className="hotel__offer">
								wifi connection
							</span>
							<span className="hotel__offer">2 bedrooms</span>
							<span className="hotel__offer">near airport</span>
							<span className="hotel__offer">
								wifi connection
							</span>
							<span className="hotel__offer">2 bedrooms</span>
							<span className="hotel__offer">near airport</span>
							<span className="hotel__offer">
								wifi connection
							</span>
							<span className="hotel__offer">2 bedrooms</span>
							<span className="hotel__offer">near airport</span>
							<span className="hotel__offer">
								wifi connection
							</span>
							<span className="hotel__offer">2 bedrooms</span>
							<span className="hotel__offer">near airport</span>
						</div>
					</div>
					<div className="hotel__reviews-wrapper">
						<div className="hotel-review">
							<svg
								viewBox="0 0 20 20"
								className="hotel-review__quote"
							>
								<use xlinkHref="/iconsprites.svg#icon-quotes-left" />
							</svg>
							<div className="hotel-review__text-wrapper">
								<p className="hotel-review__text">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Aspernatur sed fuga amet
									cum ab. Nostrum molestias unde repudiandae
									molestiae, omnis.
								</p>
							</div>
							<div className="hotel-review__footer">
								<figure className="hotel-review__user">
									<img
										src={img5}
										alt="user"
										className="hotel-review__img"
									/>
								</figure>
								<div className="hotel-review__middle">
									<h4 className="hotel-review__name">
										John Smith
									</h4>
									<span className="hotel-review__date">
										February 14, 2021
									</span>
								</div>
								<h4 className="hotel-review__rating">5.0</h4>
							</div>
						</div>

						<div className="hotel-review">
							<svg
								viewBox="0 0 20 20"
								className="hotel-review__quote"
							>
								<use xlinkHref="/iconsprites.svg#icon-quotes-left" />
							</svg>
							<div className="hotel-review__text-wrapper">
								<p className="hotel-review__text">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Aspernatur sed fuga amet
									cum ab. Nostrum molestias unde repudiandae
									molestiae, omnis.
								</p>
							</div>
							<div className="hotel-review__footer">
								<figure className="hotel-review__user">
									<img
										src={img5}
										alt="user"
										className="hotel-review__img"
									/>
								</figure>
								<div className="hotel-review__middle">
									<h4 className="hotel-review__name">
										John Smith
									</h4>
									<span className="hotel-review__date">
										February 14, 2021
									</span>
								</div>
								<h4 className="hotel-review__rating">5.0</h4>
							</div>
						</div>

						<div className="hotel-review">
							<svg
								viewBox="0 0 20 20"
								className="hotel-review__quote"
							>
								<use xlinkHref="/iconsprites.svg#icon-quotes-left" />
							</svg>
							<div className="hotel-review__text-wrapper">
								<p className="hotel-review__text">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Aspernatur sed fuga amet
									cum ab. Nostrum molestias unde repudiandae
									molestiae, omnis.
								</p>
							</div>
							<div className="hotel-review__footer">
								<figure className="hotel-review__user">
									<img
										src={img5}
										alt="user"
										className="hotel-review__img"
									/>
								</figure>
								<div className="hotel-review__middle">
									<h4 className="hotel-review__name">
										John Smith
									</h4>
									<span className="hotel-review__date">
										February 14, 2021
									</span>
								</div>
								<h4 className="hotel-review__rating">5.0</h4>
							</div>
						</div>


						<button className="hotel-review__see-all">
							See all <i class="fa-solid fa-arrow-right-long"></i>
						</button>

						
					</div>
				</div>

				<div className="recommended">
					<p>Recommended by John, Mike, Sophia, Mark and 1200 others</p>
					<div>
						<figure><img src={men} alt="user1" /></figure>
						<figure><img src={woman} alt="user1" /></figure>
						<figure><img src={men} alt="user1" /></figure>
						<figure><img src={woman} alt="user1" /></figure>
						<figure><img src={woman} alt="user1" /></figure>
					</div>
				</div>

				<div className="hotel__map-wrapper"></div>

				{/*<section className="hotel__review-section">
					<div className="hotel__reviews">
						<div className="hotel__active-review">
							<Review small={true} />
						</div>
						<div className="hotel-review">
							<svg viewBox="0 0 20 20" className="hotel-review__quote">
						        <use xlinkHref="/iconsprites.svg#icon-quotes-left" />
						      </svg>
							<div className="hotel-review__text-wrapper">
								<p className="hotel-review__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sed fuga amet cum ab. Nostrum molestias unde repudiandae molestiae, omnis.</p>
							</div>
							<div className="hotel-review__footer">
								<figure className="hotel-review__user">
									<img src={img5} alt="user" className="hotel-review__img" />
								</figure>
								<div className="hotel-review__middle">
									<h4 className="hotel-review__name">John Smith</h4>
									<span className="hotel-review__date">February 14, 2021</span>
								</div>
								<h4 className="hotel-review__rating">5.0</h4>
							</div>
						</div>
						<div className="hotel-review">
							<svg viewBox="0 0 20 20" className="hotel-review__quote">
						        <use xlinkHref="/iconsprites.svg#icon-quotes-left" />
						      </svg>
							<div className="hotel-review__text-wrapper">
								<p className="hotel-review__text">Aspernatur sed fuga amet cum ab. Nostrum molestias unde repudiandae molestiae, omnis.</p>
							</div>
							<div className="hotel-review__footer">
								<figure className="hotel-review__user">
									<img src={img5} alt="user" className="hotel-review__img" />
								</figure>
								<div className="hotel-review__middle">
									<h4 className="hotel-review__name">Brad Traversy</h4>
									<span className="hotel-review__date">February 24, 2021</span>
								</div>
								<h4 className="hotel-review__rating">4.9</h4>
							</div>
						</div>
					</div>
				</section>*/}
			</div>
		</div>
	);
};

export default ViewPlace;
