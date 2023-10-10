import { useState } from 'react'
import { HomePosts, HomeTopPost } from './Home.styled'

import Sidebar from "../../components/Sidebar/Sidebar"
import Card from "../../components/Card/Card"
import { Post } from '../../types/Post'
import { usePost } from '../../hooks/usePost'
import { useTopPost } from '../../hooks/useTopPost'

const Home = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const { PostsData, isLoadingPosts } = usePost()
  const { topPostData, isLoadingTopPost } = useTopPost()

  return (
    <>
     
      <Sidebar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />

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