import React, { useRef, useEffect } from "react";

const CustomSelect = (props) => {
	const {
		options,
		selected,
		isActive,
		handleSelectToggle,
		handleOnBlur,
		handleOnSelect,
	} = props;

	const selectRef = useRef();

	useEffect(() => {
		selectRef.current.tabIndex = 0;
	});

	return (
		<div
			className="__custom-select"
			ref={selectRef}
			onClick={handleSelectToggle}
			onBlur={handleOnBlur}
		>
			<span className="value">{selected}</span>
			<span className="book-search__angle">
				<i
					className={
						isActive
							? "fa-solid fa-angle-down active"
							: "fa-solid fa-angle-down"
					}
				></i>
			</span>

			<ul className={isActive ? "options show" : "options"}>
				{options.map((option, idx) => (
					<li
						key={idx}
						className={
							option.toLowerCase() === selected.toLowerCase()
								? "option selected"
								: "option"
						}
						onClick={handleOnSelect}
					>
						{option}
					</li>
				))}
			</ul>
		</div>
	);
};

export default CustomSelect;
