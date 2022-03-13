import React, {useState} from "react";
import {Link} from "react-router-dom"
import treehouse from "../assets/images/treehouse.jpg";

const Features = () => {
 
	return (
		<div className="grid-12">
			<div className="features__left">
				<div className="features__image-wrapper">
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
				<Link to="/p/hotels" className="features__cta">
					Browse now <i className="fa fa-arrow-right-long features__cta-arrow"></i>
				</Link>
			</div>
		</div>
	);
};

export default Features;
