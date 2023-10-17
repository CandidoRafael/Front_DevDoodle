import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { schemaSignUp } from "../schemas/schemaSignUp"
import { useNavigate } from "react-router-dom"
import { UserDataRegister } from "../types/User"
import { SignUp } from "../services/userServices"
import Cookies from "js-cookie"

export const useRegister = () => {
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
      
      const navigate = useNavigate()
  
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
      return {
        registerSignUp,
        handleFormSignUp,
        handleSubmitSignUp,
        errorsSignUp
      }
}