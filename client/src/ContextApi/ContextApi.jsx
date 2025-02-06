import { createContext, useState } from "react";
import { toast } from "react-toastify";


export const AppContext = createContext()

export const AppProvider = ({children})=> {

      const notify = (theme = "warn", msg = "something went wrong") => {
            return toast[theme](msg, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

    return <AppContext.Provider  value={{notify}}>
        {children}
    </AppContext.Provider>
}