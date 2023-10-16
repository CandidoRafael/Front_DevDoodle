import { Icon, SpanError } from "../../pages/Auth/Auth.styled"
import { useState } from "react"
import { BsEyeSlash } from 'react-icons/bs'
import { BsEyeSlashFill } from 'react-icons/bs'
import { useLogin } from "../../hooks/useLogin"

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const tooglePassword = () => setShowPassword(!showPassword)
 
  const { registerSignIn, handleFormSignIn, handleSubmitSignIn, 
    errorsSignIn } = useLogin()
  
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
