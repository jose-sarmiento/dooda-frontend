import React, { useState, useEffect } from "react";
import { FaTimes, FaCheck } from "react-icons/fa";
import MultiStepForm from "./MultiStepForm";
import useAppContext from "../hooks/useAppContext"

const Modal = () => {
	const { isOpenModal, closeModal } = useAppContext()
	const [currStep, setCurrStep] = useState(1);

	useEffect(() => {
		if (!isOpenModal) {
			setCurrStep(1)
		}
	}, [isOpenModal])

	return (
		<div className={isOpenModal ? "modal modal--show" : "modal"}>
			<div className="modal__content">
				<button className="modal__close" onClick={() => closeModal()}>
					<FaTimes />
				</button>
				<div className="modal__body">
					<div className="booking-steps">
						<div
							className={
								currStep >= 1
									? "booking-steps__step booking-steps__step--complete booking-steps__step--1"
									: "booking-steps__step booking-steps__step--1"
							}
						>
							{currStep > 1 ? <FaCheck /> : "1"}

							<span className="booking-steps__description">Booking</span>
						</div>
						<div
							className={
								currStep >= 2
									? "booking-steps__step booking-steps__step--complete booking-steps__step--2"
									: "booking-steps__step booking-steps__step--2"
							}
						>
							<div className="booking-steps__bar booking-steps__bar-2"></div>
							{currStep > 2 ? <FaCheck /> : "2"}
							<span className="booking-steps__description">Payment</span>
						</div>
						<div
							className={
								currStep === 3
									? "booking-steps__step booking-steps__step--complete booking-steps__step--3"
									: "booking-steps__step booking-steps__step--3"
							}
						>
							<div className="booking-steps__bar booking-steps__bar-3"></div>
							3
							<span className="booking-steps__description">Summary</span>
						</div>
					</div>

					<MultiStepForm currStep={currStep} setCurrStep={setCurrStep} closeModal={closeModal} />
				</div>
				<div className="modal__footer"></div>
			</div>
		</div>
	);
};

export default Modal;
