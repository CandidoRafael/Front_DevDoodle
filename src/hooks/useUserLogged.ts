import { useContext, useEffect } from "react"
import { userLogged } from "../services/userServices"
import Cookies from 'js-cookie'
import { UserContext } from "../Context/UserContext"

const useUserLogged = () => {
   
    const { user, setUser } = useContext(UserContext)

    async function FindUserLogged() {
        try {
          const response = await userLogged()
          setUser(response.data)
        } catch (error) {
          console.log(error)
        }
      }
      
      useEffect(() => {
        if(Cookies.get('token')) FindUserLogged()
      }, [])

      return  user 
}

export default useUserLogged