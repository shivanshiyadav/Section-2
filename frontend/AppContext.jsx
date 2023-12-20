import { createContext, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({children}) => {
    return (
        <AppContext.Provider>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => useContext(AppContext);
export default useAppContext;