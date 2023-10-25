import './Sidebar.css'
import { ContainerClose, UlMenu } from "./Sidebar.styled"
import { AiOutlineHome } from 'react-icons/ai'
import { BiLogInCircle } from 'react-icons/bi'
import { MdOutlinePostAdd } from 'react-icons/md'
import { MdBalance } from 'react-icons/md'
import { FaPowerOff } from 'react-icons/fa'
import { GrClose } from 'react-icons/gr'
import { useContext } from "react"
import { AiOutlineUser } from 'react-icons/ai'
import { ToogleContext } from "../../Context/ToogleContext"
import { Link } from 'react-router-dom'
import { useLogOut } from '../../hooks/useLogOut'

const Sidebar = () => {

  const { toogleSidebar, handleToogleSidebar } = useContext(ToogleContext)
  const { SignOut } = useLogOut()

  return (
    
    <aside className={`sidebar ${toogleSidebar ? '' : 'close'}`}>
    <ContainerClose>
      <GrClose onClick={() => handleToogleSidebar()} />
    </ContainerClose>

      <UlMenu>

        <Link to='/'>
          <li>
              <AiOutlineHome />
              Home
          </li>
        </Link>
        <Link to='/auth'>
          <li>
            <BiLogInCircle />
            Entrar
          </li>
        </Link>
        <Link to='/createPost'>
          <li>
            <MdOutlinePostAdd />
            Criar
          </li>      
        </Link>
        <Link to='/profile'>
          <li>
            <AiOutlineUser />
            Perfil
          </li>      
        </Link>
        <Link to='/policy'>
         <li>
            <MdBalance />
            Política de Conteúdo
          </li>
        </Link>
          <li onClick={() => SignOut()}>
            <FaPowerOff />
            Sair
          </li>
      </UlMenu>
    </aside>
  )
}

export default Sidebar