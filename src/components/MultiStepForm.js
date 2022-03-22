import React, {useState} from "react";
import {
	FaUserPlus,
	FaCalendarCheck,
	FaCalendarMinus,
} from "react-icons/fa";
import { pesoFormat } from "../utils/pesoFormat";
import {ReactComponent as Paymongo} from '../assets/svgs/paymongo.svg';

const MultiStepForm = ({ currStep, setCurrStep, closeModal }) => {
	const [payment, setPayment] = useState("paymongo")

	const handlePaymentChange = (e) => setPayment(e.target.value)

	return (
		<form className="form" spellCheck={false}>
			<div
				className={
					currStep === 1
						? "form__step form__step--1 form__step--current"
						: currStep - 1 === 1
						? "form__step form__step--1 form__step--previous"
						: "form__step form__step--1 form__step--next"
				}
			>
				<h2 className="form__heading">Choose your reservation</h2>
				<h4 className="form__subheading">Fill up based on your needs</h4>
					
				<div className="grid-2">
					<div className="form__group">
						<label className="form__label" htmlFor="checkin">
							Checkin
						</label>
						<div className="form__input-group">
							<input type="date" className="form__input" />
							<span className="form__input-icon">
								<FaCalendarCheck />
							</span>
						</div>
					</div>

					<div className="form__group">
						<label className="form__label" htmlFor="checkin">
							Checkout
						</label>
						<div className="form__input-group">
							<input type="date" className="form__input" />
							<span className="form__input-icon">
								<FaCalendarMinus />
							</span>
						</div>
					</div>
				</div>

				<div className="form__group">
					<label className="form__label" htmlFor="checkin">
						Number of Guest
					</label>
					<div className="form__input-group">
						<select type="text" className="form__input">
							<option value="1">1 guest</option>
							<option value="1">2 guests</option>
							<option value="1">3 guests</option>
							<option value="1">4 guests</option>
							<option value="1">5 guests</option>
						</select>
						<span className="form__input-icon">
							<FaUserPlus />
						</span>
					</div>
				</div>

				<div className="d-flex flex-center">
					<button
						type="button"
						className="form__action form__action--next"
						onClick={() => setCurrStep(2)}
					>
						next
					</button>
				</div>

				<hr />

				<div className="payment-preview">
					<div className="payment-preview__row">
						<span className="payment-preview__label">{`${pesoFormat(
							1200
						)} x 5 days`}</span>
						<span className="payment-preview__value">{pesoFormat(6000)}</span>
					</div>
					<div className="payment-preview__row">
						<span className="payment-preview__label">Cleaning Fee</span>
						<span className="payment-preview__value">{pesoFormat(500)}</span>
					</div>
					<div className="payment-preview__row">
						<span className="payment-preview__label">Service fee</span>
						<span className="payment-preview__value">{pesoFormat(900)}</span>
					</div>
					<div className="payment-preview__row">
						<span className="payment-preview__label payment-preview__label--bold">
							Total
						</span>
						<span className="payment-preview__value payment-preview__value--bold">
							{pesoFormat(7400)}
						</span>
					</div>
				</div>
			</div>

			<div
				className={
					currStep === 2
						? "form__step form__step--2 form__step--current"
						: currStep - 1 === 2
						? "form__step form__step--2 form__step--previous"
						: "form__step form__step--2 form__step--next"
				}
			>
				<h2 className="form__heading">Payment Method</h2>
				<h4 className="form__subheading">Select your preferred payment method.</h4>

				<div className="form__group">
					<span className="form__group-label">Payment</span>
					<div className="form__radio-group">
						<input
							type="radio"
							name="payment"
							value="paymongo"
							id="paymongo"
							className="form__radio-input"
							checked={payment === "paymongo"}
							onChange={handlePaymentChange}
						/>
						<label className="form__radio-label" htmlFor="paymongo">
							<span className="form__input-icon">
								<Paymongo className="form__input-icon--paymongo" />
							</span>
							Paymongo
						</label>
					</div>

					<div className="form__radio-group">
						<input
							type="radio"
							name="payment"
							value="creditcard"
							id="creditcard"
							className="form__radio-input"
							checked={payment === "creditcard"}
							onChange={handlePaymentChange}
						/>
						<label className="form__radio-label" htmlFor="creditcard">
							<span className="form__input-icon">
								<svg viewBox="0 0 20 20" className="visa-icon">
							        <use xlinkHref="/iconsprites.svg#icon-visa" />
							      </svg>
							</span>
							Credit Card
						</label>
					</div>

					<div className="form__radio-group">
						<input
							type="radio"
							name="payment"
							value="paypal"
							id="paypal"
							className="form__radio-input"
							checked={payment === "paypal"}
							onChange={handlePaymentChange}
						/>
						<label className="form__radio-label" htmlFor="paypal">
							<span className="form__input-icon">
								<svg viewBox="0 0 32 32" className="paypal-icon">
							        <use xlinkHref="/iconsprites.svg#icon-paypal" />
							      </svg>
							</span>
							PayPal
						</label>
					</div>
				</div>

				<div className="d-flex flex-center">
					<button
						type="button"
						className="form__action form__action--next"
						onClick={() => setCurrStep(3)}
					>
						next
					</button>
				</div>
			</div>

			<div
				className={
					currStep === 3
						? "form__step form__step--3 form__step--current"
						: currStep - 1 === 3
						? "form__step form__step--3 form__step--previous"
						: "form__step form__step--3 form__step--next"
				}
			>
				<div className="form__success-logo-wrapper">
					<i className="fa fa-circle-check form__success-logo"></i>
				</div>
				<h2 className="form__heading form__heading--success">Success!</h2>
				<h4 className="form__subheading form__subheading--success">Thank you, your reservation is successfully booked</h4>

				<div className="d-flex flex-center">
					<button
						type="button"
						className="form__action form__action--next"
						onClick={() => closeModal()}
					>
						Ok
					</button>
				</div>
			</div>
		</form>
	);
};

export default MultiStepForm;
