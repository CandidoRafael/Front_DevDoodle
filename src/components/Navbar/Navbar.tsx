import { Button, Container, Hamburger, ImageLogo, InputSpace, Nav } from './Navbar.styled'
import { BiSearch } from 'react-icons/bi'
import { GrMenu } from 'react-icons/gr'
import logo from '../../assets/logo.png'

type NavbarProps = {
  setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar = ({ setToggleMenu }: NavbarProps) => {

  return (
      <Nav>
        <ImageLogo src={logo} alt="logo DevDoodle" />

        <InputSpace>
            <BiSearch />
            <input type="text" name="" id="" placeholder='Procure uma publicação...' />
        </InputSpace>

        <Container>
        <Button>Entrar</Button>
          <Hamburger onClick={() => setToggleMenu(true)}>
              <GrMenu />
          </Hamburger>
        </Container>
      </Nav>
  )
}

export default Navbar