import { HomePosts, HomeTopPost, TitleHome } from './Home.styled'
import { usePost } from '../../hooks/usePost'
import { useTopPost } from '../../hooks/useTopPost'
import Card from "../../components/Card/Card"
import CardTopPost from '../../components/CardTopPost/CardTopPost'
import Pagination from '../../components/Pagination/Pagination'

const Home = () => {
  
  const { PostsData, isLoadingPosts } = usePost()
  const { topPostData, isLoadingTopPost } = useTopPost()

  return (
    <>
      <TitleHome>Trending</TitleHome>
      {isLoadingPosts ? (
        <p>Loading...</p>
        ) : 
      <>
     <HomeTopPost>
       {isLoadingTopPost && isLoadingTopPost ? ( null
       ) : (  <CardTopPost
        size="true"
        avatar={topPostData.avatar}
        title={topPostData.title} 
        image={topPostData.banner}
        likes={topPostData.likes}
        username={topPostData.username}
        comments={topPostData.comments}       
        />)}
     </HomeTopPost>

     <HomePosts>
       {PostsData?.results?.map((post) => (
         <Card
         key={post.id}
         title={post.title}
         avatar={post.avatar}
         text={post.text}
         image={post.banner}
         likes={post.likes}
         username={post.username}
         comments={post.comments}        
         />
         ))}
     </HomePosts>
     <Pagination />
    </>
    }
    </>
  )
}

export default Home