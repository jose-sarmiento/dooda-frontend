import img1_small from "../assets/images/img1-small-low-res.jpg"
import img2_small from "../assets/images/img2-small-low-res.jpg"
import img3_small from "../assets/images/img3-small-low-res.jpg"

const hotels = [
	{
		id: 1,
		small: img1_small,
		type: "resort",
		name: "Sunrise Hotel & Resort",
		price: 15000,
		address: "Batangas, Philippines",
		stars: "5.0"
	},
	{
		id: 2,
		small: img2_small,
		type: "resort",
		name: "Sundown Hotel & Resort",
		address: "Baguio, Philippines",
		price: 20000,
		stars: 4.9
	},
	{
		id: 3,
		small: img3_small,
		type: "resort",
		name: "Midnight Hotel & Resort",
		address: "Manila, Philippines",
		price: 20000,
		stars: 4.9
	},
]

export default hotels