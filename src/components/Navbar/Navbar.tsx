import logo from '../../assets/logo.png'
import { Button, Container, ErrorSpan, Hamburger, ImageLogo, InputSpace, Nav } from './Navbar.styled'
import { GrMenu } from 'react-icons/gr'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { BiSearch } from 'react-icons/bi'
import { zodResolver } from '@hookform/resolvers/zod'
import { schemaSearch } from '../../schemas/schemaSearch'
import { userLogged } from '../../services/userServices'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { User } from '../../types/User'

const Navbar = () => {

  const [user, setUser] = useState<User | undefined>()

  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset 
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      title: ''
    },
    resolver: zodResolver(schemaSearch)
  })
  
  const navigate = useNavigate()

  
  const handleSearch = (data:any) => {
    navigate(`posts/search/${data.title}`)
    reset()
  }

  async function FindUserLogged() {
    try {
      const response = await userLogged()
      setUser(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if(Cookies.get('token')) FindUserLogged()
  }, [])

  return (
    <>
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

        {
            user ? (
              <p>Olá, {user.name}</p>
            ) : (
              <Button onClick={() => navigate("/auth")}>Entrar</Button>
            )
          }
      
          <Hamburger>
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