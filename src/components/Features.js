import React from "react";
import img1 from "../assets/images/cliford.jpg"
import img2 from "../assets/images/edward.jpg"
import img3 from "../assets/images/lens.jpg"

const Features = () => {
	return (
		<div className="features">
			<div className="features__left">
				<h2 className="features__title">What Dooda Offers?</h2>
				<h3 className="features__heading">
					Find and Set your next stop with ease
				</h3>
				<p className="features__paragraph">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Tenetur, dolorem praesentium fuga quas debitis. Quos amet
					facilis maxime enim dolore repellat dolores deserunt libero
					nesciunt.
				</p>
				<h3 className="features__heading">
					Choose the best from wide range of options
				</h3>
				<p className="features__paragraph">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quisquam, maiores vitae, accusantium qui minima
					exercitationem.
				</p>
				<a href="#" className="features__cta">
					Browse now <span className="features__cta-arrow">&rarr;</span>
				</a>
			</div>
			<div className="features__right">
				<figure className="features__img-wrap features__img-wrap--1">
					<img
						src={img1}
						alt="img1"
						className="features__img features__img--1"
					/>
				</figure>
				<figure className="features__img-wrap features__img-wrap--2">
					<img
						src={img2}
						alt="img1"
						className="features__img features__img--2"
					/>
				</figure>
				<figure className="features__img-wrap features__img-wrap--3">
					<img
						src={img3}
						alt="img1"
						className="features__img features__img--3"
					/>
				</figure>
			</div>
		</div>
	);
};

export default Features;
