import { Button, Container, ErrorSpan, Hamburger, ImageLogo, InputSpace, Nav } from './Navbar.styled'
import { GrMenu } from 'react-icons/gr'
import logo from '../../assets/logo.png'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { BiSearch } from 'react-icons/bi'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const Navbar = () => {

  const schema = z.object({
    title: z
    .string()
    .min(1, "O campo de pesquisa não pode ser vazio")
    .refine(value => !/^\s*$/.test(value), "O campo não pode ter espaços")
  })

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
    resolver: zodResolver(schema)
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
        <Button>Entrar</Button>
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