import logo from '../../assets/logo.png'
import { Button, Container, ErrorSpan, Hamburger, ImageLogo, InputSpace, Nav } from './Navbar.styled'
import { GrMenu } from 'react-icons/gr'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { BiSearch } from 'react-icons/bi'
import { zodResolver } from '@hookform/resolvers/zod'
import { schemaSearch } from '../../schemas/schemaSearch'

const Navbar = () => {

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
    console.log(data)

    if(!data.title) {
     console.log('caiu')
    }

    navigate(`posts/search/${data.title}`)
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
                  <input type="text" {...register("title")} placeholder='Pesquise...' />
                  <button><BiSearch /></button>
                 
            </InputSpace>
          </form>

        <Container>
        <Button onClick={() => navigate("/auth")}>Entrar</Button>
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