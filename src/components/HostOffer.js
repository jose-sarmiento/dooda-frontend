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
		<div className="grid-12">
			<div className="hostoffer__left">
				<div className="hostoffer__image-wrapper">
					<img src={img2} alt="img1" className="hostoffer__image" />
				</div>
			</div>

			<div className="hostoffer__hostoffer">
				<h2 className="hostoffer__title">Whan't to <span className="itallic">Host your Place?</span></h2>
				<h3 className="hostoffer__heading">Join 12000 other members around Philippines</h3>
				<p className="hostoffer__paragraph">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, dolorem
					praesentium fuga quas debitis. Quos amet facilis maxime enim dolore repellat
					dolores deserunt libero nesciunt.
				</p>
				<Link to="/p/hotels" className="hostoffer__cta">
					Learn How <i className="fa fa-arrow-right-long hostoffer__cta-arrow"></i>
				</Link>
			</div>
		</div>
	);
};

export default Features;
