import React from "react";
import logo from "../assets/images/doadasvglogo.svg";

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
							Dooda Ph was born in 2021. The hosts and travelers can create an account so they can list their space and book unique accommodations anywhere in the Philippines. It helps make sharing easy, enjoyable, and safe. Dooda Ph team verifies profiles and listings, as well as a smart messaging system that allows guests to message hosts directly with security, and a reliable platform for collecting and transferring payments. Learn more about a Listing by reviewing the description and photos, the Host profile, and Guest reviews.
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
