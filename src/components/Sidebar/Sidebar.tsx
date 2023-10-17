import './Sidebar.css'
import { ContainerClose, UlMenu } from "./Sidebar.styled"
import { AiOutlineHome } from 'react-icons/ai'
import { BiLogInCircle } from 'react-icons/bi'
import { BsPostcard } from 'react-icons/bs'
import { MdBalance } from 'react-icons/md'
import { FaPowerOff } from 'react-icons/fa'
import { GrClose } from 'react-icons/gr'
import { useContext } from "react"
import { ToogleContext } from "../../Context/ToogleContext"
import { Link } from 'react-router-dom'

const Sidebar = () => {

  const { toogleSidebar, handleToogle } = useContext(ToogleContext)

  return (
    
    <aside className={`sidebar ${toogleSidebar ? '' : 'close'}`}>
    <ContainerClose>
      <GrClose onClick={() => handleToogle()} />
    </ContainerClose>

      <UlMenu>
  
        <Link to='/'>
          <li>
              <AiOutlineHome />
              Home
          </li>
        </Link>
        <li>
          <BiLogInCircle />
          Entrar
        </li>
        <li>
          <BsPostcard />
          Posts
        </li>
        <li>
          <MdBalance />
          Política de Conteúdo
          </li>
        <li>
          <FaPowerOff />
          Sair
          </li>
      </UlMenu>
    </aside>
  )
}

export default Sidebar