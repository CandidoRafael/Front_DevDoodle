import { useMutation } from "@tanstack/react-query"
import { SignIn } from "../services/userServices"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { schemaSignIn } from "../schemas/schemaSignIn"
import { UserDataLogin } from "../types/User"
import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie"
import { useState } from "react"

export const useLogin = () => {
    const [errorApi, setErrorApi] = useState('')
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

      const { mutateAsync: loginMutation, isLoading } = useMutation({
        mutationFn: SignIn
      })
    
      const handleFormSignIn = async (data: UserDataLogin) => {
         try {
          const response = await loginMutation(data)

          Cookies.set("token", response.data, { expires: 1 })
          navigate('/')
          resetSignIn()
         } catch (error: any) {
            setErrorApi(error.response.data)
         }
      }

      return {
        registerSignIn,
        handleSubmitSignIn,
        handleFormSignIn,
        errorsSignIn, 
        errorApi,
        isLoading
      }
}