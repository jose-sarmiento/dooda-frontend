import React from "react";
import { FiSearch } from "react-icons/fi";

const Search = ({ variant }) => {
	if (variant === "hero") {
		return (
			<form className="nav-search nav-search--hero">
				<input
					type="search"
					id="nav-search"
					placeholder="Where are you going?"
					className="nav-search__input"
				/>
				<label htmlFor="nav-search" className="nav-search__label">
					<FiSearch />
				</label>
			</form>
		);
	}
	return (
		<form className="nav-search">
			<label htmlFor="nav-search" className="nav-search__label">
				<FiSearch />
			</label>
			<input
				type="search"
				id="nav-search"
				placeholder="Where are you going?"
				className="nav-search__input"
			/>
		</form>
	);
};

export default Search;
