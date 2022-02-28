import React, {useEffect, useRef} from 'react'
import useAppContext from "../hooks/useAppContext"

const Submenu = () => {
	const {isSubmenuOpen, location} = useAppContext()

	const submenuRef = useRef()

	useEffect(() => {
		const {center, bottom} = location
		submenuRef.current.style.left = `${center}px`
		submenuRef.current.style.top = `${bottom}px`
	}, [location])

	return (
		<div ref={submenuRef} className={isSubmenuOpen ? "submenu submenu--show" : "submenu"}>
			
		</div>
	)
}

export default Submenu