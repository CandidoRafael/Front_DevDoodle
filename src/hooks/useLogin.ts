import { useMutation } from "@tanstack/react-query"
import { SignIn } from "../services/userServices"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { schemaSignIn } from "../schemas/schemaSignIn"
import { UserDataLogin } from "../types/User"
import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie"

export const useLogin = () => {
    const navigate = useNavigate()
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

      const { mutateAsync: loginMutation } = useMutation({
        mutationFn: SignIn
      })
    
      const handleFormSignIn = async (data: UserDataLogin) => {
         try {
          const response = await loginMutation(data)
          console.log(response.data)
          Cookies.set("token", response.data, { expires: 1 })
          navigate('/')
          resetSignIn()
         } catch (error) {
          console.log(error)
         }
      }

      return {
        registerSignIn,
        handleSubmitSignIn,
        handleFormSignIn,
        errorsSignIn
      }
}