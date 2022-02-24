import React from "react";
import { FaTimes, FaUserPlus, FaCalendarCheck, FaCalendarMinus } from "react-icons/fa";
import {pesoFormat} from "../utils/pesoFormat"

const Modal = ({ isOpenModal, close }) => {
	return (
		<div className={isOpenModal ? "modal modal--show" : "modal"}>
			<div className="modal__content">
				<div className="modal__header">
					<button className="modal__close" onClick={() => close()}>
						<FaTimes />
					</button>
				</div>
				<div className="modal__body">
					<form className="form" spellCheck={false}>
						<div className="form__step form__step--1">
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
									Guest
								</label>
								<div className="form__input-group">
									<input type="text" className="form__input" />
									<span className="form__input-icon">
										<FaUserPlus />
									</span>
								</div>
							</div>

							<div className="d-flex flex-center">
								<button className="form__action form__action--next">next</button>
							</div>

							<hr/>

							<div className="payment-preview">
								<div className="payment-preview__row">
									<span className="payment-preview__label">{`${pesoFormat(1200)} x 5 days`}</span>
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
							</div>
						</div>
					</form>
				</div>
				<div className="modal__footer"></div>
			</div>
		</div>
	);
};

export default Modal;
