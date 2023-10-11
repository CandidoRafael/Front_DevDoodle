import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { IconCreate, SpanError } from '../../pages/Auth/Auth.styled'
import { BsEyeSlash, BsEyeSlashFill } from 'react-icons/bs'
import { schemaSignUp } from '../../schemas/schemaSignUp'

const Register = () => {

    const [showPasswordCreate, setShowPasswordCreate] = useState(false)

    const tooglePasswordCreate = () => setShowPasswordCreate(!showPasswordCreate)
  
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
  
    const handleFormSignUp = (data: any) => {
      console.log(data)
      console.log(errorsSignUp.email?.message)
      resetCreate()
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