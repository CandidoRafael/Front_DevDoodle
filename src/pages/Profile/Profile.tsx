import { ProfileActions, ProfileAvatar, ProfileContainer, ProfileHeader, ProfileIconAdd, ProfileIconEdit, ProfileImage, ProfilePosts, ProfileUser } from "./Profile.styled"
import { FiEdit } from 'react-icons/fi'
import { AiOutlinePlus } from 'react-icons/ai'
import { Post } from "../../types/Post"
import { IconLoading } from "../Home/Home.styled"
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

import Modal from "../../components/Modal/Modal"
import Card from "../../components/Card/Card"
import useProfile from "../../hooks/useProfile"

const Profile = () => {

  const { user, userPosts, setToogleModal } = useProfile()

  if(!user) {
    return (
      <IconLoading>
         <AiOutlineLoading3Quarters />
      </IconLoading>
    )
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
              post={post}
            />
          ))
        ): <span>Você ainda não criou publicações :(</span>}
      </ProfilePosts>

    </ProfileContainer>
    </>
  )
}

export default Profile