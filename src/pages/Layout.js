import React from "react";
import {
	Header,
	Footer,
	Submenu,
	Modal,
	Sidebar,
	CustomCalendar,
} from "../components";
import useAppContext from "../hooks/useAppContext";

const Layout = React.forwardRef((props, ref) => {
	const { isOpenCalendar } = useAppContext();

	return (
		<>
			<Header ref={ref || null} />
			<Modal />
			<Sidebar />
			{isOpenCalendar && <CustomCalendar />}
			<div className="main">{props.children}</div>
			<Footer />
		</>
	);
});

export default Layout;
