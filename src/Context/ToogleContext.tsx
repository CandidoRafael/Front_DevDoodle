import { createContext, useState } from "react";

export const ToogleContext = createContext<any>({})

type ToggleProps = {
    children: React.ReactNode
}

export const ToogleProvider = ({ children }: ToggleProps) => {
    const [toogleSidebar, setToogleSidebar] = useState(false)
    const [toogleBanner, setToogleBanner] = useState(false)
    const [toogleModal, setToogleModal] = useState(false)
    const handleToogleSidebar = () => {
        setToogleSidebar(!toogleSidebar)
    }

    return (
        <ToogleContext.Provider value={
            { 
              toogleSidebar, 
              handleToogleSidebar, 
              toogleBanner, 
              setToogleBanner,
              toogleModal,
              setToogleModal
              }
            }>
            { children }
        </ToogleContext.Provider>
    )
}