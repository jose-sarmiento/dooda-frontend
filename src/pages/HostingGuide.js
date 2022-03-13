import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import Layout from "./Layout";

import scrollWithOffset from "../utils/scrollWithOffset";

const HostingGuide = () => {
	const [activeSection, setActiveSection] = useState();

	const options = { rootMargin: "300px 0px 0px 0px", threshold: 0.5 };

	useEffect(() => {
		const observer = new IntersectionObserver(callback, options);
		document.querySelectorAll(".guide__section").forEach((el) => observer.observe(el));
	});

	const callback = (entries) => {
		let intersectingSections = [];

		entries.forEach((entry) => {
			if (entry.isIntersecting) intersectingSections.push(entry);
		});

		setActiveSection(intersectingSections[0]?.target.id);
	};

	return (
		<Layout>
			<div className="guide">
				<div className="guide__tutorial">
					<div className="guide__section" id="getstarted">
						<h2>Overview</h2>
						<p>This is a comprehensive guide to get started hosting with Dooda</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
							ducimus enim perspiciatis facere repellat eaque soluta quas eum
							doloremque ab?
						</p>
					</div>

					<div className="guide__section" id="requirements">
						<h2>Hosting Requirements</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro commodi,
							ducimus deserunt odit vel ipsum?
						</p>
						<ul>
							<li>requirement number 1</li>
							<li>requirement number 1</li>
							<li>requirement number 1</li>
							<li>requirement number 1</li>
							<li>requirement number 1</li>
							<li>requirement number 1</li>
						</ul>
					</div>

					<div className="guide__section" id="signforhostingaccount">
						<h2>Signing up an Host Account</h2>
						<p>
							Create your hosting account <a href="#">here</a>. It is easy and simple
							to fill up. We will walk you through to the steps.
						</p>
						<ul>
							<li>This is step 1</li>
							<li>This is step 2</li>
							<li>This is step 3</li>
							<li>This is step 4</li>
							<li>This is step 5</li>
							<li>This is step 6</li>
							<li>This is step 7</li>
						</ul>
					</div>

					<div className="guide__section" id="prepare">
						<h2>Preparing materials need for hosting</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tenetur
							nisi, facilis!
						</p>
						<ul>
							<li>Lorem ipsum dolor sit amet.</li>
							<li>Lorem ipsum dolor sit amet.</li>
							<li>Lorem ipsum dolor sit amet.</li>
							<li>Lorem ipsum dolor sit amet.</li>
							<li>Lorem ipsum dolor sit amet.</li>
							<li>Lorem ipsum dolor sit amet.</li>
							<li>Lorem ipsum dolor sit amet.</li>
						</ul>
					</div>

					<div className="guide__section" id="hosting">
						<h2>Hosting your place</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
							assumenda officia distinctio, porro corrupti at!
						</p>
						<p>
							Libero, at distinctio. Sint neque deserunt, aliquid sequi! Itaque, hic
							officiis, quam impedit ipsa voluptatem illo enim, culpa aperiam eos,
							quia minus?
						</p>
						<ul>
							<li>
								Lorem ipsum dolor, sit amet, consectetur adipisicing elit{" "}
								<Link className="guide__link" to="#">
									here
								</Link>
								.
							</li>
							<li>
								Lorem ipsum, dolor sit amet consectetur, adipisicing elit.
								Necessitatibus explicabo beatae voluptas, exercitationem?
								<Link className="guide__link" to="#">
									here
								</Link>
							</li>
							<li>
								Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Qui
								impedit quidem dolorum iste tempora, non.
								<Link className="guide__link" to="#">
									here
								</Link>
								.
							</li>
							<li>
								Lorem ipsum dolor sit amet, consectetur, adipisicing elit. Sit
								<Link className="guide__link" to="#">
									here
								</Link>
								.
							</li>
							<li>
								Lorem, ipsum dolor sit amet consectetur
								<Link className="guide__link" to="#">
									here
								</Link>
								.
							</li>
							<li>
								Ipsum dolor, sit amet, consectetur adipisicing elit
								<Link className="guide__link" to="#">
									here
								</Link>
								.
							</li>
						</ul>
					</div>

					<div className="guide__section" id="pricing">
						<h2>Pricing</h2>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem
							ex eos deleniti non molestias fugit sed dolor magnam quibusdam culpa
							perspiciatis vero, fugiat odit ullam adipisci doloribus, aperiam nihil
							explicabo.
						</p>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					</div>

					<div className="guide__section" id="payment">
						<h2>Payment</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing, elit. Ex ratione
							asperiores, a cupiditate animi non modi nesciunt quis eligendi illo.
						</p>
						<p>
							Lorem, ipsum dolor sit amet consectetur, adipisicing elit. Corporis
							dolore, odio hic aliquid, libero aliquam, exercitationem iusto repellat,
							mollitia minima perspiciatis ducimus consequatur enim maxime
							consequuntur voluptates iste perferendis odit?
						</p>
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing, elit.</p>
					</div>

					<div className="guide__section" id="terms">
						<h2>Terms & Conditions</h2>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing, elit. Eveniet
							nesciunt dolores impedit quas iure quis aspernatur. Beatae excepturi et
							qui magnam ut, perspiciatis quis velit doloribus consequuntur enim modi
							est?
						</p>
						<ul>
							<li>condition number 1</li>
							<li>condition number 2</li>
							<li>condition number 3</li>
							<li>condition number 4</li>
							<li>condition number 5</li>
							<li>condition number 6</li>
							<li>condition number 7</li>
						</ul>
					</div>

					<div className="guide__section" id="summary">
						<h2>Summary</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing, elit. In
							consequuntur eum, maiores ipsum. Ducimus magni at dolore aperiam
							reiciendis cum voluptas harum. Quod a molestias iste error eos iusto
							delectus assumenda maiores cum omnis? Accusamus hic in cum, nostrum
							sequi.
						</p>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing, elit. Accusantium,
							porro aliquid quos possimus rem pariatur praesentium adipisci ut. Hic,
							reprehenderit!
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti atque
							nihil dignissimos veritatis asperiores obcaecati.
						</p>
					</div>
				</div>
				<div className="guide__tableofcontents">
					<div className="guide__table-wrapper">
						<h4>Topics we will cover</h4>
						<ul className="guide-table">
							<li className="guide-table__item">
								<NavHashLink
									smooth
									scroll={el => scrollWithOffset(el, -80)}
									className={
										activeSection === "getstarted"
											? "guide-table__link guide-table__link--active"
											: "guide-table__link"
									}
									to="#getstarted"
								>
									Get Started
								</NavHashLink>
							</li>
							<li className="guide-table__item">
								<NavHashLink
									smooth
									scroll={el => scrollWithOffset(el, -80)}
									className={
										activeSection === "requirements"
											? "guide-table__link guide-table__link--active"
											: "guide-table__link"
									}
									to="#requirements"
								>
									Hosting Requirements
								</NavHashLink>
							</li>
							<li className="guide-table__item">
								<NavHashLink
									smooth
									scroll={el => scrollWithOffset(el, -80)}
									className={
										activeSection === "signforhostingaccount"
											? "guide-table__link guide-table__link--active"
											: "guide-table__link"
									}
									to="#signforhostingaccount"
								>
									Signing up an Host Account
								</NavHashLink>
							</li>
							<li className="guide-table__item">
								<NavHashLink
									smooth
									scroll={el => scrollWithOffset(el, -80)}
									className={
										activeSection === "prepare"
											? "guide-table__link guide-table__link--active"
											: "guide-table__link"
									}
									to="#prepare"
								>
									Preparing materials need for hosting
								</NavHashLink>
							</li>
							<li className="guide-table__item">
								<NavHashLink
									smooth
									scroll={el => scrollWithOffset(el, -80)}
									className={
										activeSection === "hosting"
											? "guide-table__link guide-table__link--active"
											: "guide-table__link"
									}
									to="#hosting"
								>
									Hosting your place
								</NavHashLink>
							</li>
							<li className="guide-table__item">
								<NavHashLink
									smooth
									scroll={el => scrollWithOffset(el, -80)}
									className={
										activeSection === "pricing"
											? "guide-table__link guide-table__link--active"
											: "guide-table__link"
									}
									to="#pricing"
								>
									Pricing
								</NavHashLink>
							</li>
							<li className="guide-table__item">
								<NavHashLink
									smooth
									scroll={el => scrollWithOffset(el, -80)}
									className={
										activeSection === "payment"
											? "guide-table__link guide-table__link--active"
											: "guide-table__link"
									}
									to="#payment"
								>
									Payment
								</NavHashLink>
							</li>

							<li className="guide-table__item">
								<NavHashLink
									smooth
									scroll={el => scrollWithOffset(el, -80)}
									className={
										activeSection === "terms"
											? "guide-table__link guide-table__link--active"
											: "guide-table__link"
									}
									to="#terms"
								>
									Terms and Conditions
								</NavHashLink>
							</li>

							<li className="guide-table__item">
								<NavHashLink
									smooth
									scroll={el => scrollWithOffset(el, -80)}
									className={
										activeSection === "summary"
											? "guide-table__link guide-table__link--active"
											: "guide-table__link"
									}
									to="#summary"
								>
									Summary
								</NavHashLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default HostingGuide;
