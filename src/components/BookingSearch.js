import React, { useRef, useEffect, useState } from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import CustomSelect from "./CustomSelect"
import CustomSearch from "./CustomSearch"
import phlocations from "../mocks/places.js";
import {places as p} from "../mocks/links";

const BookingSearch = () => {
	const [places, setPlaces] = useState(p.map(x => x.text));
	const [inputs, setInputs] = useState({
		location: "Virac, Catanduanes",
		place: "pools",
		date: "",
	})
	const [activeField, setActiveField] = useState();

	const bookSearchRef = useRef();

	useEffect(() => {
		let observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					bookSearchRef.current.style.transform = "translateY(-50%)";
				} else {
					bookSearchRef.current.style.transform = "translateY(0)";
				}
			},
			{ threshold: .6, rootMargin: "200px 0px 0px 0px" }
		);

		observer.observe(bookSearchRef.current);
	}, [bookSearchRef]);

	const handleLocationSelect = (e) =>{
		setInputs({...inputs, location: e.target.textContent})
	}
	const handleLocationChange = (e) => setInputs({...inputs, location: e.target.value})

	const togglePlace = () => {
		if ("place" === activeField) setActiveField(null);
		else setActiveField("place");
	};

	const handlePlaceSelect = (e) => setInputs({...inputs, place: e.target.textContent})
	
	const handleOnBlur = () => setActiveField(null)

	return (
		<div className="book-search" ref={bookSearchRef}>
			<div className="book-search__item">
				<FaMapMarkerAlt className="book-search__icon" />
				<div className="book-search__form">
					<div className="book-search__select">Location</div>
					
					<CustomSearch 
						value={inputs.location} 
						handleLocationSelect={handleLocationSelect} 
						handleLocationChange={handleLocationChange}
					/>
				</div>
			</div>

			<div className="book-search__item">
				<FaMapMarkerAlt className="book-search__icon" />
				<div className="book-search__form">
					<div className="book-search__select">Place</div>

					<CustomSelect
						options={places} 
						selected={inputs.place}
						isActive={activeField === "place"} 
						handleSelectToggle={togglePlace}
						handleOnBlur={handleOnBlur} 
						handleOnSelect={handlePlaceSelect}
					/>
				</div>
			</div>



			<div className="book-search__item">
				<FaMapMarkerAlt className="book-search__icon" />

				<div className="book-search__form">
					<div className="book-search__select">
						Date{" "}
						<span className="book-search__angle">
							<i className="fa-solid fa-angle-down"></i>
						</span>
					</div>
					<span
						className={
							false
								? "book-search__value"
								: "book-search__value empty"
						}
					>
						Feb 14, 2022
					</span>
				</div>
			</div>
			<div className="book-search__item">
				<button>
					<FiSearch />
				</button>
			</div>
		</div>
	);
};

export default BookingSearch;
