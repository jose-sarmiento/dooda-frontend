const hotels = [
	{
		id: "f02fab9a-f72c-44c1-8616-99dd5f5a40e0",
		name: "Black and Grey Bedspread on Bed and Pillow",
		image: {
			original: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
			large2x:
				"https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Willms - Halvorson",
		price: 11844,
		address: {
			street: "Guido Grove",
			city: "Torranceside",
			country: "Somalia",
			latitude: "65.0328",
			longitude: "162.1144",
		},
		stars: 4,
	},
	{
		id: "074cdc15-a53e-4dad-8081-c17864be957e",
		name: "Bedroom Interior Setup",
		image: {
			original: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
			large2x:
				"https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Stanton - Hettinger",
		price: 9745,
		address: {
			street: "Russel Mountains",
			city: "Levittown",
			country: "Holy See (Vatican City State)",
			latitude: "-35.1873",
			longitude: "-10.6056",
		},
		stars: 3,
	},
	{
		id: "c435dbd7-4072-4eba-9f9a-0d566763d7ab",
		name: "White Bed Cover Near Wall",
		image: {
			original: "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg",
			large2x:
				"https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Spencer and Sons",
		price: 14344,
		address: {
			street: "Dayne Village",
			city: "Stiedemannview",
			country: "Grenada",
			latitude: "-17.8969",
			longitude: "-35.1934",
		},
		stars: 3,
	},
	{
		id: "44db2f0f-d78c-4bf1-acf6-45787469818b",
		name: "A Romantic Setting In The Bathroom",
		image: {
			original: "https://images.pexels.com/photos/4099354/pexels-photo-4099354.jpeg",
			large2x:
				"https://images.pexels.com/photos/4099354/pexels-photo-4099354.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/4099354/pexels-photo-4099354.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/4099354/pexels-photo-4099354.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/4099354/pexels-photo-4099354.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/4099354/pexels-photo-4099354.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/4099354/pexels-photo-4099354.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/4099354/pexels-photo-4099354.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Gerhold, Runolfsdottir and O'Connell",
		price: 9544,
		address: {
			street: "Alf Keys",
			city: "East Camdenside",
			country: "Estonia",
			latitude: "53.2970",
			longitude: "-112.6550",
		},
		stars: 4,
	},
	{
		id: "dbecef07-bf31-4516-8c87-7bb0a03a55c4",
		name: "Woman Laying Down on Bed Inside Room",
		image: {
			original: "https://images.pexels.com/photos/2417842/pexels-photo-2417842.jpeg",
			large2x:
				"https://images.pexels.com/photos/2417842/pexels-photo-2417842.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/2417842/pexels-photo-2417842.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/2417842/pexels-photo-2417842.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/2417842/pexels-photo-2417842.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/2417842/pexels-photo-2417842.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/2417842/pexels-photo-2417842.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/2417842/pexels-photo-2417842.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Bosco - Stoltenberg",
		price: 4778,
		address: {
			street: "Cartwright Manor",
			city: "Milford",
			country: "Brazil",
			latitude: "52.7250",
			longitude: "107.9055",
		},
		stars: 4,
	},
	{
		id: "81bff3e5-255e-4d9a-b016-f82f81c561b0",
		name: "Cozy Outdoor Space",
		image: {
			original: "https://images.pexels.com/photos/4112236/pexels-photo-4112236.jpeg",
			large2x:
				"https://images.pexels.com/photos/4112236/pexels-photo-4112236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/4112236/pexels-photo-4112236.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/4112236/pexels-photo-4112236.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/4112236/pexels-photo-4112236.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/4112236/pexels-photo-4112236.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/4112236/pexels-photo-4112236.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/4112236/pexels-photo-4112236.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Pouros Inc",
		price: 13447,
		address: {
			street: "Towne Row",
			city: "Guaynabo",
			country: "Belarus",
			latitude: "71.5240",
			longitude: "58.5953",
		},
		stars: 5,
	},
	{
		id: "bffdbbd9-277a-468d-82fa-6b6a8c83f43c",
		name: "Person Holding on Door Lever Inside Room",
		image: {
			original: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg",
			large2x:
				"https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Huels - Goodwin",
		price: 7995,
		address: {
			street: "Alycia Squares",
			city: "Stoltenbergview",
			country: "Czech Republic",
			latitude: "4.1304",
			longitude: "164.2041",
		},
		stars: 5,
	},
	{
		id: "26439ae9-7a76-4338-8bf0-14a7d25953c1",
		name: "Black Mattress in Front of a Large Window Behind a Mountain",
		image: {
			original: "https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg",
			large2x:
				"https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Mraz Group",
		price: 2514,
		address: {
			street: "Maxine Path",
			city: "Schaeferfurt",
			country: "Sudan",
			latitude: "-15.1583",
			longitude: "129.1628",
		},
		stars: 3,
	},
	{
		id: "1494dabf-a2cd-4acf-97e1-8b17834390ba",
		name: "Bed with pillows in light room",
		image: {
			original: "https://images.pexels.com/photos/4992451/pexels-photo-4992451.jpeg",
			large2x:
				"https://images.pexels.com/photos/4992451/pexels-photo-4992451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/4992451/pexels-photo-4992451.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/4992451/pexels-photo-4992451.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/4992451/pexels-photo-4992451.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/4992451/pexels-photo-4992451.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/4992451/pexels-photo-4992451.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/4992451/pexels-photo-4992451.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Balistreri LLC",
		price: 4815,
		address: {
			street: "Kshlerin Field",
			city: "Bayerport",
			country: "Falkland Islands (Malvinas)",
			latitude: "71.9702",
			longitude: "177.1520",
		},
		stars: 4,
	},
	{
		id: "41690254-cac2-4bda-9ee1-2ae42db26920",
		name: "Bathroom Interior",
		image: {
			original: "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg",
			large2x:
				"https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Osinski - Hudson",
		price: 4666,
		address: {
			street: "Rosenbaum Orchard",
			city: "Port Margotport",
			country: "United Arab Emirates",
			latitude: "-33.1825",
			longitude: "-145.2773",
		},
		stars: 3,
	},
	{
		id: "c0b063bf-38ad-4829-8768-c94b946565e3",
		name: "Empty Bar Filled With Lights",
		image: {
			original: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg",
			large2x:
				"https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Stehr, Kerluke and Stiedemann",
		price: 6536,
		address: {
			street: "Tiana Isle",
			city: "Orland Park",
			country: "Peru",
			latitude: "-69.8864",
			longitude: "179.8757",
		},
		stars: 5,
	},
	{
		id: "2c003190-c448-4b3c-bd4e-83820c16b56a",
		name: "White Curtains on Window Wall",
		image: {
			original: "https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg",
			large2x:
				"https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Kris - Kautzer",
		price: 2420,
		address: {
			street: "Jerde Drives",
			city: "East Ozellaborough",
			country: "Malta",
			latitude: "33.1053",
			longitude: "-83.8605",
		},
		stars: 5,
	},
	{
		id: "a3decf97-be17-4322-8e1c-37b426a81996",
		name: "Cozy tent with bed and terrace on beach",
		image: {
			original: "https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg",
			large2x:
				"https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Johns Inc",
		price: 14284,
		address: {
			street: "Wolff Avenue",
			city: "North Groverstad",
			country: "Egypt",
			latitude: "35.8434",
			longitude: "-5.1446",
		},
		stars: 5,
	},
	{
		id: "46279552-8718-472e-9b78-87c2890458c3",
		name: "Flat Screen Tv",
		image: {
			original: "https://images.pexels.com/photos/2659629/pexels-photo-2659629.jpeg",
			large2x:
				"https://images.pexels.com/photos/2659629/pexels-photo-2659629.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/2659629/pexels-photo-2659629.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/2659629/pexels-photo-2659629.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/2659629/pexels-photo-2659629.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/2659629/pexels-photo-2659629.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/2659629/pexels-photo-2659629.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/2659629/pexels-photo-2659629.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Brakus - Barrows",
		price: 7898,
		address: {
			street: "Gorczany Mews",
			city: "Camillemouth",
			country: "United Arab Emirates",
			latitude: "43.6884",
			longitude: "-167.1487",
		},
		stars: 4,
	},
	{
		id: "1912a62b-5a38-4f98-ba9a-846e724404a8",
		name: "Comfort Room Area",
		image: {
			original: "https://images.pexels.com/photos/3315291/pexels-photo-3315291.jpeg",
			large2x:
				"https://images.pexels.com/photos/3315291/pexels-photo-3315291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/3315291/pexels-photo-3315291.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/3315291/pexels-photo-3315291.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/3315291/pexels-photo-3315291.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/3315291/pexels-photo-3315291.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/3315291/pexels-photo-3315291.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/3315291/pexels-photo-3315291.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Zulauf Group",
		price: 14744,
		address: {
			street: "Eudora Union",
			city: "Lamontmouth",
			country: "Papua New Guinea",
			latitude: "51.9522",
			longitude: "-64.4530",
		},
		stars: 4,
	},
	{
		id: "9f924936-bcf2-4135-a91b-41e73ad9fd52",
		name: "Empty Dining Tables and Chairs",
		image: {
			original: "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg",
			large2x:
				"https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Batz, Batz and Tromp",
		price: 1646,
		address: {
			street: "Will Camp",
			city: "Sawaynton",
			country: "Panama",
			latitude: "65.2698",
			longitude: "104.5868",
		},
		stars: 3,
	},
	{
		id: "9a1c3963-ba6f-4491-9cab-aab1fdd8e670",
		name: "Black Laptop Placed on Table",
		image: {
			original: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg",
			large2x:
				"https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Mayer, Legros and Kilback",
		price: 14831,
		address: {
			street: "Aric Ferry",
			city: "West Audreanneville",
			country: "Cambodia",
			latitude: "-48.0600",
			longitude: "-179.6012",
		},
		stars: 3,
	},
	{
		id: "866a7534-d8a2-46cc-b8fe-a6a2ce3dd359",
		name: "Two Round Pendant Lamps in Cafeteria",
		image: {
			original: "https://images.pexels.com/photos/827528/pexels-photo-827528.jpeg",
			large2x:
				"https://images.pexels.com/photos/827528/pexels-photo-827528.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/827528/pexels-photo-827528.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/827528/pexels-photo-827528.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/827528/pexels-photo-827528.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/827528/pexels-photo-827528.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/827528/pexels-photo-827528.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/827528/pexels-photo-827528.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Heller - Smith",
		price: 1984,
		address: {
			street: "Deon Manors",
			city: "North Raegan",
			country: "Andorra",
			latitude: "76.8242",
			longitude: "-86.3632",
		},
		stars: 3,
	},
	{
		id: "cde96048-9202-46b3-8e26-c471305c650e",
		name: "Cozy bed with crumpled sheet and pillows near nightstand with textbooks and lamp in bedroom",
		image: {
			original: "https://images.pexels.com/photos/4577650/pexels-photo-4577650.jpeg",
			large2x:
				"https://images.pexels.com/photos/4577650/pexels-photo-4577650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/4577650/pexels-photo-4577650.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/4577650/pexels-photo-4577650.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/4577650/pexels-photo-4577650.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/4577650/pexels-photo-4577650.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/4577650/pexels-photo-4577650.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/4577650/pexels-photo-4577650.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Howell and Sons",
		price: 12526,
		address: {
			street: "Davis Shoals",
			city: "Rialto",
			country: "Iran",
			latitude: "-82.1877",
			longitude: "167.5112",
		},
		stars: 3,
	},
	{
		id: "9cb7ffd0-51be-493a-bbe2-32416bb94c78",
		name: "Dark Hotel Room with Curtains Drawn",
		image: {
			original: "https://images.pexels.com/photos/10343928/pexels-photo-10343928.jpeg",
			large2x:
				"https://images.pexels.com/photos/10343928/pexels-photo-10343928.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/10343928/pexels-photo-10343928.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/10343928/pexels-photo-10343928.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/10343928/pexels-photo-10343928.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/10343928/pexels-photo-10343928.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/10343928/pexels-photo-10343928.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/10343928/pexels-photo-10343928.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Schuster, Ziemann and Bogisich",
		price: 1108,
		address: {
			street: "Zieme Village",
			city: "Josiahstad",
			country: "Latvia",
			latitude: "-1.2995",
			longitude: "-176.9493",
		},
		stars: 3,
	},
	{
		id: "bf9b8e78-9413-4e7e-95fe-e3340eb13851",
		name: "Bedroom interior with vases with branch near bed and mirror",
		image: {
			original: "https://images.pexels.com/photos/6480209/pexels-photo-6480209.jpeg",
			large2x:
				"https://images.pexels.com/photos/6480209/pexels-photo-6480209.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/6480209/pexels-photo-6480209.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/6480209/pexels-photo-6480209.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/6480209/pexels-photo-6480209.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/6480209/pexels-photo-6480209.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/6480209/pexels-photo-6480209.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/6480209/pexels-photo-6480209.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Gleichner - O'Reilly",
		price: 13390,
		address: {
			street: "Brett Canyon",
			city: "Simi Valley",
			country: "Timor-Leste",
			latitude: "-44.7769",
			longitude: "85.2414",
		},
		stars: 3,
	},
	{
		id: "0b0a5dfe-070b-4c87-8c73-9a92f2b4eca3",
		name: "Cozy bed with pillows and knitted sweater near bedside table with mug on books in hotel room",
		image: {
			original: "https://images.pexels.com/photos/4577654/pexels-photo-4577654.jpeg",
			large2x:
				"https://images.pexels.com/photos/4577654/pexels-photo-4577654.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/4577654/pexels-photo-4577654.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/4577654/pexels-photo-4577654.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/4577654/pexels-photo-4577654.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/4577654/pexels-photo-4577654.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/4577654/pexels-photo-4577654.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/4577654/pexels-photo-4577654.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Herman, Raynor and Green",
		price: 3390,
		address: {
			street: "Huel Skyway",
			city: "Keller",
			country: "Grenada",
			latitude: "-57.6846",
			longitude: "-145.3891",
		},
		stars: 4,
	},
	{
		id: "eeeba7b2-1d2a-4b54-93aa-a393bc43fc65",
		name: "Turned-on Lights Along Hotel Hallway",
		image: {
			original: "https://images.pexels.com/photos/277572/pexels-photo-277572.jpeg",
			large2x:
				"https://images.pexels.com/photos/277572/pexels-photo-277572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/277572/pexels-photo-277572.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/277572/pexels-photo-277572.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/277572/pexels-photo-277572.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/277572/pexels-photo-277572.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/277572/pexels-photo-277572.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/277572/pexels-photo-277572.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Langworth - Block",
		price: 5114,
		address: {
			street: "Jolie Views",
			city: "West Tillmantown",
			country: "Montenegro",
			latitude: "38.7325",
			longitude: "-44.5570",
		},
		stars: 5,
	},
	{
		id: "11549002-a400-4382-9dcf-1423699a3289",
		name: "Black Rotary Telephone on White Surface",
		image: {
			original: "https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg",
			large2x:
				"https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Hoppe, Nicolas and Gleason",
		price: 10142,
		address: {
			street: "Cory Motorway",
			city: "North Betsyhaven",
			country: "Georgia",
			latitude: "-44.3197",
			longitude: "25.1369",
		},
		stars: 4,
	},
	{
		id: "319efcb7-5803-4819-8ffc-dbb69457eb27",
		name: "Interior of room with round table near green plant in pot and mirror on beige wall",
		image: {
			original: "https://images.pexels.com/photos/6186516/pexels-photo-6186516.jpeg",
			large2x:
				"https://images.pexels.com/photos/6186516/pexels-photo-6186516.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/6186516/pexels-photo-6186516.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/6186516/pexels-photo-6186516.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/6186516/pexels-photo-6186516.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/6186516/pexels-photo-6186516.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/6186516/pexels-photo-6186516.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/6186516/pexels-photo-6186516.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Bayer LLC",
		price: 3500,
		address: {
			street: "Davis Cove",
			city: "South Molly",
			country: "Netherlands Antilles",
			latitude: "-58.8799",
			longitude: "-39.3732",
		},
		stars: 5,
	},
	{
		id: "706cfc85-ea7c-4932-98b1-eb28c693f10d",
		name: "Orange Fabric Sofa With Three Throw Pillows Near Black Potted Plant",
		image: {
			original: "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg",
			large2x:
				"https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Emmerich - Gusikowski",
		price: 4112,
		address: {
			street: "Raynor Mountains",
			city: "Shreveport",
			country: "Maldives",
			latitude: "-21.6754",
			longitude: "-164.9055",
		},
		stars: 5,
	},
	{
		id: "9142c95d-cf57-45e0-adca-a212438ab14d",
		name: "Food Inside Display Chiller",
		image: {
			original: "https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg",
			large2x:
				"https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Botsford Group",
		price: 7468,
		address: {
			street: "Oleta Radial",
			city: "Cruickshankbury",
			country: "Fiji",
			latitude: "78.3054",
			longitude: "-122.4179",
		},
		stars: 5,
	},
	{
		id: "08adccf7-a100-4be2-8c67-574f696c3d59",
		name: "Person Lying on Bed Covering White Blanket",
		image: {
			original: "https://images.pexels.com/photos/271897/pexels-photo-271897.jpeg",
			large2x:
				"https://images.pexels.com/photos/271897/pexels-photo-271897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/271897/pexels-photo-271897.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/271897/pexels-photo-271897.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/271897/pexels-photo-271897.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/271897/pexels-photo-271897.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/271897/pexels-photo-271897.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/271897/pexels-photo-271897.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Steuber, Schamberger and Dach",
		price: 6828,
		address: {
			street: "Weissnat Wall",
			city: "Buckridgechester",
			country: "Bosnia and Herzegovina",
			latitude: "62.2108",
			longitude: "8.9966",
		},
		stars: 4,
	},
	{
		id: "0d62c2ce-2903-4560-baca-620080957fbd",
		name: "Brown Wooden Sofa Set With Lighted Table Lamp",
		image: {
			original: "https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg",
			large2x:
				"https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Emard and Sons",
		price: 4209,
		address: {
			street: "Hamill Path",
			city: "East Phyllis",
			country: "Guyana",
			latitude: "-84.6407",
			longitude: "119.3571",
		},
		stars: 5,
	},
	{
		id: "f7e39391-7870-4e3a-bab5-4c3ce51aba7b",
		name: "Photo of Wine Bottle And Food On Table",
		image: {
			original: "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg",
			large2x:
				"https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Shanahan, Keebler and Parisian",
		price: 8064,
		address: {
			street: "Anderson Canyon",
			city: "Kassulkeland",
			country: "Latvia",
			latitude: "52.2406",
			longitude: "94.9194",
		},
		stars: 3,
	},
	{
		id: "0e125755-855a-4f86-8569-38dffc78c49a",
		name: "Sofa Chair Beside Window",
		image: {
			original: "https://images.pexels.com/photos/2249055/pexels-photo-2249055.jpeg",
			large2x:
				"https://images.pexels.com/photos/2249055/pexels-photo-2249055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/2249055/pexels-photo-2249055.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/2249055/pexels-photo-2249055.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/2249055/pexels-photo-2249055.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/2249055/pexels-photo-2249055.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/2249055/pexels-photo-2249055.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/2249055/pexels-photo-2249055.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Rogahn LLC",
		price: 6790,
		address: {
			street: "Fermin Branch",
			city: "West Hiramborough",
			country: "Samoa",
			latitude: "-19.8757",
			longitude: "-146.9862",
		},
		stars: 4,
	},
	{
		id: "76a76f42-c490-4a5e-843e-1894653e562f",
		name: "Man in White Dress Shirt Sitting on Black and White Tube Chair",
		image: {
			original: "https://images.pexels.com/photos/931887/pexels-photo-931887.jpeg",
			large2x:
				"https://images.pexels.com/photos/931887/pexels-photo-931887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/931887/pexels-photo-931887.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/931887/pexels-photo-931887.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/931887/pexels-photo-931887.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/931887/pexels-photo-931887.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/931887/pexels-photo-931887.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/931887/pexels-photo-931887.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Conn and Sons",
		price: 11397,
		address: {
			street: "Roberts Forks",
			city: "Kunzeport",
			country: "Congo",
			latitude: "18.4026",
			longitude: "128.4713",
		},
		stars: 4,
	},
	{
		id: "fa31c569-6839-4463-8e95-93462bb57d1d",
		name: "Interior of modern home with table on carpet near cabinet",
		image: {
			original: "https://images.pexels.com/photos/6480205/pexels-photo-6480205.jpeg",
			large2x:
				"https://images.pexels.com/photos/6480205/pexels-photo-6480205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/6480205/pexels-photo-6480205.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/6480205/pexels-photo-6480205.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/6480205/pexels-photo-6480205.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/6480205/pexels-photo-6480205.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/6480205/pexels-photo-6480205.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/6480205/pexels-photo-6480205.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Rempel - Turner",
		price: 13092,
		address: {
			street: "Josie Drive",
			city: "Ondrickamouth",
			country: "Isle of Man",
			latitude: "15.7253",
			longitude: "50.0728",
		},
		stars: 3,
	},
	{
		id: "fcb5c5ef-ffbe-4aec-b44e-1539c9546d61",
		name: "Purple Blanket",
		image: {
			original: "https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg",
			large2x:
				"https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Koch, McLaughlin and Jones",
		price: 11323,
		address: {
			street: "Stephen Knolls",
			city: "Hammesfort",
			country: "Cocos (Keeling) Islands",
			latitude: "-60.4557",
			longitude: "-149.9116",
		},
		stars: 4,
	},
	{
		id: "940c89d2-0a32-4629-86f9-b18bdb2cb3a8",
		name: "People Near Bar Stools",
		image: {
			original: "https://images.pexels.com/photos/244133/pexels-photo-244133.jpeg",
			large2x:
				"https://images.pexels.com/photos/244133/pexels-photo-244133.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/244133/pexels-photo-244133.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/244133/pexels-photo-244133.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/244133/pexels-photo-244133.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/244133/pexels-photo-244133.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/244133/pexels-photo-244133.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/244133/pexels-photo-244133.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Bednar - Leffler",
		price: 8472,
		address: {
			street: "Hermann Village",
			city: "Florianside",
			country: "Malaysia",
			latitude: "-40.6884",
			longitude: "118.5516",
		},
		stars: 3,
	},
	{
		id: "a71fe0c4-0949-441c-b117-6b81d011e004",
		name: "Empty Tables and Chairs",
		image: {
			original: "https://images.pexels.com/photos/3201920/pexels-photo-3201920.jpeg",
			large2x:
				"https://images.pexels.com/photos/3201920/pexels-photo-3201920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/3201920/pexels-photo-3201920.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/3201920/pexels-photo-3201920.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/3201920/pexels-photo-3201920.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/3201920/pexels-photo-3201920.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/3201920/pexels-photo-3201920.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/3201920/pexels-photo-3201920.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Watsica, Olson and Lemke",
		price: 6253,
		address: {
			street: "Rylan Hills",
			city: "Altoona",
			country: "Virgin Islands, British",
			latitude: "-45.8130",
			longitude: "-52.5284",
		},
		stars: 5,
	},
	{
		id: "ef63d8a5-a471-4904-a940-8259f9ecd537",
		name: "White Pillows on Bed Beside Window",
		image: {
			original: "https://images.pexels.com/photos/2873951/pexels-photo-2873951.jpeg",
			large2x:
				"https://images.pexels.com/photos/2873951/pexels-photo-2873951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/2873951/pexels-photo-2873951.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/2873951/pexels-photo-2873951.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/2873951/pexels-photo-2873951.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/2873951/pexels-photo-2873951.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/2873951/pexels-photo-2873951.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/2873951/pexels-photo-2873951.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Pouros - Crona",
		price: 7921,
		address: {
			street: "Christiansen Road",
			city: "Orland Park",
			country: "French Polynesia",
			latitude: "-67.2069",
			longitude: "52.5574",
		},
		stars: 3,
	},
	{
		id: "faa4b37b-706f-4440-b868-7ca883849035",
		name: "Indoor Pool",
		image: {
			original: "https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg",
			large2x:
				"https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Schultz, Cormier and Sporer",
		price: 5974,
		address: {
			street: "Martine Ports",
			city: "Kirkburgh",
			country: "Estonia",
			latitude: "8.4226",
			longitude: "-73.1644",
		},
		stars: 5,
	},
	{
		id: "dabcbf64-4244-44d1-9304-fb82b2b23eec",
		name: "Woman Sitting on White Sofa",
		image: {
			original: "https://images.pexels.com/photos/2411759/pexels-photo-2411759.jpeg",
			large2x:
				"https://images.pexels.com/photos/2411759/pexels-photo-2411759.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/2411759/pexels-photo-2411759.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/2411759/pexels-photo-2411759.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/2411759/pexels-photo-2411759.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/2411759/pexels-photo-2411759.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/2411759/pexels-photo-2411759.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/2411759/pexels-photo-2411759.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Jones - Kreiger",
		price: 8635,
		address: {
			street: "Jonathan Spurs",
			city: "Hauckburgh",
			country: "Trinidad and Tobago",
			latitude: "-5.0483",
			longitude: "-89.3511",
		},
		stars: 4,
	},
	{
		id: "8d1a5904-5fd4-4f95-aabd-e52c6ba8c66c",
		name: "Room With Bed and Wooden Floor",
		image: {
			original: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg",
			large2x:
				"https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			large: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			medium: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&h=350",
			small: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&h=130",
			portrait:
				"https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
			landscape:
				"https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
			tiny: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
		},
		company: "Stanton - Borer",
		price: 6335,
		address: {
			street: "Oral Plaza",
			city: "Lake Anahi",
			country: "Croatia",
			latitude: "-32.4653",
			longitude: "-152.7797",
		},
		stars: 3,
	},
];
export default hotels;
