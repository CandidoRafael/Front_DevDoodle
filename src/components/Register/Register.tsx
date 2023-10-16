import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { IconCreate, SpanError } from '../../pages/Auth/Auth.styled'
import { BsEyeSlash, BsEyeSlashFill } from 'react-icons/bs'
import { schemaSignUp } from '../../schemas/schemaSignUp'
import { SignUp } from '../../services/userServices'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { UserDataRegister } from '../../types/User'

const Register = () => {

    const [showPasswordCreate, setShowPasswordCreate] = useState(false)

    const tooglePasswordCreate = () => setShowPasswordCreate(!showPasswordCreate)

    const navigate = useNavigate()

    const {
      register: registerSignUp,
      handleSubmit: handleSubmitSignUp,
      reset: resetCreate,
      formState: { errors: errorsSignUp }
    } = useForm({
      mode: "onSubmit",
      resolver: zodResolver(schemaSignUp),
      defaultValues: {
        name: '', email: '', password: ''
      }
    })
  
    const handleFormSignUp = async (data: UserDataRegister) => {
      
      try {
        const response = await SignUp(data)
        Cookies.set("token", response.data.token, { expires: 1 })
        console.log(response)
        navigate('/')
        resetCreate()
      } catch (error) {
        console.log(error)
      }
      
    }


  return (
    <form onSubmit={handleSubmitSignUp(handleFormSignUp)}>
    <h1>Criar Conta</h1>
     <span>Faça seu cadastro para ter acesso as publicações</span>
        <input 
            type="text" 
            {...registerSignUp('name')} 
            placeholder="Nome"
        />

        {errorsSignUp.name?.message && (
        <SpanError>{errorsSignUp.name.message}</SpanError>
        )}

       <input 
         type="email"
         {...registerSignUp('email')} 
         placeholder="Email"
       />
    
        {errorsSignUp.email?.message && (
        <SpanError>{errorsSignUp.email.message}</SpanError>
        )}

        <input 
         type={showPasswordCreate ? "text" : "password"} 
         {...registerSignUp('password')}  
         placeholder="Senha"
        />

        <IconCreate onClick={() => tooglePasswordCreate()}>{showPasswordCreate ? <BsEyeSlashFill /> : <BsEyeSlash />}</IconCreate>
    
        {errorsSignUp.password?.message && (
        <SpanError>{errorsSignUp.password.message}</SpanError>
        )}

        <button>Cadastrar-se</button>
</form>
  )
}

export default Register