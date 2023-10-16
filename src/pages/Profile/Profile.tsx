import { useContext } from "react"
import { UserContext } from "../../Context/UserContext"
import { ProfileActions, ProfileAvatar, ProfileContainer, ProfileHeader, ProfileIconAdd, ProfileIconEdit, ProfileImage, ProfileUser } from "./Profile.styled"
import { FiEdit } from 'react-icons/fi'
import { AiOutlinePlus } from 'react-icons/ai'

const Profile = () => {

  const { user } = useContext(UserContext)
  console.log(user)

  return (
    <ProfileContainer>
     <ProfileHeader>
      <ProfileIconEdit>
        <FiEdit />
      </ProfileIconEdit>

      <ProfileImage src={user?.background} alt="" />

      <ProfileUser>
        <ProfileAvatar src={user.avatar} alt="" />
        <h2>{user.name}</h2>
        <h3>@{user.username}</h3>
      </ProfileUser>

      <ProfileActions>
        <ProfileIconAdd>
          <AiOutlinePlus />
        </ProfileIconAdd>
      </ProfileActions>
     </ProfileHeader>
    </ProfileContainer>
  )
}

export default Profile