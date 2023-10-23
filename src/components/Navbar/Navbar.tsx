import logo from '../../assets/logo.png'
import { Button, Container, ErrorSpan, Hamburger, ImageLogo, InputSpace, LinkProfile, Nav } from './Navbar.styled'
import { GrMenu } from 'react-icons/gr'
import { Link, Outlet } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'
import useSearchPosts from '../../hooks/useSearchPost'
import { useContext } from 'react'
import { ToogleContext } from '../../Context/ToogleContext'
import Sidebar from '../Sidebar/Sidebar'
import { UserContext } from '../../Context/UserContext'
import useUserLogged from '../../hooks/useUserLogged'

const Navbar = () => {

  const { register, handleSubmit, handleSearch, errors, navigate } = useSearchPosts()
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

          <form onSubmit={handleSubmit(handleSearch)} >
            <InputSpace>
                  <input type="text" {...register("title")} placeholder='Pesquise...' />
                  <button><BiSearch /></button>
            </InputSpace>
          </form>

        <Container>

        { user ? (
                <LinkProfile >
                   <Link to='/profile'>
                    {user.name ? `Olá, ${user.name}` : null}
                   </Link>
                </LinkProfile>
             
            ) : (
              <Button onClick={() => navigate("/auth")}>Entrar</Button>
            )}
      
          <Hamburger >
              <GrMenu onClick={() => handleToogleSidebar()} />
          </Hamburger>
        </Container>
      </Nav>

      {errors.title ? (
           <ErrorSpan>
           {errors.title.message}
           </ErrorSpan>
      ): null}
    
  <Outlet />
    </>
  )
}

export default Navbar