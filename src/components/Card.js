import React from "react";
import {Link} from "react-router-dom"
import { FaMapMarkerAlt } from "react-icons/fa";
import { pesoFormat } from "../utils/pesoFormat";
import Stars from "./Stars"

import useAppContext from "../hooks/useAppContext"

const Card = React.forwardRef((props, ref) => {
    const {data} = props
    const { openModal } = useAppContext()

    return (
        <div className="card fadein" ref={ ref || null}>
            <Link to={`/p/hotels/${data.id}`} className="card__img-wrapper">
                <img src={data.image.large} alt="img1" className="card__img" />
            </Link>
            <div className="card__header">
                <span className="card__price">{pesoFormat(data.price)}</span>
                <Stars count={data.stars} />
            </div>
            <div className="card__body">
                <div className="card__body-container">
                    <h3 className="card__name">{data.name.length > 50 ? data.name.slice(0, 50) + "..." : data.name}</h3>
                    <h6 className="card__location">
                        <FaMapMarkerAlt className="card__location-icon" />
                        {data.address.street + " " + data.address.city }
                    </h6>
                </div>
                <button className="btn btn--small btn--primary" onClick={() => openModal()}>Book now</button>
            </div>
        </div>
    );
});

export default Card;
