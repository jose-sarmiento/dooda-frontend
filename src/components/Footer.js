import React from "react";
import logo from "../assets/images/logo.png";

const Footer = () => {
	return (
		<section className="section--footer">
			<div className="container footer-container">
				<div className="footer">
					<div className="footer__about">
						<div className="footer__website">
							<img
								src={logo}
								alt="logo"
								className="footer__logo"
							/>
							<h2 className="footer__website-name">Dooda PH</h2>
						</div>
						<p className="footer__about-text">
							Lorem ipsum dolor sit amet consectetur adipisicing,
							elit. Beatae earum eveniet voluptatem laudantium
							aspernatur laborum adipisci incidunt dolores optio
							dolorum.
						</p>
					</div>
					<ul className="footer__help">
						<li className="footer__item footer__item--title">
							Help
						</li>
						<li className="footer__item">FAQs</li>
						<li className="footer__item">Support</li>
						<li className="footer__item">Contact Us</li>
					</ul>
					<ul className="footer__socials">
						<li className="footer__item footer__item--title">
							Community
						</li>
						<li className="footer__item">Facebook</li>
						<li className="footer__item">Twitter</li>
					</ul>
				</div>
				<div className="text-center">
					<h6 className="footer__copywright">
						&copy; 2022 by Dooda. All rights reserved.
					</h6>
				</div>
			</div>
		</section>
	);
};

export default Footer;
