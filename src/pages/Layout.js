import React from "react";
import { Header, Footer } from "../components";

const Layout = ({ children }) => {
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

export default Layout;
