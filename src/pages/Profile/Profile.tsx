import { useContext } from "react"
import { UserContext } from "../../Context/UserContext"
import { ProfileActions, ProfileAvatar, ProfileContainer, ProfileHeader, ProfileIconAdd, ProfileIconEdit, ProfileImage, ProfilePosts, ProfileUser } from "./Profile.styled"
import { FiEdit } from 'react-icons/fi'
import { AiOutlinePlus } from 'react-icons/ai'
import { useState, useEffect } from 'react'
import { getAllPostsByUser } from "../../services/postsServices"
import Card from "../../components/Card/Card"
import { Post } from "../../types/Post"

const Profile = () => {

  const { user } = useContext(UserContext)
  const [userPosts, setUserPosts] = useState([])
  
  const findAllPostsByUser = async () => {
    const response = await getAllPostsByUser()
    setUserPosts(response.data.postsByUser)
    console.log(userPosts)
  }

  useEffect(() => {
    findAllPostsByUser()
  }, [])

  return (
    <ProfileContainer>

     <ProfileHeader>
      <ProfileIconEdit>
        <FiEdit />
      </ProfileIconEdit>

      <ProfileImage src={user?.background} alt="" />

      <ProfileUser>
        <ProfileAvatar src={user?.avatar} alt="" />
        <h2>{user?.name}</h2>
        <h3>@{user?.username}</h3>
      </ProfileUser>

      <ProfileActions>
        <ProfileIconAdd>
          <AiOutlinePlus />
        </ProfileIconAdd>
      </ProfileActions>
     </ProfileHeader>

      <ProfilePosts>
        {userPosts.length ? (
          userPosts?.map((post: Post) => (
            <Card 
              key={post.id}
              title={post.title}
              text={post.text}
               image={post.banner}
              likes={post.likes}
              comments={post.comments}
            />
          ))
        ): <span>Você ainda não criou publicações :(</span>}
      </ProfilePosts>

    </ProfileContainer>
  )
}

export default Profile