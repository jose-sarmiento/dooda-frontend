import React, { useState } from "react";
import Calendar from "react-calendar";
import Draggable from "react-draggable";

import useAppContext from "../hooks/useAppContext";

const CustomCalendar = () => {
	const [value, onChange] = useState(new Date());

	const { closeCalendar } = useAppContext();

	const handleStart = () => {};
	const handleDrag = () => {};
	const handleStop = () => {};

	return (
		<Draggable
			handle=".calendar"
			defaultPosition={{ x: 0, y: 0 }}
			scale={1}
			onStart={handleStart}
			onDrag={handleDrag}
			onStop={handleStop}
			bounds="parent"
		>
			<div className="calendar">
				<button
					className="calendar__close"
					onClick={() => closeCalendar()}
				>
					<i className="fa-solid fa-xmark"></i>
				</button>
				<Calendar
					onChange={onChange}
					value={value}
					className={["custom-calendar"]}
				/>
			</div>
		</Draggable>
	);
};

export default CustomCalendar;
