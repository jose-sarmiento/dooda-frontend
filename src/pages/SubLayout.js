import React from "react";
import { Header, Footer } from "../components";

const SubLayout = ({ children }) => {
	return (
		<>
			<div className="main">
				<Header />
				{children}
			</div>
			<Footer />
		</>
	);
};

export default SubLayout;
