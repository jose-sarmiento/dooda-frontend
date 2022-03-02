import React from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import womanwithcomputer from "../assets/images/woman-with-computer.jpg";

import scrollWithOffset from "../utils/scrollWithOffset"

const HostSubmenu = () => {
	return (
		<div className="submenu submenu--host">
			<div className="hosting">
				<div className="hosting__details">
					<p className="hosting__heading">Start hosting now, Host Anything, Anywhere</p>
					<p className="hosting__paragraph">
						Join now and be able to host your business. Dooda has hundreds of thousands
						of users looking for the best places in the country for different purposes.
						We provide oppurtunty to showcases your businesses and make them available
						for booking online
					</p>
					<p className="hosting__paragraph">
						Lorem, ipsum dolor sit amet, consectetur adipisicing elit. Rerum temporibus
						quidem neque, ad maiores possimus! Nemo ab suscipit ratione, voluptas.
					</p>

					<ul className="hosting__links">
						<li className="hosting__item">
							<NavHashLink 
								smooth 
								to="/host/guide#hosting" 
								scroll={el => scrollWithOffset(el, -80)}
								className="hosting__link">
								Learn How to Start Hosting.
							</NavHashLink>
						</li>
						<li className="hosting__item">
							<NavHashLink smooth to="/host/guide#terms" scroll={el => scrollWithOffset(el, -80)} className="hosting__link">
								Terms and Conditions
							</NavHashLink>
						</li>
						<li className="hosting__item">
							<NavHashLink
								smooth
								to="/host/guide#getstarted"
								scroll={el => scrollWithOffset(el, -80)}
								className="hosting__link"
							>
								Read more about hosting
							</NavHashLink>
						</li>
					</ul>
				</div>

				<div className="hosting__image-wrapper">
					<img
						src={womanwithcomputer}
						alt="woman in front of computer"
						className="hosting__image"
					/>
				</div>
			</div>
		</div>
	);
};

export default HostSubmenu;
