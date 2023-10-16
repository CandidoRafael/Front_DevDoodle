import { useForm } from "react-hook-form"
import { schemaSearch } from "../schemas/schemaSearch"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router-dom"

const useSearchPosts = () => {

const { 
  register, 
  handleSubmit, 
  formState: { errors }, 
  reset 
} = useForm({
  mode: "onSubmit",
  defaultValues: {
    title: ''
  },
  resolver: zodResolver(schemaSearch)
})

const navigate = useNavigate()

const handleSearch = (data:any) => {
  navigate(`posts/search/${data.title}`)
  reset()
}
    return { register, handleSubmit, handleSearch, errors, navigate }
}

export default useSearchPosts