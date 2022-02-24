import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import Layout from "./Layout";
import {SectionHeader} from "../components"
import { places } from "../mocks/links";

const PlacesToStay = () => {
	return (
		<Layout>
			<Outlet />
		</Layout>
	);
};

export default PlacesToStay;
