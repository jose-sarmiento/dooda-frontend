import React from "react";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import { pesoFormat } from "../utils/pesoFormat";

const Card = ({ data }) => {
    return (
        <div className="card">
            <figure className="card__img-wrapper">
                <img src={data.small} alt="img1" className="card__img" />
            </figure>
            <div className="card__header">
                <span className="card__price">{pesoFormat(data.price)}</span>
                <span className="card__stars">
                    <FaStar className="card__star" />
                    <FaStar className="card__star" />
                    <FaStar className="card__star" />
                    <FaStar className="card__star" />
                    <FaStar className="card__star" />
                    <span className="card__stars__average">
                        ({" " + data.stars})
                    </span>
                </span>
            </div>
            <div className="card__body d-flex flex-between">
                <div>
                    <h3 className="card__name">{data.name}</h3>
                    <h6 className="card__location">
                        <FaMapMarkerAlt className="card__location-icon" />
                        {data.address}
                    </h6>
                </div>
                <button className="btn btn--small btn--primary">Book now</button>
            </div>
        </div>
    );
};

export default Card;
