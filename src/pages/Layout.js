import React from "react";
import { Header, Footer, Submenu, Modal, Sidebar } from "../components";

const Layout = React.forwardRef((props, ref) => {
	return (
		<>
			<Header ref={ref || null} />
			<Modal />
			<Sidebar />
			<div className="main">
			{props.children}
			</div>
			<Footer />
		</>
	);
});

export default Layout;
