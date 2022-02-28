import React, { useState, useRef, useEffect } from "react";
import {
	FaSearch,
	FaBook,
	FaUmbrellaBeach,
	FaLock,
	FaChevronDown,
	FaFacebook,
} from "react-icons/fa";

const SearchForm = () => {
	const [category, setCategory] = useState("all");
	const [isOpenOptions, setIsOpenOptions] = useState(false);

	const customSelectRef = useRef();
	
	useEffect(() => {
		if (isOpenOptions) customSelectRef.current.classList.toggle("focus");
		else customSelectRef.current.classList.remove("focus");
	}, [isOpenOptions]);

	useEffect(() => {
		customSelectRef.current.tabIndex = 0;
		customSelectRef.current.addEventListener("click", handleCustomSelectClick);
		customSelectRef.current.addEventListener("blur", () => setIsOpenOptions(false));
	}, []);
	
	const handleCustomSelectClick = (e) => setIsOpenOptions((prev) => !prev);

	const handleOptionSelect = (e) => setCategory(e.target.getAttribute("data-value"));
	
	return (
		<form action="#" className="search" spellCheck={false}>
			<input
				type="text"
				className="search__input"
				id="search"
				placeholder="eg. Twin Rock Beach Resort"
			/>
			<label htmlFor="search" className="search__label">
				<FaSearch />
			</label>
			<div className="custom-select" ref={customSelectRef}>
				<span className="custom-select__value">{category}</span>
				<FaChevronDown className="custom-select__arrow" />
				<div className="custom-select__options">
					<div
						className={
							category === "all"
								? "custom-select__option custom-select__option--selected"
								: "custom-select__option"
						}
						data-value="all"
						onClick={handleOptionSelect}
					>
						All
					</div>
					<div
						className={
							category === "places"
								? "custom-select__option custom-select__option--selected"
								: "custom-select__option"
						}
						data-value="places"
						onClick={handleOptionSelect}
					>
						Places
					</div>
					<div
						className={
							category === "experiences"
								? "custom-select__option custom-select__option--selected"
								: "custom-select__option"
						}
						data-value="experiences"
						onClick={handleOptionSelect}
					>
						Experiences
					</div>
				</div>
			</div>
		</form>
	);
};

export default SearchForm;
