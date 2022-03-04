import React, {useState} from "react";
import {Link} from "react-router-dom"
import img1 from "../assets/images/cliford.jpg";
import img2 from "../assets/images/woman-with-computer.jpg";
import img3 from "../assets/images/lens.jpg";

const Features = () => {
	const [focus, setFocus] = useState(1);

	const handleMouseOver = (n) => {
		if (n === focus) return;
		setFocus(n);
	};
 
	return (
		<div className="features">
			<div className="features__left">
				<h2 className="features__title">What Dooda Offers?</h2>
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

			<div className="features__image-wrapper">
				<img src={img2} alt="img1" className="features__image" />
			</div>
			{/*<div className="features__right">
				<figure
					className={
						focus === 1
							? "features__img-wrap features__img-wrap--1 features__img-wrap--focus"
							: "features__img-wrap features__img-wrap--1"
					}
					onMouseOver={() => handleMouseOver(1)}
				>
					<img src={img3} alt="img1" className="features__img features__img--1" />
				</figure>
				<figure
					className={
						focus === 2
							? "features__img-wrap features__img-wrap--2 features__img-wrap--focus"
							: "features__img-wrap features__img-wrap--2"
					}
					onMouseOver={() => handleMouseOver(2)}
				>
					<img src={img2} alt="img1" className="features__img features__img--2" />
				</figure>
				<figure
					className={
						focus === 3
							? "features__img-wrap features__img-wrap--3 features__img-wrap--focus"
							: "features__img-wrap features__img-wrap--3"
					}
					onMouseOver={() => handleMouseOver(3)}
				>
					<img
						src={img1}
						alt="img1"
						className="features__img features__img--active features__img--3"
					/>
				</figure>
			</div>*/}
		</div>
	);
};

export default Features;
