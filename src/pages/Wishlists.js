import React, {useState} from 'react'
import {Link} from "react-router-dom"
import {FaExpandAlt} from "react-icons/fa"
import {BookItem} from "../components"

import img1 from "../assets/images/twinrock.jpg"
import img2 from "../assets/images/tr2.jpg"
import img3 from "../assets/images/tr3.jpg"
import map from "../assets/images/trmap.jpg"

const Wishlists = () => {
	const [favorites, setFavorites] = useState([		
		{
			id: 1,
			name: "Costa Palmera Resort",
			location: "Sto Domingo Albay",
			img: img1,
			date: "January 3 - 6, 2021",
			guest: 4,
			days: 5
		},
		{
			id: 2,
			name: "Mamangal Beach Resort",
			location: "Mamangal Virac, Catanduanes",
			img: img1,
			date: "January 3 - 6, 2021",
			guest: 4,
			days: 5
		},
	])

	const deleteHandler = id => setFavorites(favorites.filter(f => f.id !== id))

	return (
		<div className="recent">
			<div className="recent__header">
				<h1 className="recent__heading">Wishlists</h1>
				<button onClick={() => setFavorites([])}>clear all</button>
			</div>
			{favorites.map((r, idx) => <BookItem item={r} key={idx} type="favorite" deleteHandler={deleteHandler} />)}
		</div>
	)
}

export default Wishlists