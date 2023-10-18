import './Auth.css'
import { useContext } from 'react'
import { AuthContainer, ContainerToogle, FormContainer } from './Auth.styled'
import { Login } from '../../components/Login/Login'
import { ToogleContext } from '../../Context/ToogleContext'

import logo from '../../assets/logo.png'
import Register from '../../components/Register/Register'

const Auth = () => {

  const { toogleBanner, setToogleBanner } = useContext(ToogleContext)
  
  return (
  <AuthContainer>
    <ContainerToogle className={toogleBanner ? "container active": "container"}>
     <FormContainer className="sign-up">
       <Register />
     </FormContainer>
     <FormContainer className="sign-in">
        <Login />
     </FormContainer>

    <div className="toggle-container">
        <div className="toggle">
            <div className="toggle-panel toggle-left">
                <img src={logo} alt="" />
                <h1>Bem-vindo de Volta!</h1>
                <p>Tem uma conta? Faça seu Login!</p>
                <button className="hidden" onClick={() => setToogleBanner(!toogleBanner)}>Logar</button>
            </div>
            <div className="toggle-panel toggle-right">
                <img src={logo} alt="" />
                <h1>Olá, amigo :)</h1>
                <p>Registre-se para criar e acessar publicações, venha agregar o mundo tech!</p>
                <button className="hidden" onClick={() => setToogleBanner(!toogleBanner)}>Registrar</button>
            </div>
        </div>
    </div>

    </ContainerToogle>
   </AuthContainer>
  )
}

export default Auth