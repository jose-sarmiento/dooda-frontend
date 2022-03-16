import React, {useEffect, useRef} from "react";
import {Link} from "react-router-dom"
import treehouse from "../assets/images/treehouse.jpg";
import room from "../assets/images/1.jpg";

const Features = () => {
 	const content = useRef([])

	useEffect(() => {
		const options = {threshold: .3}
		const observer = new IntersectionObserver(callback, options)
		
	}, [content.current])

	const callback = (entries) => {

	}

	return (
		<div className="grid-12">
			<div className="features__left">
				<div className="features__image-wrapper features__image-wrapper--1">
					<img src={treehouse} alt="img1" className="features__image" />
				</div>
			</div>

			<div className="features__offers">
				<h2 className="features__title">What <span className="itallic">Dooda Offers</span>?</h2>
				<h3 className="features__heading">Find and Set your next stop with ease</h3>
				<p className="features__paragraph">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, dolorem
					praesentium fuga quas debitis. Quos amet facilis maxime enim dolore repellat
					dolores deserunt libero nesciunt.
				</p>
				<h3 className="features__heading">Choose the best from wide range of options</h3>
				<p className="features__paragraph">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, maiores
					vitae, accusantium qui minima exercitationem.
				</p>

				<div className="cta">
					<span className="cta__icon">
						<i className="fa fa-arrow-right-long"></i>
					</span>
					<div className="cta__right">
						<span className="cta__text">Get started with dooda</span>
						<Link to="/p/hotels" className="cta__link">Browse now</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
