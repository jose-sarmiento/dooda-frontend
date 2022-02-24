import React from 'react'
import GoogleMapReact from 'google-map-react';

const MyMap = () => {

	return (
		<div style={{ height: '100vh', width: '100%' }}>
	        <GoogleMapReact
	          bootstrapURLKeys={{ key: "YOUR KEY HERE" }}
	          defaultCenter={{
			      lat: 59.95,
			      lng: 30.33
			    }}
	          defaultZoom={11}
	        >
	          <AnyReactComponent
	            lat={59.955413}
	            lng={30.337844}
	            text="My Marker"
	          />
	        </GoogleMapReact>
	      </div>
	)
}

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default MyMap