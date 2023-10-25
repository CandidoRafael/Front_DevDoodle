import { useRef, useState } from "react"
import { TitleHome } from "../Home/Home.styled"
import { ContainerPost, MainPost } from "./CreatePost.styled"
import JoditEditor from "jodit-react"
import { ButtonPagination } from "../../components/Pagination/Pagination.styled"
import PostServices from "../../services/postsServices"

const CreatePost = () => {

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

  return (
    <ContainerPost>
      <TitleHome>Crie seu Post</TitleHome>
      <h3>Contribua para a comunidade dev :)</h3>  
      
      <MainPost>
        <h2>O que você está pensando ?</h2>
        <form onSubmit={handleCreatePost}>
          <div>
            <label htmlFor="title">Título do Post</label>
            <input 
             type="text" 
             name="title"
             value={post.title}
             placeholder="Digite seu título..." 
             onChange={fieldChange}
             />
          </div>
          <div>
            <label htmlFor="banner">Banner</label>
            <input 
            type="text"
            name="banner"
            value={post.banner}
            placeholder="Endereço de imagem..." 
            onChange={fieldChange}
            />
          </div>
          <div>
            <label htmlFor="text">Conteudo do seu Post</label>
            <JoditEditor 
              ref={editor}
              value={post.text}
              onChange={(newContent) => textFieldChange(newContent)}
            />
          </div>
          <ButtonPagination type="submit">Publicar</ButtonPagination>
        </form>
      </MainPost>
    </ContainerPost>
  )
}


export default CreatePost