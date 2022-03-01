import React, {useState} from 'react'

export const AppContext = React.createContext()

const AppProvider = ({children}) => {
	const [isOpenModal, setIsOpenModal] = useState(false);

	const openModal = () => setIsOpenModal(true)

	const closeModal = () => setIsOpenModal(false)
	
	return (
		<AppContext.Provider value={{
			isOpenModal,
			openModal,
			closeModal
		}}>
			{children}
		</AppContext.Provider>
	)
}

export default AppProvider