import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
	Header,
	Footer,
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
			<ToastContainer
				type="success"
				style={{fontSize: "14px"}}
				/>			
			{isOpenCalendar && <CustomCalendar />}
			<div className="main">{props.children}</div>
			<Footer />
		</>
	);
});

export default Layout;
