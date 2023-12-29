import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [logged,setLoggedIn] =useState(false);
    const logout()=>{
        sessionStorage
    }
    return (
        <AppContext.Provider>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => useContext(AppContext);
export default useAppContext;