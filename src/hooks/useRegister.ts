import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { schemaSignUp } from "../schemas/schemaSignUp"
import { useNavigate } from "react-router-dom"
import { UserDataRegister } from "../types/User"
import { SignUp } from "../services/userServices"
import Cookies from "js-cookie"
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"

export const useRegister = () => {

  const [error, setError] = useState('')
  const navigate = useNavigate()

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
      
      const { mutateAsync: registerMutation, isLoading } = useMutation({
        mutationFn: SignUp
        })
  
      const handleFormSignUp = async (data: UserDataRegister) => {
        
        try {
          const response = await registerMutation(data)
          Cookies.set("token", response.data, { expires: 1 })
          resetCreate()
          navigate('/')
        } catch (error: any) {
          setError(error.response.data)
        }
      }
      return {
        registerSignUp,
        handleFormSignUp,
        handleSubmitSignUp,
        errorsSignUp,
        error,
        isLoading
      }
}