import React, { useState, useEffect } from "react";
import { FaTimes, FaCheck } from "react-icons/fa";
import PriceSlider from "./PriceSlider";
import MultiStepForm from "./MultiStepForm";
import useAppContext from "../hooks/useAppContext"

const FilterModal = ({isOpen, close}) => {
	const [min, setMin] = useState(15000);
	const [max, setMax] = useState(40000);

	return (
		<div className={isOpen ? "modal modal--filter modal--show" : "modal modal--filter"}>
			<div className="modal__content">
				<button className="modal__close" onClick={close}>
					<FaTimes />
				</button>
				<div className="modal__body">
					<div className="__filters">
						<div className="filter__group">
							<p className="filter__heading">Day/Time</p>
							<ul className="filter__input-container">
								<li className="filter__radio-group">
									<input
										type="radio"
										name="daytime"
										id="both"
										className="filter__radio-input"
									/>
									<label htmlFor="both" className="filter__radio-label">
										Both
										<span className="filter__radio-checkbox">
											<i className="fa-solid fa-check"></i>
										</span>
									</label>
								</li>
								<li className="filter__radio-group">
									<input
										type="radio"
										name="daytime"
										id="day"
										className="filter__radio-input"
									/>
									<label htmlFor="day" className="filter__radio-label">
										Day
										<span className="filter__radio-checkbox">
											<i className="fa-solid fa-check"></i>
										</span>
									</label>
								</li>
								<li className="filter__radio-group">
									<input
										type="radio"
										name="daytime"
										id="night"
										className="filter__radio-input"
									/>
									<label htmlFor="night" className="filter__radio-label">
										Night
										<span className="filter__radio-checkbox">
											<i className="fa-solid fa-check"></i>
										</span>
									</label>
								</li>
							</ul>
						</div>
						<div className="filter__group">
							<p className="filter__heading">Price Range</p>
							<PriceSlider min={min} max={max} setMin={setMin} setMax={setMax} />
						</div>

						<div className="filter__group">
							<p className="filter__heading">Type of Place</p>
							<ul className="filter__input-container">
								<div className="grid-2">
									<li className="filter__radio-group">
										<input
											type="radio"
											name="typeofplace"
											id="entireplace"
											className="filter__radio-input"
										/>
										<label htmlFor="entireplace" className="filter__radio-label">
											Entire place
											<span className="filter__radio-checkbox">
												<i className="fa-solid fa-check"></i>
											</span>
										</label>
									</li>
									<li className="filter__radio-group">
										<input
											type="radio"
											name="typeofplace"
											id="hotelroom"
											className="filter__radio-input"
										/>
										<label htmlFor="hotelroom" className="filter__radio-label">
											Hotel room
											<span className="filter__radio-checkbox">
												<i className="fa-solid fa-check"></i>
											</span>
										</label>
									</li>
									<li className="filter__radio-group">
										<input
											type="radio"
											name="typeofplace"
											id="privateroom"
											className="filter__radio-input"
										/>
										<label htmlFor="privateroom" className="filter__radio-label">
											Private room
											<span className="filter__radio-checkbox">
												<i className="fa-solid fa-check"></i>
											</span>
										</label>
									</li>
									<li className="filter__radio-group">
										<input
											type="radio"
											name="typeofplace"
											id="sharedroom"
											className="filter__radio-input"
										/>
										<label htmlFor="sharedroom" className="filter__radio-label">
											Shared room
											<span className="filter__radio-checkbox">
												<i className="fa-solid fa-check"></i>
											</span>
										</label>
									</li>
								</div>
							</ul>
						</div>

						<div className="filter__group">
							<p className="filter__heading">Amenities</p>
							<ul className="filter__input-container">
								<div className="grid-2">
									<li className="filter__radio-group">
										<input
											type="checkbox"
											name="amenities"
											id="kitchen"
											className="filter__radio-input"
										/>
										<label htmlFor="kitchen" className="filter__radio-label">
											Kitchen
											<span className="filter__radio-checkbox">
												<i className="fa-solid fa-check"></i>
											</span>
										</label>
									</li>
									<li className="filter__radio-group">
										<input
											type="checkbox"
											name="amenities"
											id="airconditioning"
											className="filter__radio-input"
										/>
										<label
											htmlFor="airconditioning"
											className="filter__radio-label"
										>
											Air conditioning
											<span className="filter__radio-checkbox">
												<i className="fa-solid fa-check"></i>
											</span>
										</label>
									</li>
									<li className="filter__radio-group">
										<input
											type="checkbox"
											name="amenities"
											id="heating"
											className="filter__radio-input"
										/>
										<label htmlFor="heating" className="filter__radio-label">
											Heating
											<span className="filter__radio-checkbox">
												<i className="fa-solid fa-check"></i>
											</span>
										</label>
									</li>
									<li className="filter__radio-group">
										<input
											type="checkbox"
											name="amenities"
											id="washer"
											className="filter__radio-input"
										/>
										<label htmlFor="washer" className="filter__radio-label">
											Washer
											<span className="filter__radio-checkbox">
												<i className="fa-solid fa-check"></i>
											</span>
										</label>
									</li>
								</div>
							</ul>
						</div>

						<div className="filter__group">
							<p className="filter__heading">Facilities</p>
							<ul className="filter__input-container">
								<div className="grid-2">
									<li className="filter__radio-group">
										<input
											type="checkbox"
											name="amenities"
											id="freeparking"
											className="filter__radio-input"
										/>
										<label htmlFor="freeparking" className="filter__radio-label">
											Free parking on premises
											<span className="filter__radio-checkbox">
												<i className="fa-solid fa-check"></i>
											</span>
										</label>
									</li>
									<li className="filter__radio-group">
										<input
											type="checkbox"
											name="amenities"
											id="hottub"
											className="filter__radio-input"
										/>
										<label htmlFor="hottub" className="filter__radio-label">
											Hot tub
											<span className="filter__radio-checkbox">
												<i className="fa-solid fa-check"></i>
											</span>
										</label>
									</li>
									<li className="filter__radio-group">
										<input
											type="checkbox"
											name="amenities"
											id="gym"
											className="filter__radio-input"
										/>
										<label htmlFor="gym" className="filter__radio-label">
											Gym
											<span className="filter__radio-checkbox">
												<i className="fa-solid fa-check"></i>
											</span>
										</label>
									</li>
									<li className="filter__radio-group">
										<input
											type="checkbox"
											name="amenities"
											id="pool"
											className="filter__radio-input"
										/>
										<label htmlFor="pool" className="filter__radio-label">
											Pool
											<span className="filter__radio-checkbox">
												<i className="fa-solid fa-check"></i>
											</span>
										</label>
									</li>
								</div>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FilterModal;
