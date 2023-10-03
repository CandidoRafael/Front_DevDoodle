import { ContainerClose, UlMenu } from "./Sidebar.styled"
import { AiOutlineHome } from 'react-icons/ai'
import { BiLogInCircle } from 'react-icons/bi'
import { BsPostcard } from 'react-icons/bs'
import { MdBalance } from 'react-icons/md'
import { FaPowerOff } from 'react-icons/fa'
import { GrClose } from 'react-icons/gr'

type SidebarProps = {
  toggleMenu: boolean
  setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar = ({ toggleMenu , setToggleMenu }: SidebarProps) => {
  return (
    
    <aside className={`sidebar ${toggleMenu ? '' : 'close'}`}>
    <ContainerClose>
      <GrClose onClick={() => setToggleMenu(false)} />
    </ContainerClose>

      <UlMenu>
        <li>
          <AiOutlineHome />
          Home
        </li>
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