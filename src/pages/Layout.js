import React from "react";
import { Header, Footer, Submenu } from "../components";

const Layout = React.forwardRef((props, ref) => {
	return (
		<>
			<Header ref={ref || null} />
			<div className="main">
				{props.children}
			</div>
			<Footer />
		</>
	);
});

export default Layout;
