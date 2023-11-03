import logo from '../../assets/logo.png'
import { Button, Container, Hamburger, ImageLogo, InputSpace, LinkProfile, Nav } from './Navbar.styled'
import { GrMenu } from 'react-icons/gr'
import { Link, Outlet } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'
import useSearchPosts from '../../hooks/useSearchPost'
import { useContext,} from 'react'
import { ToogleContext } from '../../Context/ToogleContext'
import Sidebar from '../Sidebar/Sidebar'
import { UserContext } from '../../Context/UserContext'
import useUserLogged from '../../hooks/useUserLogged'
import { FaUser } from 'react-icons/fa'

const Navbar = () => {

  const { title, setTitle } = useSearchPosts()
  const { handleToogleSidebar } = useContext(ToogleContext)
  const { user } = useContext(UserContext)
  useUserLogged()
 
  return (
    <>
      <Sidebar />
      <Nav>
        <Link to='/'>
          <ImageLogo src={logo} alt="logo DevDoodle" />
        </Link>

          <form>
            <InputSpace>
                  <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder='Pesquisar' />
                  
                  <Link to={`/posts/search/${title}`}>
                  <button disabled={title ? false : true}><BiSearch /></button>
                  </Link>
            </InputSpace>
          </form>

        <Container>

        { user ? (
                <LinkProfile>
                   <Link to='/profile'>
                    <FaUser />
                   </Link>
                </LinkProfile>
             
            ) : (
              <Link to='/auth'>
                <Button>Entrar</Button>
              </Link>
            )}
      
          <Hamburger >
              <GrMenu onClick={() => handleToogleSidebar()} />
          </Hamburger>
        </Container>
      </Nav>
  <Outlet />
    </>
  )
}

export default Navbar