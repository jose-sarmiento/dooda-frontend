const houses = [
	{
		id: "f5b55604-9371-4818-92cf-a3275cf9e331",
		name: "House Lights Turned on",
		image: {
			original: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
			large2x:
				"https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Green, Abshire and Kuhlman",
		price: 1593,
		address: {
			street: "Dare Shoals",
			city: "North Jarred",
			country: "Micronesia",
			latitude: "-65.6005",
			longitude: "-177.8091",
		},
		stars: 5,
	},
	{
		id: "98251295-3b11-48d3-9fd7-025f08237849",
		name: "Blue and Gray Concrete House With Attic during Twilight",
		image: {
			original: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg",
			large2x:
				"https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Jast and Sons",
		price: 1621,
		address: {
			street: "Hickle Freeway",
			city: "Schuppetown",
			country: "Saint Martin",
			latitude: "13.9204",
			longitude: "91.4168",
		},
		stars: 3,
	},
	{
		id: "50808244-b21e-478e-b084-f9c24fbc29a0",
		name: "Modern Building Against Sky",
		image: {
			original: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
			large2x:
				"https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "O'Conner Group",
		price: 9964,
		address: {
			street: "Ondricka Circle",
			city: "Irvine",
			country: "Colombia",
			latitude: "31.6728",
			longitude: "-105.2141",
		},
		stars: 5,
	},
	{
		id: "b359e6e5-83a1-46e4-9d36-90216a0aa60e",
		name: "Brown and Gray Painted House in Front of Road",
		image: {
			original: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
			large2x:
				"https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Doyle and Sons",
		price: 13665,
		address: {
			street: "Retta Drive",
			city: "South Christian",
			country: "Fiji",
			latitude: "51.9750",
			longitude: "-33.4827",
		},
		stars: 3,
	},
	{
		id: "a170d1d7-7f62-48a0-a488-cde6a930dccb",
		name: "Black Handled Key on Key Hole",
		image: {
			original: "https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg",
			large2x:
				"https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Altenwerth - Rolfson",
		price: 2278,
		address: {
			street: "Garrison Plain",
			city: "Bradlyshire",
			country: "China",
			latitude: "-66.0762",
			longitude: "-56.5946",
		},
		stars: 3,
	},
	{
		id: "36d59754-e326-491a-85d3-93c31edafd35",
		name: "Beige Bungalow House",
		image: {
			original: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
			large2x:
				"https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Lesch, Donnelly and Cronin",
		price: 3471,
		address: {
			street: "Streich Springs",
			city: "Maymiemouth",
			country: "Nigeria",
			latitude: "64.2308",
			longitude: "99.1297",
		},
		stars: 3,
	},
	{
		id: "4f3ed71f-8f9b-40dc-a74e-a0854d0ad812",
		name: "Yellow Concrete House",
		image: {
			original: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg",
			large2x:
				"https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Wyman Group",
		price: 12944,
		address: {
			street: "Christiansen Stream",
			city: "West Eliane",
			country: "Gambia",
			latitude: "-59.5763",
			longitude: "-33.5099",
		},
		stars: 3,
	},
	{
		id: "c0553972-08f3-4c08-85a2-70afa7289868",
		name: "White and Red Wooden House With Fence",
		image: {
			original: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg",
			large2x:
				"https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Kilback Group",
		price: 11854,
		address: {
			street: "Lebsack Plaza",
			city: "East Milfordfort",
			country: "Palestinian Territory",
			latitude: "-33.8189",
			longitude: "-106.0154",
		},
		stars: 3,
	},
	{
		id: "97cbea20-d0c2-4131-a7c1-1007283d124d",
		name: "Brown and White Wooden House",
		image: {
			original: "https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg",
			large2x:
				"https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Rath - Klocko",
		price: 10486,
		address: {
			street: "Virginie Creek",
			city: "South Elmer",
			country: "Christmas Island",
			latitude: "24.5458",
			longitude: "-22.6354",
		},
		stars: 3,
	},
	{
		id: "f7f18517-1120-45b4-8ce4-76cff7a49983",
		name: "Turned-off Flat Screen Tv",
		image: {
			original: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
			large2x:
				"https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Dooley and Sons",
		price: 6636,
		address: {
			street: "Rath Passage",
			city: "Daly City",
			country: "Nepal",
			latitude: "-62.7730",
			longitude: "-146.1297",
		},
		stars: 3,
	},
	{
		id: "45ce08a8-e751-439c-b4bd-6d34cab948f8",
		name: "Staircase Area",
		image: {
			original: "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg",
			large2x:
				"https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Dare - Lemke",
		price: 8024,
		address: {
			street: "Stroman Passage",
			city: "Enostown",
			country: "Latvia",
			latitude: "-82.0081",
			longitude: "148.0826",
		},
		stars: 5,
	},
	{
		id: "8de6c5a7-8f0e-453d-b622-75621041395a",
		name: "White Wooden 2-storey House Near Tree",
		image: {
			original: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
			large2x:
				"https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Beahan - Ebert",
		price: 5709,
		address: {
			street: "Brown Prairie",
			city: "Erie",
			country: "Saint Helena",
			latitude: "69.0105",
			longitude: "38.7954",
		},
		stars: 5,
	},
	{
		id: "36e35a4d-f763-41fa-964b-2165504217bd",
		name: "Four Brown Wooden Chairs",
		image: {
			original: "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg",
			large2x:
				"https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Dietrich Group",
		price: 13385,
		address: {
			street: "Willms Causeway",
			city: "Feltonfurt",
			country: "Serbia",
			latitude: "-86.0550",
			longitude: "-1.1130",
		},
		stars: 3,
	},
	{
		id: "88c980f2-927e-4e63-bebe-258474c4bb5b",
		name: "Flat Screen Monitor on Wall Near Sofa Set",
		image: {
			original: "https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg",
			large2x:
				"https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Wilkinson - Lindgren",
		price: 6548,
		address: {
			street: "Melvina Brooks",
			city: "Padbergside",
			country: "Qatar",
			latitude: "-8.7245",
			longitude: "89.6785",
		},
		stars: 5,
	},
	{
		id: "8ef0a77e-a5f6-4107-9c4b-e793ef69132a",
		name: "White 2-storey House Near Trees",
		image: {
			original: "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg",
			large2x:
				"https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Bins - Reichel",
		price: 3715,
		address: {
			street: "Ike Walk",
			city: "Palatine",
			country: "Germany",
			latitude: "69.3949",
			longitude: "159.3933",
		},
		stars: 5,
	},
	{
		id: "1bcc9159-d26c-4454-b258-6996cc0af4ea",
		name: "Beige Concrete House Under Cumulus Cloud",
		image: {
			original: "https://images.pexels.com/photos/358636/pexels-photo-358636.jpeg",
			large2x:
				"https://images.pexels.com/photos/358636/pexels-photo-358636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/358636/pexels-photo-358636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/358636/pexels-photo-358636.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/358636/pexels-photo-358636.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/358636/pexels-photo-358636.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/358636/pexels-photo-358636.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/358636/pexels-photo-358636.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Marks - Watsica",
		price: 5701,
		address: {
			street: "Otha Tunnel",
			city: "Schusterfurt",
			country: "Singapore",
			latitude: "4.7493",
			longitude: "159.6405",
		},
		stars: 3,
	},
	{
		id: "23e23aa3-5579-4789-93e7-5244c97afd8b",
		name: "Brown Wooden Center Table",
		image: {
			original:
				"https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg",
			large2x:
				"https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Morar LLC",
		price: 13556,
		address: {
			street: "Leannon Roads",
			city: "Keelingmouth",
			country: "Poland",
			latitude: "57.8421",
			longitude: "-41.2182",
		},
		stars: 3,
	},
	{
		id: "3c7f3bba-e8fb-4854-8bf5-c7b0620c980e",
		name: "Kitchen Island",
		image: {
			original: "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg",
			large2x:
				"https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Gerhold, Erdman and Feeney",
		price: 6148,
		address: {
			street: "Raynor Roads",
			city: "Hattiefort",
			country: "India",
			latitude: "2.3435",
			longitude: "53.6394",
		},
		stars: 4,
	},
	{
		id: "cadfb663-b360-409d-88b8-39f20302a920",
		name: "Lighted Beige House",
		image: {
			original: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg",
			large2x:
				"https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Will and Sons",
		price: 7770,
		address: {
			street: "America Groves",
			city: "Port Keshawn",
			country: "Tonga",
			latitude: "-41.0753",
			longitude: "-61.8141",
		},
		stars: 4,
	},
	{
		id: "7504f234-01a3-42db-baaa-fa43717a5811",
		name: "Microphotography of Orange and Blue House Miniature on Brown Snail's Back",
		image: {
			original: "https://images.pexels.com/photos/955793/pexels-photo-955793.jpeg",
			large2x:
				"https://images.pexels.com/photos/955793/pexels-photo-955793.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/955793/pexels-photo-955793.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/955793/pexels-photo-955793.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/955793/pexels-photo-955793.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/955793/pexels-photo-955793.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/955793/pexels-photo-955793.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/955793/pexels-photo-955793.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Considine, Cassin and Padberg",
		price: 11323,
		address: {
			street: "Wendell Pine",
			city: "Ocala",
			country: "Christmas Island",
			latitude: "-36.7968",
			longitude: "172.7308",
		},
		stars: 5,
	},
	{
		id: "a1fd6f32-0bf9-4247-b3ce-2de02fb1ed9e",
		name: "White and Gray Wooden House Near Grass Field and Trees",
		image: {
			original: "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg",
			large2x:
				"https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Morar - Hintz",
		price: 11919,
		address: {
			street: "Kreiger Drive",
			city: "Port Marcelinofort",
			country: "Chad",
			latitude: "59.4621",
			longitude: "-119.7147",
		},
		stars: 4,
	},
	{
		id: "1a93fa85-5605-42ea-9799-4a4cfed71dbd",
		name: "White Concrete 2-storey House",
		image: {
			original: "https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg",
			large2x:
				"https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "McLaughlin LLC",
		price: 12139,
		address: {
			street: "Luettgen Mountain",
			city: "South Genovevabury",
			country: "Trinidad and Tobago",
			latitude: "-74.0911",
			longitude: "-67.6988",
		},
		stars: 4,
	},
	{
		id: "e1a42919-c81a-4bcc-84ab-91e19e1d0cf0",
		name: "White Wooden Cupboards",
		image: {
			original: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg",
			large2x:
				"https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Hintz - Cronin",
		price: 11979,
		address: {
			street: "Vida Hollow",
			city: "Fort Lauderdale",
			country: "Japan",
			latitude: "68.4909",
			longitude: "100.2049",
		},
		stars: 4,
	},
	{
		id: "e54f767b-447f-4f53-801b-d7227cbdebf3",
		name: "Gray House With Fireplace Surrounded by Grass Under White and Gray Cloudy Sky",
		image: {
			original: "https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg",
			large2x:
				"https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Kassulke - Quitzon",
		price: 5497,
		address: {
			street: "Heaney Shoal",
			city: "West Raquelside",
			country: "Philippines",
			latitude: "-71.9113",
			longitude: "-83.3268",
		},
		stars: 4,
	},
	{
		id: "daaaf66b-ea64-4b50-a7de-52d2ed049617",
		name: "House ",
		image: {
			original: "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg",
			large2x:
				"https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Mitchell Group",
		price: 14051,
		address: {
			street: "Lind Avenue",
			city: "Port Tomasaton",
			country: "China",
			latitude: "57.4852",
			longitude: "89.5839",
		},
		stars: 4,
	},
	{
		id: "4f69de01-e245-49cb-b729-19c4f316dd1e",
		name: "White and Brown House",
		image: {
			original: "https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg",
			large2x:
				"https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Sanford - Jenkins",
		price: 6833,
		address: {
			street: "Schmeler Plaza",
			city: "New Annette",
			country: "Isle of Man",
			latitude: "-17.9696",
			longitude: "72.2513",
		},
		stars: 5,
	},
	{
		id: "518eec65-7afd-4f53-94e0-9c3dab5bbf00",
		name: "Concrete House during Day",
		image: {
			original: "https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg",
			large2x:
				"https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Batz, Luettgen and Lind",
		price: 4468,
		address: {
			street: "Alford Stream",
			city: "South Arnoldo",
			country: "Moldova",
			latitude: "-58.3205",
			longitude: "-173.9751",
		},
		stars: 4,
	},
	{
		id: "a3953cae-c131-4b36-bc58-122556ff3105",
		name: "White Couch Near Black Mat",
		image: {
			original: "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg",
			large2x:
				"https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Dach - Goodwin",
		price: 11121,
		address: {
			street: "Stanton Ways",
			city: "Kemmermouth",
			country: "Svalbard & Jan Mayen Islands",
			latitude: "-72.8698",
			longitude: "151.6683",
		},
		stars: 5,
	},
	{
		id: "2c81d98b-0b19-466c-884d-34a8777cb6fe",
		name: "Brown and Beige Wooden House Under Blue Sky",
		image: {
			original: "https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg",
			large2x:
				"https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Grady, Corwin and Heathcote",
		price: 14328,
		address: {
			street: "Okuneva Burgs",
			city: "East Davionmouth",
			country: "Norfolk Island",
			latitude: "-80.3151",
			longitude: "2.7427",
		},
		stars: 5,
	},
	{
		id: "5cd10823-d4e4-4ecd-a4f1-a6e2f506dc4d",
		name: "Armchair Near Table and Ottoman",
		image: {
			original: "https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg",
			large2x:
				"https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Schaefer - Osinski",
		price: 2014,
		address: {
			street: "Jermey Shore",
			city: "Port Rickie",
			country: "Uzbekistan",
			latitude: "18.5557",
			longitude: "-154.1370",
		},
		stars: 4,
	},
	{
		id: "de2927fe-c8a3-46b0-9e29-8a86f9eac973",
		name: "Beautiful Wooden Houses with Lawns",
		image: {
			original: "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg",
			large2x:
				"https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Pacocha - Rolfson",
		price: 13239,
		address: {
			street: "Abernathy Stravenue",
			city: "North Adamouth",
			country: "Turkmenistan",
			latitude: "-61.1209",
			longitude: "-127.2395",
		},
		stars: 4,
	},
	{
		id: "31b848d4-0eb6-47d1-b278-89a0f5684d9a",
		name: "White and Brown Concrete Helix Stairs",
		image: {
			original: "https://images.pexels.com/photos/210464/pexels-photo-210464.jpeg",
			large2x:
				"https://images.pexels.com/photos/210464/pexels-photo-210464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/210464/pexels-photo-210464.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/210464/pexels-photo-210464.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/210464/pexels-photo-210464.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/210464/pexels-photo-210464.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/210464/pexels-photo-210464.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/210464/pexels-photo-210464.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Monahan Inc",
		price: 10755,
		address: {
			street: "Raynor Landing",
			city: "South Blair",
			country: "Greece",
			latitude: "29.9777",
			longitude: "7.0207",
		},
		stars: 5,
	},
	{
		id: "8df96c58-9814-4521-9dfb-7957548feeb1",
		name: "Low Angle Photo of Balconies",
		image: {
			original: "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg",
			large2x:
				"https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Corkery and Sons",
		price: 3360,
		address: {
			street: "Tre Mall",
			city: "New Caesar",
			country: "Equatorial Guinea",
			latitude: "-1.9438",
			longitude: "-147.9151",
		},
		stars: 3,
	},
	{
		id: "2d8e9dfb-fa51-426e-8143-8b5823bd4b8a",
		name: "White Single-story Houses Beside Body of Water",
		image: {
			original: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg",
			large2x:
				"https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Schinner Inc",
		price: 6579,
		address: {
			street: "Idell Circle",
			city: "New Zelma",
			country: "Lesotho",
			latitude: "-71.0544",
			longitude: "-172.2778",
		},
		stars: 5,
	},
	{
		id: "988652cc-c0e5-467f-87a5-a8f305ba7859",
		name: "High Angle Shot of Suburban Neighborhood",
		image: {
			original: "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg",
			large2x:
				"https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Stracke - Stamm",
		price: 12822,
		address: {
			street: "Ebba Walk",
			city: "Lake Janick",
			country: "Georgia",
			latitude: "-9.2767",
			longitude: "76.1268",
		},
		stars: 4,
	},
	{
		id: "d8fe94ba-0f6d-4451-8935-b52309009999",
		name: "Black Kettle Beside Condiment Shakers and Green Fruits and Plants on Tray on Brown Wooden Table",
		image: {
			original: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg",
			large2x:
				"https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Nicolas Group",
		price: 2389,
		address: {
			street: "Dare Stream",
			city: "Paucekshire",
			country: "Greece",
			latitude: "-70.9466",
			longitude: "-11.2968",
		},
		stars: 3,
	},
	{
		id: "4b797c93-5d4e-4440-bc31-05cd8de4fb8f",
		name: "Brown and Red Birdhouse",
		image: {
			original: "https://images.pexels.com/photos/2640604/pexels-photo-2640604.jpeg",
			large2x:
				"https://images.pexels.com/photos/2640604/pexels-photo-2640604.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/2640604/pexels-photo-2640604.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/2640604/pexels-photo-2640604.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/2640604/pexels-photo-2640604.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/2640604/pexels-photo-2640604.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/2640604/pexels-photo-2640604.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/2640604/pexels-photo-2640604.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Bosco Group",
		price: 1608,
		address: {
			street: "Mazie Rapids",
			city: "Imaniland",
			country: "United Arab Emirates",
			latitude: "33.3025",
			longitude: "25.0068",
		},
		stars: 5,
	},
	{
		id: "47102b7b-c608-4ac8-b296-7f04a534b64c",
		name: "Gray Painted House",
		image: {
			original: "https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg",
			large2x:
				"https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Sawayn LLC",
		price: 6964,
		address: {
			street: "Carroll Circles",
			city: "Lauderhill",
			country: "Turkey",
			latitude: "19.5307",
			longitude: "-68.5977",
		},
		stars: 4,
	},
	{
		id: "f73f7e52-08ad-4e27-a230-65df463175a2",
		name: "Brown and White House Beside Trees",
		image: {
			original: "https://images.pexels.com/photos/259751/pexels-photo-259751.jpeg",
			large2x:
				"https://images.pexels.com/photos/259751/pexels-photo-259751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/259751/pexels-photo-259751.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/259751/pexels-photo-259751.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/259751/pexels-photo-259751.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/259751/pexels-photo-259751.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/259751/pexels-photo-259751.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/259751/pexels-photo-259751.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Stroman, Reilly and Bergstrom",
		price: 4452,
		address: {
			street: "Freddy Oval",
			city: "Ziemannchester",
			country: "Maldives",
			latitude: "-57.3280",
			longitude: "-77.4484",
		},
		stars: 4,
	},
	{
		id: "8dd2e442-c3e2-41e7-95c7-bf6c75f99c83",
		name: "House Near Lake",
		image: {
			original: "https://images.pexels.com/photos/2098405/pexels-photo-2098405.jpeg",
			large2x:
				"https://images.pexels.com/photos/2098405/pexels-photo-2098405.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/2098405/pexels-photo-2098405.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/2098405/pexels-photo-2098405.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/2098405/pexels-photo-2098405.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/2098405/pexels-photo-2098405.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/2098405/pexels-photo-2098405.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/2098405/pexels-photo-2098405.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Prohaska - Berge",
		price: 6192,
		address: {
			street: "Quinten Islands",
			city: "Kobeport",
			country: "Equatorial Guinea",
			latitude: "-12.1559",
			longitude: "21.3851",
		},
		stars: 3,
	},
];

export default houses;
