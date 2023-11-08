import { TitleHome } from "../Home/Home.styled"
import { ContainerPost, MainPost, Notice } from "./CreatePost.styled"
import JoditEditor from "jodit-react"
import { ButtonPagination } from "../../components/Pagination/Pagination.styled"
import { AiFillWarning } from "react-icons/ai"
import { Link } from "react-router-dom"
import useCreatePost from "../../hooks/useCreatePost"

const CreatePost = () => {

  const {
    post,
    editor,
    handleCreatePost,
    fieldChange,
    textFieldChange
  } = useCreatePost()

  return (
    <ContainerPost>
      <TitleHome>Crie seu Post</TitleHome>
      <h3>Contribua para a comunidade dev :)</h3>  
      
      <Notice>
        <AiFillWarning />  <p>Atenção: Pedimos que <Link to='/tutorial'>leia isso antes</Link> de fazer sua primeira publicação.</p>
      </Notice>

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