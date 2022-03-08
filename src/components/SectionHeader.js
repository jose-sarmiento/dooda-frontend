import React from "react";
import {Link} from "react-router-dom"
import CustomLink from "./CustomLink";
import { places } from "../mocks/links";

const SectionHeader = ({ toggle }) => {
	return (
		<div className="section-header">

			<ul className="item-categories item-categories--web">
				{places.slice(0,8).map((link, idx) => (
					<li className="item-categories__item" key={link.id}>
						<CustomLink to={link.url}>{link.text}</CustomLink>
					</li>
				))}
				<li className="item-categories__item item-categories__item--more">
					<span className="item-categories__link item-categories__link--more">more

					<i class="fa-solid fa-angle-down item-categories__icon"></i>
					</span>

					<ul className="sublinks">
						{places.slice(8).map((link, idx) => (
							<li className="sublinks__item">
								<CustomLink to={link.url}>{link.text}</CustomLink>
							</li>
						))}
					</ul>
				</li>
			</ul>

			<div className="filters">
				<button
					type="button"
					className="filters__price-toggler"
					onClick={toggle}
				>
					Filters
				</button>
			</div>
		</div>
	);
};

export default SectionHeader;
