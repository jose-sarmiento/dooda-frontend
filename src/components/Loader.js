import React from 'react'

const Loader = () => {
	return (
		<div className="list-loader__container">
			<div className="list-loader__spinner">
				<i className="list-loader__icon icon-arrows-anticlockwise-dashed"></i>
			</div>
			<h4 className="list-loader__text">Loading...</h4>
		</div>
	)
}

export default Loader