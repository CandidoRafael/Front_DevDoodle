import logo from '../../assets/logo.png'
import { Button, Container, ErrorSpan, Hamburger, ImageLogo, InputSpace, LinkProfile, Nav } from './Navbar.styled'
import { GrMenu } from 'react-icons/gr'
import { Link, Outlet } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'
import useSearchPosts from '../../hooks/useSearchPost'
import useUserLogged from '../../hooks/useUserLogged'
import { useContext } from 'react'
import { ToogleContext } from '../../Context/ToogleContext'
import Sidebar from '../Sidebar/Sidebar'

const Navbar = () => {

  const { register, handleSubmit, handleSearch, errors, navigate } = useSearchPosts()
  const user = useUserLogged()
  const { handleToogle } = useContext(ToogleContext)

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
      
          <Hamburger onClick={() => handleToogle()}>
              <GrMenu />
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