import { useContext, useEffect, useState } from "react"
import { UserContext } from "../Context/UserContext"
import PostServices from "../services/postsServices"

import { ToogleContext } from "../Context/ToogleContext"


const useProfile = () => {
    const { user } = useContext(UserContext)
    const { getAllPostsByUser } = PostServices()
    const [userPosts, setUserPosts] = useState([])
    const { setToogleModal } = useContext(ToogleContext)
    
    const findAllPostsByUser = async () => {
      const response = await getAllPostsByUser()
      setUserPosts(response.data.postsByUser)
    }
  
    useEffect(() => {
      findAllPostsByUser()
    }, [])


    return {
        user,
        userPosts,
        setToogleModal
    }
    
}

export default useProfile