import img1_small from "./assets/images/img1-small.jpg"
import img1_medium from "./assets/images/img1-medium.jpg"
import img2_small from "./assets/images/img2-small.jpg"
import img2_medium from "./assets/images/img2-medium.jpg"
import img3_small from "./assets/images/img3-small.jpg"
import img3_medium from "./assets/images/img3-medium.jpg"

const hotels_resorts = [
	{
		id: 1,
		small: img1_small,
		medium: img1_medium, 
		type: "resort",
		name: "Sunrise Hotel & Resort",
		price: 15000,
		stars: "5.0"
	},
	{
		id: 2,
		small: img2_small,
		medium: img2_medium, 
		type: "resort",
		name: "Sundown Hotel & Resort",
		price: 20000,
		stars: 4.9
	},
	{
		id: 3,
		small: img3_small,
		medium: img3_medium, 
		type: "resort",
		name: "Midnight Hotel & Resort",
		price: 20000,
		stars: 4.9
	},
]

export default hotels_resorts