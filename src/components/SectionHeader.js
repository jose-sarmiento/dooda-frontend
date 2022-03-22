import React, {
	useState,
	useEffect,
	useRef,
	useLayoutEffect,
	useCallback,
} from "react";
import { useLocation } from "react-router-dom";
import { FaCaretDown, FaFilter } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight, FiChevronDown } from "react-icons/fi";
import CustomLink from "./CustomLink";
import CustomSelect from "./CustomSelect";
import { places } from "../mocks/links";

const SectionHeader = ({ toggle }) => {
	const [activePath, setActivePath] = useState();
	const [isActiveSort, setIsActiveSort] = useState(false);
	const [isActiveGuest, setIsActiveGuest] = useState(false);
	const [links, setLink] = useState(places);
	const [visible, setVisible] = useState({
		left: false,
		right: false,
	});
	const [selectedOption, setSelectedOption] = useState("rating");
	const [guestCount, setGuestCount] = useState("guest: 1");
	const [isOpenFilters, setIsOpenFilters] = useState(false);

	const sortOptions = ["price", "rating", "distance"];

	const guestCountOptions = [
		"guest: 1",
		"guest: 2",
		"guest: 3",
		"guest: 4",
		"guest: 5",
	];

	const categoriesContainerRef = useRef();
	const location = useLocation();

	useEffect(() => {
		const tempArr = location.pathname.split("/");
		const pathname = tempArr[tempArr.length - 1];
		setActivePath(places.find((p) => p.text === pathname));
	}, [useLocation]);

	useEffect(() => {
		categoriesContainerRef.current.scrollLeft = 0;
	}, [activePath]);

	const handleSelectToggle = () => setIsActiveSort((prev) => !prev);
	const handleOnBlur = () => setIsActiveSort(null);
	const handleOnSelect = (e) => setSelectedOption(e.target.textContent);

	const handleGuestToggle = () => setIsActiveGuest((prev) => !prev);
	const closeGuestOptions = () => setIsActiveGuest(null);
	const handleGuestSelect = (e) => setGuestCount(e.target.textContent);

	const scrollRight = () => {
		categoriesContainerRef.current.scrollLeft += 300;
	};

	const scrollLeft = () => {
		if (categoriesContainerRef.current.scrollLeft - 300 <= 0) {
			categoriesContainerRef.current.scrollLeft = 0;
		} else {
			categoriesContainerRef.current.scrollLeft -= 300;
		}
	};

	return (
		<div className="section-header">
			<div className="section-header__container">
				<span className="active-category">{activePath?.nicename}</span>
				<div className="item-categories__wrapper">
					<span className="item-categories__previous">
						<FiChevronLeft
							className="item-categories__nav-icons"
							onClick={scrollLeft}
						/>
					</span>
					<span className="item-categories__next">
						<FiChevronRight
							className="item-categories__nav-icons"
							onClick={scrollRight}
						/>
					</span>

					<ul
						className="item-categories item-categories--web"
						ref={categoriesContainerRef}
					>
						{places
							.filter((x) => x.text !== activePath?.text)
							.map((link, idx) => {
								return (
									<li
										className="item-categories__item"
										key={link.id}
									>
										<CustomLink to={link.url}>
											{link.text}
										</CustomLink>
									</li>
								);
							})}
					</ul>

					<ul
						className="item-categories item-categories--mobile"
						ref={categoriesContainerRef}
					>
						{places.map((link, idx) => {
							return (
								<li
									className="item-categories__item"
									key={link.id}
								>
									<CustomLink to={link.url}>
										{link.text}
									</CustomLink>
								</li>
							);
						})}
					</ul>
				</div>

				<div className="filters filters--web">
					<div className="filters__select">
						<CustomSelect
							options={sortOptions}
							selected={selectedOption}
							isActive={isActiveSort}
							handleSelectToggle={handleSelectToggle}
							handleOnBlur={handleOnBlur}
							handleOnSelect={handleOnSelect}
						/>
					</div>

					<div className="filters__select ml-1">
						<CustomSelect
							options={guestCountOptions}
							selected={guestCount}
							isActive={isActiveGuest}
							handleSelectToggle={handleGuestToggle}
							handleOnBlur={closeGuestOptions}
							handleOnSelect={handleGuestSelect}
						/>
					</div>

					<button className="filters__button" onClick={toggle}>
						<FaFilter className="filters__button-icon" /> Filters
					</button>
				</div>

				<div className="filters filters--mobile">
					{isOpenFilters && (
						<>
							<div className="filters__select">
								<CustomSelect
									options={sortOptions}
									selected={selectedOption}
									isActive={isActiveSort}
									handleSelectToggle={handleSelectToggle}
									handleOnBlur={handleOnBlur}
									handleOnSelect={handleOnSelect}
								/>
							</div>

							<div className="filters__select ml-1">
								<CustomSelect
									options={guestCountOptions}
									selected={guestCount}
									isActive={isActiveGuest}
									handleSelectToggle={handleGuestToggle}
									handleOnBlur={closeGuestOptions}
									handleOnSelect={handleGuestSelect}
								/>
							</div>

							<button className="filters__button" onClick={toggle}>
								<FaFilter className="filters__button-icon" />{" "}
								Filters
							</button>
						</>
					)}

					<button
						className="filters__toggler"
						onClick={() => setIsOpenFilters((prev) => !prev)}
					>
						{isOpenFilters ? "close filters" : "sort & filters"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default SectionHeader;
