import { ToogleContext } from "../../Context/ToogleContext"
import { UserContext } from "../../Context/UserContext"
import { BackgroundModal, ModalContainer } from "./Modal.styled"
import { useContext } from 'react'

const Modal = () => {

   const { toogleModal, setToogleModal } = useContext(ToogleContext) 
   const { user } = useContext(UserContext)
   
   if(toogleModal) {
    return(
    <BackgroundModal>
      <ModalContainer>
        <h1>Perfil</h1>
        <figure>
            <img src={user.avatar} alt="Avatar" />
        </figure>
        <div>
            <label htmlFor="">Nome</label>
            <input type="text" placeholder="Nome"/>
        </div>
        <div>
            <label htmlFor="">Username</label>
            <input type="text" placeholder="Username"/>
        </div>
        <div>
            <label>Avatar</label>
            <input type="text" placeholder="Endereço da imagem..." />
        </div>
        <div>
          <label htmlFor="">Background</label>
          <input type="text" placeholder="Endereço da imagem..." />
        </div>
        <button onClick={() => setToogleModal(false)}>Fechar</button>
      </ModalContainer>
    </BackgroundModal>
    )
   }
}

export default Modal