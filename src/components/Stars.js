import React from 'react'
import {FaStar} from "react-icons/fa"

const Stars = ({count}) => {
	return (
		<span className="stars">
            <FaStar className="stars__star" />
            <FaStar className="stars__star" />
            <FaStar className="stars__star" />
            <FaStar className="stars__star" />
            <FaStar className="stars__star" />
            {/*<span className="stars__average">
                ({count})
            </span>*/}
        </span>
	)
}

export default Stars