import React, {useState} from 'react'
import {toast} from "react-toastify"

export const AppContext = React.createContext()

const AppProvider = ({children}) => {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [isOpenFilterModal, setIsOpenFilterModal] = useState(false);
	const [isOpenCalendar, setIsOpenCalendar] = useState(false);
	const [isOpenSidebar, setIsOpenSidebar] = useState(false);

	const notify = (message) => toast(message);

	const openModal = () => setIsOpenModal(true)
	const closeModal = () => setIsOpenModal(false)
	const openFilterModal = () => setIsOpenFilterModal(true)
	const closeFilterModal = () => setIsOpenFilterModal(false)
	const openCalendar = () => setIsOpenCalendar(true)
	const closeCalendar = () => setIsOpenCalendar(false)
	const openSidebar = () => setIsOpenSidebar(true)
	const closeSidebar = () => setIsOpenSidebar(false)
	
	return (
		<AppContext.Provider value={{
			isOpenModal,
			openModal,
			closeModal,
			isOpenFilterModal,
			openFilterModal,
			closeFilterModal,
			isOpenCalendar,
			openCalendar,
			closeCalendar,
			isOpenSidebar,
			openSidebar,
			closeSidebar,
			notify
		}}>
			{children}
		</AppContext.Provider>
	)
}

export default AppProvider