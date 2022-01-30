import { createContext, useContext } from "react"

const initalState = {
    name: '',
    mobileNumber: '',
    gender: ''
}

export const GlobalContext = createContext(initalState);

export const GlobalProvider = GlobalContext.Provider;