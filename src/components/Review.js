import React from 'react'
import {FaStar} from "react-icons/fa"
import girl from "../assets/images/woman.jpg"

const Review = () => {
	return (
       <div className="reviews">
         <div className="review">
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
                  <FaStar className="review__star"/>
                  <FaStar className="review__star"/>
                  <FaStar className="review__star"/>
                  <FaStar className="review__star"/>
                  <FaStar className="review__star"/>
                </div>
                <span className="review__rating">5.0</span>
              </div> 
              <h4 className="review__heading">Client reviews</h4>
              <div className="review__review">
                <i className="fa fa-quote-left review__quote review__quote--left"></i>
                <i className="fa fa-quote-right review__quote review__quote--right"></i>
                 <p className="review__text">
                   The Dooda team represents among the highest levels of customer service I have experienced. Information was accurate, responses to queries were turned around very fast. Answers were clear and where necessary detailed enough for us to make informed decisions quickly, minimising the end to end time to process complex transactions among a number of parties.
                 </p>
              </div>
              <div className="review__trackers">
                <span className="review__tracker"></span>
                <span className="review__tracker review__tracker--active"></span>
                <span className="review__tracker"></span>
              </div>
           </div>
         </div>
       </div>
	)
}

export default Review