import Cookies from "js-cookie"
import { UserContext } from "../Context/UserContext"
import { useContext } from 'react'
import { useNavigate } from "react-router-dom"
import { ToogleContext } from "../Context/ToogleContext"

export const useLogOut = () => {

    const { setUser } = useContext(UserContext)
    const { handleToogleSidebar } = useContext(ToogleContext)
    const navigate = useNavigate()

    const SignOut = () => {
        Cookies.remove('token')
        setUser(undefined)
        navigate('/')
        handleToogleSidebar(false)
    }

    return { SignOut }

}