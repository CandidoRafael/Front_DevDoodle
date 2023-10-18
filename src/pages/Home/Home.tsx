import { HomePosts, HomeTopPost, TitleHome } from './Home.styled'
import { Post } from '../../types/Post'
import { usePost } from '../../hooks/usePost'
import { useTopPost } from '../../hooks/useTopPost'
import Card from "../../components/Card/Card"
import CardTopPost from '../../components/CardTopPost/CardTopPost'

const Home = () => {
  
  const { PostsData, isLoadingPosts } = usePost()
  const { topPostData, isLoadingTopPost } = useTopPost()
  console.log(PostsData)
  return (
    <>
    <TitleHome>Trending</TitleHome>
      <HomeTopPost>
        {isLoadingTopPost ? ( null
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
        {isLoadingPosts ? (
          <p>Loading...</p>
        ) : (
          PostsData?.map((post: Post) => (
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
        )))}
      </HomePosts>
    </>
  )
}

export default Home