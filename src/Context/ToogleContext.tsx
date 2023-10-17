import { createContext, useState } from "react";

export const ToogleContext = createContext<any>({})

type ToggleProps = {
    children: React.ReactNode
}


export const ToogleProvider = ({ children }: ToggleProps) => {
    const [toogleSidebar, setToogleSidebar] = useState(false)

    const handleToogle = () => {
        setToogleSidebar(!toogleSidebar)
    }

    return (
        <ToogleContext.Provider value={{ toogleSidebar, handleToogle }}>
            { children }
        </ToogleContext.Provider>
    )
}