import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { searchPosts } from "../../services/postsServices"
import Card from "../../components/Card/Card"
import { SearchContainer, SearchPosts, TextResults } from "./Search.styled"

const Search = () => {

  const { title } = useParams()

  const [ posts, setPosts ] = useState([])

  const handleSearch = async () => {
      try {
        const postApi = await searchPosts(title)
        setPosts(postApi.foundPosts)
      } catch (error) {
        console.log(error)
        setPosts([])
      }
  }
  
  useEffect(() => {
    handleSearch()
  }, [title])

  return (
    <>
      <SearchContainer>
        <TextResults>
          <span>
            {posts.length ? `Encontramos ${posts.length} ${
              posts.length > 1 ? "resultados" : "resultado"
            } para: `
            : `Não encontramos resultados para: `
          }
          </span>
          <b>{title}</b>
        </TextResults>
        <SearchPosts>
          {posts.map((post: any) => (
            <Card
              key={post.id}
              title={post.title}
              text={post.text}
              image={post.banner}
              likes={post.likes}
              comments={post.comments}        
            />
          ))}  
        </SearchPosts>  
      </SearchContainer> 
    </>
  )
}

export default Search