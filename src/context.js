import React, {useState} from 'react'

export const AppContext = React.createContext()

const AppProvider = ({children}) => {
	const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
	const [location, setLocation] = useState({})

	const openSubmenu = (page, coordinates) => {
		setLocation(coordinates)
		setIsSubmenuOpen(true)
	}
	const closeSubmenu = () => setIsSubmenuOpen(false)
	
	return (
		<AppContext.Provider value={{
			isSubmenuOpen,
			openSubmenu,
			closeSubmenu,
			location
		}}>
			{children}
		</AppContext.Provider>
	)
}

export default AppProvider