import React from "react";
import {Link} from "react-router-dom"
import {FiTrash} from "react-icons/fi"
import Stars from "./Stars";

const BookItem = ({ item, type = "recent", deleteHandler }) => {
	const { id, img, name, location, date, guest, days } = item;

	return (
		<div className="book-item">
			<figure className="book-item__img-wrapper">
				<img src={img} alt={name} className="book-item__thumb" />
			</figure>
			<div className="book-item__middle">
				<Link to="/p/hotels/ey32e9837839" className="book-item__name">{name}</Link>
				<p>{location}</p>
				<p>
					5.0 <Stars />
				</p>
			</div>
			{type !== "favorite" ? (
				<div className="book-item__right">
					<p>{date}</p>
					<p>{`${guest} guest`}</p>
					<p>{`${days} days`}</p>
				</div>
			) : <button onClick={() => deleteHandler(id)}>
				<FiTrash/></button>}
		</div>
	);
};

export default BookItem;
