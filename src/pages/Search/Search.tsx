import { SearchContainer, SearchPosts, TextResults } from "./Search.styled"
import Card from "../../components/Card/Card"
import useSearchPosts from "../../hooks/useSearchPost"

const Search = () => {

  const { posts, title } = useSearchPosts()

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
          <strong>{title}</strong>
        </TextResults>
        <SearchPosts>
          {posts.map((post: any) => (
            <Card
              key={post.id}
              post={post}      
            />
          ))}  
        </SearchPosts>  
      </SearchContainer> 
    </>
  )
}

export default Search