import { useContext } from 'react'
import { SpanError } from '../../pages/Auth/Auth.styled'
import { useRegister } from '../../hooks/useRegister'
import { ToogleContext } from '../../Context/ToogleContext'
import { BiLoader } from 'react-icons/bi'

const Register = () => {

  const { 
    registerSignUp, 
    handleFormSignUp, 
    handleSubmitSignUp, 
    errorsSignUp, 
    error,
    isLoading 
  } = useRegister()

  const { toogleBanner, setToogleBanner } = useContext(ToogleContext)

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
         type="password" 
         {...registerSignUp('password')}  
         placeholder="Senha"
        />
    
        {errorsSignUp.password?.message && (
        <SpanError>{errorsSignUp.password.message}</SpanError>
        )}

         {error ? <SpanError>{error}</SpanError> : null}

         <button>{isLoading ? <i className="loading-icon"><BiLoader /></i> : 'Cadastrar-se'}</button>
        <span 
        className='spanMobile'
        onClick={() => setToogleBanner(!toogleBanner)}
        >Já possui cadastro ?</span>
    </form>
  )
}

export default Register