import React, {useContext} from 'react'
import {AppContext} from "../index"

const useAppContext = () => {
	return useContext(AppContext)
}

export default useAppContext