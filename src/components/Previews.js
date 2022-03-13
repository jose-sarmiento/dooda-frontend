import React, { useState, useEffect } from "react";
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/lens.jpg";
import img5 from "../assets/images/img3-small.jpg";

const Previews = () => {
	const [currIndex, setCurrIndex] = useState(0);
	const [paused, setPaused] = useState(false);

	const activeImages = [img1, img2, img3];

	useEffect(() => {
		if (currIndex > activeImages.length - 1) {
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
		<div className="previews">
			<div className="previews__container">
				<div className="previews__header">
					<h2 className="previews__heading">
						Recommended
					</h2>
				</div>

				<div className="preview preview--active" onMouseOver={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
					<div className="preview__images">
						{activeImages.map((img, idx) => {
							let position =
								"preview__image-wrap preview__image-wrap--next";
							if (idx === currIndex) {
								position =
									"preview__image-wrap preview__image-wrap--current";
							}
							if (
								idx === currIndex - 1 ||
								(currIndex === 0 &&
									idx === activeImages.length - 1)
							) {
								position =
									"preview__image-wrap preview__image-wrap--prev";
							}

							return (
								<div className={position} key={idx}>
									<img
										src={img}
										alt={`preview image ${idx}`}
										className="preview__image"
									/>
								</div>
							);
						})}
					</div>

					<div className="preview__prev-btn preview__action">
						<i className="fa-solid fa-angle-left"></i>
					</div>
					<div className="preview__next-btn preview__action">
						<i className="fa-solid fa-angle-right"></i>
					</div>

					<div className="preview__footer">
						<div className="preview__footer-left">
							<p className="preview__name">
								Virac Hotel and Resort
							</p>
							<p className="preview__location">
								Virac Catandanes
							</p>
						</div>
						<button className="preview__cta">View</button>
					</div>
				</div>

				<div className="preview-single preview-single--1">
					<div className="preview-single__image-wrap">
						<img
							src={img5}
							alt="shh"
							className="preview-single__image"
						/>
					</div>

					<div className="preview-single__footer preview-single__footer--cream">
						<p className="preview-single__name">Ocean View Hotel</p>
						<p className="preview-single__location">
							Conception Virac Catandanes
						</p>
					</div>
				</div>

				<div className="preview-single preview-single--2">
					<div className="preview-single__image-wrap">
						<img
							src={img4}
							alt="shh"
							className="preview-single__image"
						/>
					</div>

					<div className="preview-single__footer">
						<p className="preview-single__name">Island Hopping</p>
						<p className="preview-single__location">Palawan</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Previews;
