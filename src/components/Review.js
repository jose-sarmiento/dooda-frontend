import React from "react";
import { FaStar } from "react-icons/fa";
import girl from "../assets/images/woman.jpg";

const Review = ({ small = false }) => {
    return (
        <div className={small ? "review review--sm" : "review"}>
            <div className="review__left">
                <figure className="review__img-wrapper">
                    <img src={girl} alt="girl" className="review__img" />
                </figure>
                <h4 className="review__name">Jane Doe</h4>
                <h6 className="review__job">Tourist</h6>
            </div>

            <div className="review__content">
                <div className="review__stars">
                    <div>
                        <FaStar className="review__star" />
                        <FaStar className="review__star" />
                        <FaStar className="review__star" />
                        <FaStar className="review__star" />
                        <FaStar className="review__star" />
                    </div>
                    <span className="review__rating">5.0</span>
                </div>
                <h4 className="review__heading">Client reviews</h4>
                <div className="review__review">
                    <i className="fa fa-quote-left review__quote review__quote--left"></i>
                    <i className="fa fa-quote-right review__quote review__quote--right"></i>
                    <p className="review__text">
                        {small
                            ? "The Dooda team represents among the highest levels of customer service I have experienced. Information was accurate, responses to queries were turned around very fast. "
                            : "The Dooda team represents among the highest levels of customer service have experienced. Information was accurate, responses to queries were turned around very fast. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non officia ipsa quia sunt, aut fugiat ipsam, voluptates autem perspiciatis voluptatibus commodi placeat praesentium vero provident eius ea, et possimus blanditiis."}
                    </p>
                </div>
                <div className="review__trackers">
                    <span className="review__tracker"></span>
                    <span className="review__tracker review__tracker--active"></span>
                    <span className="review__tracker"></span>
                </div>
            </div>

            {small && (
                <a href="#" className="review__see-all btn--direction">
                    See all
                    <i className="fa fa-arrow-right-long btn--direction__icon"></i>
                </a>
            )}
        </div>
    );
};

export default Review;
