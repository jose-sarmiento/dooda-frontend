import React, { useState, useEffect, useRef, useLayoutEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { FaCaretDown, FaFilter } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import CustomLink from "./CustomLink";
import CustomSelect from "./CustomSelect";
import { places } from "../mocks/links";

const SectionHeader = ({ toggle }) => {
	const [activePath, setActivePath] = useState();
	const [links, setLink] = useState(places);
	const [visible, setVisible] = useState({
		left: false,
		right: false
	});

	const observer1 = useRef()
	const observer2 = useRef()
	const location = useLocation();

	useEffect(() => {
		const tempArr = location.pathname.split("/");
		const pathname = tempArr[tempArr.length - 1];
		setActivePath(places.find((p) => p.text === pathname));
	}, [useLocation]);

	const firstElementRef = useCallback((node) => {
		if(observer1.current) observer1.current.disconnect()
		observer1.current = new IntersectionObserver(entries => {
			console.log(entries[0].isIntersecting)
			if(entries[0].isIntersecting) {
				setVisible({...visible, left: true})
			} else {
				setVisible({...visible, left: false})
			}
		})
		if(node) observer1.current.observe(node)
	}, [])

	const lastElementRef = useCallback((node) => {
		if(observer2.current) observer2.current.disconnect()
		observer2.current = new IntersectionObserver(entries => {
			if(entries[0].isIntersecting) {
				setVisible({...visible, right: true})
			} else {
				setVisible({...visible, right: false})
			}
		}, {threshold: .5})
		if(node) observer2.current.observe(node)
	}, [])

	console.log(visible)

	const handleSelectToggle = () => {};
	const handleOnBlur = () => {};
	const handleOnSelect = () => {};

	return (
		<div className="section-header">
			<div className="section-header__container">
				<span className="active-category">{activePath?.nicename}</span>
				<ul className="item-categories">
					<span
						className={
							visible.left
								? "item-categories__previous"
								: "item-categories__previous show"
						}
					>
						<FiChevronLeft className="item-categories__nav-icons" />
					</span>
					<span 
						className={
							visible.right
								? "item-categories__next"
								: "item-categories__next show"
						}
					>
						<FiChevronRight className="item-categories__nav-icons" />
					</span>
					{places.filter(x => x.text !== activePath?.text).map((link, idx) => {
						let ref = null;
						if (idx === 0) ref = firstElementRef;
						if (idx === places.length-2) ref = lastElementRef;

						return (
							<li className="item-categories__item" key={link.id} ref={ref}>
								<CustomLink to={link.url}>{link.text}</CustomLink>
							</li>
						);
					})}
				</ul>
				<div className="filters">
					<div className="filters__select">
						Popularity <FaCaretDown className="filters__select-icon" />
					</div>
					<button className="filters__button">
						<FaFilter className="filters__button-icon" /> Filters
					</button>
				</div>
			</div>
			{/*<div className="filters">
				<div className="filters__filter-item">
					<CustomSelect
					options={links.map(l => l.text)} 
					selected="hotel"
					isActive={false} 
					handleSelectToggle={handleSelectToggle}
					handleOnBlur={handleOnBlur} 
					handleOnSelect={handleOnSelect}
				/>
				</div>
				<div className="filters__filter-item">
					<CustomSelect
					options={links.map(l => l.text)} 
					selected="hotel"
					isActive={false} 
					handleSelectToggle={handleSelectToggle}
					handleOnBlur={handleOnBlur} 
					handleOnSelect={handleOnSelect}
				/>
				</div>
				<div className="filters__filter-item">
					<CustomSelect
					options={links.map(l => l.text)} 
					selected="hotel"
					isActive={false} 
					handleSelectToggle={handleSelectToggle}
					handleOnBlur={handleOnBlur} 
					handleOnSelect={handleOnSelect}
				/>
				</div>
				<div className="filters__filter-item">
					<CustomSelect
					options={links.map(l => l.text)} 
					selected="hotel"
					isActive={false} 
					handleSelectToggle={handleSelectToggle}
					handleOnBlur={handleOnBlur} 
					handleOnSelect={handleOnSelect}
				/>
				</div>
			</div>*/}
		</div>
	);
};

export default SectionHeader;
