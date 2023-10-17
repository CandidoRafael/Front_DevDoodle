import { HomePosts, HomeTopPost } from './Home.styled'
import { Post } from '../../types/Post'
import { usePost } from '../../hooks/usePost'
import { useTopPost } from '../../hooks/useTopPost'
import Card from "../../components/Card/Card"

const Home = () => {
  
  const { PostsData, isLoadingPosts } = usePost()
  const { topPostData, isLoadingTopPost } = useTopPost()

  return (
    <>
      <HomeTopPost>
        {isLoadingTopPost ? ( null
        ) : (  <Card
          size="true"
          title={topPostData.title} 
          image={topPostData.banner}
          likes={topPostData.likes}
          comments={topPostData.comments}       
        />)}
      </HomeTopPost>

      <HomePosts>
        {isLoadingPosts ? (
          <p>Loading...</p>
        ) : (
          PostsData?.map((post: Post) => (
            <Card
              key={post.id}
              title={post.title}
              text={post.text}
              image={post.banner}
              likes={post.likes}
              comments={post.comments}        
            />
        )))}
      </HomePosts>
    </>
  )
}

export default Home