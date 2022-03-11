import React, {useState} from 'react'

export const AppContext = React.createContext()

const AppProvider = ({children}) => {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [isOpenCalendar, setIsOpenCalendar] = useState(false);
	const [isOpenSidebar, setIsOpenSidebar] = useState(false);

	const openModal = () => setIsOpenModal(true)
	const closeModal = () => setIsOpenModal(false)
	const openCalendar = () => setIsOpenCalendar(true)
	const closeCalendar = () => setIsOpenCalendar(false)
	const openSidebar = () => setIsOpenSidebar(true)
	const closeSidebar = () => setIsOpenSidebar(false)
	
	return (
		<AppContext.Provider value={{
			isOpenModal,
			openModal,
			closeModal,
			isOpenCalendar,
			openCalendar,
			closeCalendar,
			isOpenSidebar,
			openSidebar,
			closeSidebar
		}}>
			{children}
		</AppContext.Provider>
	)
}

export default AppProvider