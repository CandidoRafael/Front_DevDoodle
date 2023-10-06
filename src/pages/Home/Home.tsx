import { useEffect, useState } from 'react'
import { HomePosts, HomeTopPost } from './Home.styled'
import { getAllPosts, getTopPosts } from '../../services/postsServices'

import Sidebar from "../../components/Sidebar/Sidebar"
import Card from "../../components/Card/Card"

type Post = {
    id: string
    avatar: string
    banner: string
    comments: string
    likes: string
    text: string
    title: string
    username: string
    name: string
}

const Home = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [posts, setPosts] = useState([])
  const [topPost, setTopPost] = useState<Post | null >(null)
  
  async function findPost() {
    const response =  await getAllPosts()
    setPosts(response.data.results)

    
    const topPostResponse = await getTopPosts()
    const { data } = topPostResponse
    setTopPost(data.post)
  }
  
  useEffect(() => {
    findPost()
  }, [])

  return (
    <>
     
      <Sidebar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />

      <HomeTopPost>
        {topPost ? (
          <Card
          size="true"
          title={topPost.title} 
          image={topPost.banner}
          likes={topPost.likes}
          comments={topPost.comments}       
        />
        ) : ( <p>Carregando...</p> )}
      </HomeTopPost>

      <HomePosts>
        {posts?.map((post: Post) => (
          <Card
            key={post.id}
            title={post.title}
            text={post.text}
            image={post.banner}
            likes={post.likes}
            comments={post.comments}        
          />
        ))}
      </HomePosts>
    </>
  )
}

export default Home