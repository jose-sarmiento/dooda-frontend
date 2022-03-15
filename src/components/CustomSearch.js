import React, {useState, useRef, useEffect} from 'react'
import phlocations from "../mocks/places.js";

const CustomSearch = (props) => {
	const { value, handleLocationSelect, handleLocationChange } = props
	const [locations, setLocations] = useState(phlocations)
	const [suggestions, setSuggestions] = useState([])

	useEffect(() => {
		const searchResults = locations.filter((x) =>
			x.toLowerCase().includes(value.toLowerCase())
		);
		setSuggestions(searchResults.slice(0, 15));
	}, [value]);

	return (
		<div
			className="__custom-search"
		>
			<input 
				type="text" 
				value={value} 
				onChange={handleLocationChange}
				spellCheck={false} 
			/>

			<ul className={true ? "suggestions show" : "suggestions"}>
				{suggestions.map((suggestion, idx) => (
					<li key={idx}
						className={value === suggestion ? "suggestion selected" : "suggestion"}
						onMouseDown={handleLocationSelect}
					>
						{suggestion}
					</li>
				))}
			</ul>
		</div>
	)
}

export default CustomSearch