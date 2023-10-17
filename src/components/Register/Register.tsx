import { useState } from 'react'
import { IconCreate, SpanError } from '../../pages/Auth/Auth.styled'
import { BsEyeSlash, BsEyeSlashFill } from 'react-icons/bs'
import { useRegister } from '../../hooks/useRegister'

const Register = () => {

  const [showPasswordCreate, setShowPasswordCreate] = useState(false)

  const tooglePasswordCreate = () => setShowPasswordCreate(!showPasswordCreate)

  const { registerSignUp, handleFormSignUp, handleSubmitSignUp, errorsSignUp } = useRegister()

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

        <IconCreate 
         onClick={() => tooglePasswordCreate()
         }>
          {showPasswordCreate ? 
          <BsEyeSlashFill /> : <BsEyeSlash />}
        </IconCreate>
    
        {errorsSignUp.password?.message && (
        <SpanError>{errorsSignUp.password.message}</SpanError>
        )}

        <button>Cadastrar-se</button>
    </form>
  )
}

export default Register