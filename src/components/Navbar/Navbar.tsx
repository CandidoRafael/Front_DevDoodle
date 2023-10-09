import { Button, Container, Hamburger, ImageLogo, InputSpace, Nav } from './Navbar.styled'
import { GrMenu } from 'react-icons/gr'
import logo from '../../assets/logo.png'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { BiSearch } from 'react-icons/bi'

const Navbar = () => {

  const { register, handleSubmit, formState, reset } = useForm()
  
  const navigate = useNavigate()

  const handleSearch = (data:any) => {
    console.log(data)
    navigate(`/search/${data.title}`)
    reset()
  }

  return (
    <>
      <Nav>
        <Link to='/'>
          <ImageLogo src={logo} alt="logo DevDoodle" />
        </Link>

          <form onSubmit={handleSubmit(handleSearch)} >
            <InputSpace>
                  <button><BiSearch /></button>
                  <input type="text" {...register("title")} placeholder='Pesquise...' />
            </InputSpace>
          </form>

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