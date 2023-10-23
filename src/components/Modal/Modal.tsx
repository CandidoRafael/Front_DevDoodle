import { ToogleContext } from "../../Context/ToogleContext"
import { UserContext } from "../../Context/UserContext"
import { BackgroundModal,ButtonConfirm, IconClose, InputContainer, ModalContainer } from "./Modal.styled"
import { useContext } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useForm } from 'react-hook-form'
import { updateUser, userLogged } from "../../services/userServices"
import { zodResolver } from "@hookform/resolvers/zod"
import { schemaProfile } from "../../schemas/schemaProfile"
import { SpanError } from "../../pages/Auth/Auth.styled"
import { UserProfile } from "../../types/User"


const Modal = () => {

   const { toogleModal, setToogleModal } = useContext(ToogleContext) 
   const { user, setUser } = useContext(UserContext)
   
   const { register, handleSubmit, formState:{ errors }, reset } = useForm({
    mode: 'onSubmit',
    resolver: zodResolver(schemaProfile),
    defaultValues: {
      name: user?.name,
      username: user?.username,
      avatar: user?.avatar,
      background: user?.background
    }
   })

   const handleForm = async (data: UserProfile) => {
      try {
        await updateUser(data, user?._id)
        setToogleModal(false)
        const newUser = await userLogged()
        setUser(newUser.data)
        reset()
      } catch (error) {
        console.log(error)
      }
   }

   if(toogleModal) {
    return(
    <BackgroundModal>
      <ModalContainer>
        <IconClose onClick={() => setToogleModal(false)}>
          <AiOutlineCloseCircle />
        </IconClose>
        <h1>Perfil</h1>
        <figure>
            <img src={user.avatar} alt="Avatar" />
        </figure>
        <form onSubmit={handleSubmit(handleForm)}>
        <InputContainer>
            <label htmlFor="">Nome</label>
            <input 
              type="text" 
              placeholder="Nome"
              {...register('name')}
            />
            {errors.name?.message && (
              <SpanError>oi</SpanError>
            )}
        </InputContainer>
        <InputContainer>
            <label htmlFor="">Username</label>
            <input 
              type="text" 
              placeholder="Username" 
              {...register('username')}
            />
        </InputContainer>
        <InputContainer>
            <label>Avatar</label>
            <input 
              type="text" 
              placeholder="Endereço da imagem..." 
              {...register('avatar')}
            />
        </InputContainer>
        <InputContainer>
          <label htmlFor="">Banner</label>
          <input 
            type="text" 
            placeholder="Endereço da imagem..." 
            {...register('background')}
          />
        </InputContainer>
        <ButtonConfirm>Confirmar</ButtonConfirm>
        </form>
      </ModalContainer>
    </BackgroundModal>
    )
   }
}

export default Modal