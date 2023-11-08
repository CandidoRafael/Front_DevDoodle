import { useRef, useState } from 'react'
import PostServices from '../services/postsServices'

const useCreatePost = () => {
    const editor = useRef(null)
    const { createPost } = PostServices()
    const [post, setPost] = useState({
      title: '',
      banner: '',
      text: ''
    })
   
    const fieldChange = (event: any) => {
       setPost({...post, [event.target.name]: event.target.value})
    }
  
    const textFieldChange = (data: any) => {
      setPost({...post, 'text': data})
    }
  
    const handleCreatePost = async (event: any) => {
      event.preventDefault()
  
      try {
        if(post.title.trim() === '') {
          alert('O Titulo não pode ser vazio')
          return
        }
  
        const res = await createPost(post)
        setPost({
          title: '',
          banner: '',
          text: ''
        })
        console.log(res)
  
      } catch (error) {
        console.log(error)
      }
    }

    return {
        post,
        editor,
        handleCreatePost,
        fieldChange,
        textFieldChange
    }
}

export default useCreatePost