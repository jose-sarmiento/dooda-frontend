import React from "react";

const Steps = () => {
	return (
		<div className="steps-container">
			<div className="steps__progress"></div>
			<div className="steps">
				<div className="steps__step step--1">
					<i className="fa fa-magnifying-glass steps__icon steps__icon--1"></i>
					<h6 className="steps__description"><span className="steps__number">01</span>Search</h6>
				</div>
				<div className="steps__bar"></div>
				<div className="steps__step step--2">
					<i className="fa fa-dollar-sign steps__icon steps__icon--2"></i>
					<h6 className="steps__description"><span className="steps__number">02</span>Pay</h6>
				</div>
				<div className="steps__bar"></div>
				<div className="steps__step step--3">
					<i className="fa fa-check steps__icon steps__icon--3"></i>
					<h6 className="steps__description"><span className="steps__number">03</span>Success</h6>
				</div>
			</div>
		</div>
	);
};

export default Steps;
