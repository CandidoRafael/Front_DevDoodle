import { Button, Container, Hamburger, ImageLogo, InputSpace, Nav } from './Navbar.styled'
import { BiSearch } from 'react-icons/bi'
import { GrMenu } from 'react-icons/gr'
import logo from '../../assets/logo.png'
import { Outlet } from 'react-router-dom'

const Navbar = () => {

  return (
    <>
      <Nav>
        <ImageLogo src={logo} alt="logo DevDoodle" />

        <InputSpace>
            <BiSearch />
            <input type="text" name="" id="" placeholder='Procure uma publicação...' />
        </InputSpace>

        <Container>
        <Button>Entrar</Button>
          <Hamburger>
              <GrMenu />
          </Hamburger>
        </Container>
      </Nav>
  <Outlet />
    </>
  )
}

export default Navbar