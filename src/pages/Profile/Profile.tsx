import { useContext } from "react"
import { UserContext } from "../../Context/UserContext"
import { ProfileActions, ProfileAvatar, ProfileContainer, ProfileHeader, ProfileIconAdd, ProfileIconEdit, ProfileImage, ProfilePosts, ProfileUser } from "./Profile.styled"
import { FiEdit } from 'react-icons/fi'
import { AiOutlinePlus } from 'react-icons/ai'
import { useState, useEffect } from 'react'
import PostServices from "../../services/postsServices"
import Card from "../../components/Card/Card"
import { Post } from "../../types/Post"
import { ToogleContext } from "../../Context/ToogleContext"
import Modal from "../../components/Modal/Modal"

const Profile = () => {

  const { user } = useContext(UserContext)
  const { getAllPostsByUser } = PostServices()
  const [userPosts, setUserPosts] = useState([])
  
  const findAllPostsByUser = async () => {
    const response = await getAllPostsByUser()
    setUserPosts(response.data.postsByUser)
  }

  useEffect(() => {
    findAllPostsByUser()
  }, [])

  const { setToogleModal } = useContext(ToogleContext)

  if(!user) {
    return <p>Loading...</p>
  }

  return (
    <>
     <Modal />
    <ProfileContainer>

     <ProfileHeader>
      <ProfileIconEdit onClick={() => setToogleModal(true)}>
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
              avatar={post.avatar}
              username={post.username}
              image={post.banner}
              likes={post.likes}
              comments={post.comments}
            />
          ))
        ): <span>Você ainda não criou publicações :(</span>}
      </ProfilePosts>

    </ProfileContainer>
    </>
  )
}

export default Profile