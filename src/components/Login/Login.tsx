import { Icon, SpanError } from "../../pages/Auth/Auth.styled"

import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { BsEyeSlash } from 'react-icons/bs'
import { BsEyeSlashFill } from 'react-icons/bs'
import { schemaSignIn } from "../../schemas/schemaSignIn"

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false)

  const tooglePassword = () => setShowPassword(!showPassword)
    
  const { 
    register: registerSignIn, 
    handleSubmit: handleSubmitSignIn, 
    reset: resetSignIn, 
    formState: { errors: errorsSignIn } 
    } = useForm({
    mode: 'onSubmit',
    defaultValues: { email: '', password: ''},
    resolver: zodResolver(schemaSignIn)
  })

  const handleFormSignIn = (data: any) => {
     console.log(data)
     resetSignIn()
  }

  return (
    <form onSubmit={handleSubmitSignIn(handleFormSignIn)}>
    <h1>Login</h1>
    <span>Digite seu email e senha</span>
    <input 
    type="email" {...registerSignIn('email')} 
    placeholder="Email"
    />

    {errorsSignIn.email?.message &&  (
      <SpanError>{errorsSignIn.email.message}</SpanError>
    )}

    <input 
    type={showPassword ? "text" : "password"} 
    {...registerSignIn('password')}  
    placeholder="Senha"
    />

      <Icon onClick={() => tooglePassword()}>{showPassword ? <BsEyeSlashFill /> : <BsEyeSlash />}</Icon>
     
    {errorsSignIn.password?.message && (
      <SpanError>{errorsSignIn.password.message}</SpanError>
    )}

    <button>Entrar</button>
</form>
  )
}
