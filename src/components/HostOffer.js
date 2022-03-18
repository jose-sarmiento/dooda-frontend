import React, {useState} from "react";
import {Link} from "react-router-dom"
import img2 from "../assets/images/woman-with-computer.jpg";

const Features = () => {
	const [focus, setFocus] = useState(1);
 
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
				<div className="cta">
					<span className="cta__icon">
						<i className="fa fa-arrow-right-long"></i>
					</span>
					<div className="cta__right">
						<span className="cta__text">Setup your host account, it's easy</span>
						<Link to="/host/guide" className="cta__link">Learn how</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
