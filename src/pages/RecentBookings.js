import React from 'react'
import {Link} from "react-router-dom"
import {FaExpandAlt} from "react-icons/fa"
import {BookItem} from "../components"

import img1 from "../assets/images/twinrock.jpg"
import img2 from "../assets/images/tr2.jpg"
import img3 from "../assets/images/tr3.jpg"
import map from "../assets/images/trmap.jpg"

const RecentBookings = () => {
	const recent = [
		{
			name: "Ellis Ecotel",
			location: "Oro Site, Legazpi",
			img: img1,
			date: "February 20 - 26, 2022",
			guest: 2,
			price: 4390
		},
		{
			name: "Costa Palmera Resort",
			location: "Sto Domingo Albay",
			img: img1,
			date: "January 3 - 6, 2021",
			guest: 4,
			price: 7620
		},
	]

	return (
		<div className="recent">
			<div className="recent__header">
				<h1 className="recent__heading">Recent Bookings</h1>
			</div>
			{recent.map((r, idx) => <BookItem item={r} key={idx} />)}
		</div>
	)
}

export default RecentBookings