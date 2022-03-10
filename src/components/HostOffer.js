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
				<h2 className="hostoffer__title">Wan't to <span className="itallic">Host your Place?</span></h2>
				<h3 className="hostoffer__heading">Trusted by over 15000 business owners all around Philippines</h3>
				<p className="hostoffer__paragraph">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, dolorem
					praesentium fuga quas debitis. Quos amet facilis maxime enim dolore repellat
					dolores deserunt libero nesciunt.
				</p>
				<p className="hostoffer__paragraph">Lorem ipsum dolor sit amet, consectetur, adipisicing elit. Iusto repellat excepturi magni exercitationem illum veniam!</p>
				<Link to="/host/guide" className="hostoffer__cta">
					Learn How <i className="fa fa-arrow-right-long hostoffer__cta-arrow"></i>
				</Link>
			</div>
		</div>
	);
};

export default Features;
