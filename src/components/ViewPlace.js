import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaMapMarkerAlt, FaHeart } from "react-icons/fa";
import Stars from "./Stars";
import MyMap from "./MyMap";
import Review from "./Review";
import Modal from "./Modal";

import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";
import img5 from "../assets/images/5.jpg";

import { pesoFormat } from "../utils/pesoFormat";

const ViewPlace = () => {
	const { id } = useParams();
	const [isOpenModal, setIsOpenModal] = useState(false);

	const handleModalOpen = () => {
		setIsOpenModal(true);
		// toggleModalClass()
	};

	const closeModal = () => {
		setIsOpenModal(false);
		// toggleModalClass()
	};

	const toggleModalClass = () => document.body.classList.toggle("modal-isOpen");

	return (
		<>
			<Modal isOpenModal={isOpenModal} close={closeModal} />
			<div className="hotel">
				<Link to="/p/hotels" className="btn btn--back">
					Go Back
				</Link>
				<div className="hotel-header">
					<div className="d-flex flex-between">
						<Stars count={5} />
						<div className="hotel__favorite">
							<FaHeart className="hotel__favorite-icon" />
						</div>
					</div>
					<div className="d-flex flex-between">
						<div className="hotel-header__left">
							<h1 className="hotel__name">Some random Hotel name</h1>
							<h5 className="hotel__location">
								<span className="hotel__location-icon">
									<FaMapMarkerAlt />
								</span>
								5k killometers away
							</h5>
						</div>
						<div className="hotel-header__right">
							<button
								className="btn btn--primary btn--small hotel-header__book-now"
								onClick={handleModalOpen}
							>
								Book now
							</button>
							<h4 className="hotel__price">{pesoFormat(1500)} per night</h4>
						</div>
					</div>
				</div>

				<div className="hotel__images">
					<figure className="hotel__img-wrapper hotel__img-wrapper--1">
						<img src={img1} alt="first image" className="hotel__image" />
					</figure>
					<figure className="hotel__img-wrapper hotel__img-wrapper--2">
						<img src={img2} alt="second image" className="hotel__image" />
					</figure>
					<figure className="hotel__img-wrapper hotel__img-wrapper--3">
						<img src={img3} alt="third image" className="hotel__image" />
					</figure>
					<figure className="hotel__img-wrapper hotel__img-wrapper--4">
						<img src={img4} alt="fourth image" className="hotel__image" />
					</figure>
					<figure className="hotel__img-wrapper hotel__img-wrapper--5">
						<img src={img5} alt="fifth image" className="hotel__image" />
					</figure>
				</div>

				<div className="hotel__details">
					<div className="hotel__description">
						<h3 className="hotel__description-heading">Description</h3>
						<p className="hotel__paragraph">
							Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Id tempore
							error quod, rem saepe aspernatur excepturi aperiam sequi beatae nesciunt
							delectus quasi? Quos enim culpa consequuntur, cupiditate laudantium
							necessitatibus fugiat, odit adipisci nulla iste excepturi magni veniam
							officiis aspernatur facere!
						</p>
						<p className="hotel__paragraph">
							In doloribus, pariatur, harum vero voluptates, dolorem placeat iste
							totam officia earum eius, alias nemo accusamus modi et obcaecati magnam
							ratione esse veritatis. Laborum iusto, amet. Amet esse quod, quae, ad
							suscipit dolorum illum quos nisi consequuntur delectus, ut deserunt
							saepe, dolorem obcaecati porro eius accusamus hic laudantium dolores
							placeat sunt aliquid. Officiis, optio, inventore. Aliquid iure vero ea
							suscipit, dolore voluptates dolorem odio officiis minus animi,
							perferendis deserunt porro assumenda nisi!
						</p>

						<h4 className="hotel__description-heading-2">What this place offers?</h4>
						<div className="hotel__offers">
							<span className="hotel__offer">wifi connection</span>
							<span className="hotel__offer">2 bedrooms</span>
							<span className="hotel__offer">near airport</span>
							<span className="hotel__offer">wifi connection</span>
							<span className="hotel__offer">2 bedrooms</span>
							<span className="hotel__offer">near airport</span>
							<span className="hotel__offer">wifi connection</span>
							<span className="hotel__offer">2 bedrooms</span>
							<span className="hotel__offer">near airport</span>
							<span className="hotel__offer">wifi connection</span>
							<span className="hotel__offer">2 bedrooms</span>
							<span className="hotel__offer">near airport</span>
						</div>
					</div>
					<div className="hotel__map-wrapper">
						<MyMap />
					</div>
				</div>
				<section className="hotel__review-section">
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
				</section>
			</div>
		</>
	);
};

export default ViewPlace;
