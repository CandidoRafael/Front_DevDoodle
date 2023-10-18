import { SpanError } from "../../pages/Auth/Auth.styled"
import { useLogin } from "../../hooks/useLogin"
import { ToogleContext } from "../../Context/ToogleContext"
import { useContext } from 'react'
import { BiLoader } from 'react-icons/bi'

export const Login = () => {
   
  const { 
    registerSignIn, 
    handleFormSignIn, 
    handleSubmitSignIn, 
    errorsSignIn, 
    errorApi,
    isLoading
   } = useLogin()
  
  const { toogleBanner, setToogleBanner } = useContext(ToogleContext)

  return (
    <>
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
    type="password" 
    {...registerSignIn('password')}  
    placeholder="Senha"
    />
 
    {errorsSignIn.password?.message && (
      <SpanError>{errorsSignIn.password.message}</SpanError>
    )}

    {errorApi ? <SpanError>{errorApi}</SpanError> : null}
    <button>{isLoading ? <i className="loading-icon"><BiLoader /></i> : 'Entrar'}</button>
      <span 
      className="spanMobile"
      onClick={() => setToogleBanner(!toogleBanner)}
      >Não possui conta ?</span>
</form>
</>
  )
}
