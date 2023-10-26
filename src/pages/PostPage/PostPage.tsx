import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import PostServices from "../../services/postsServices"
import { Post } from "../../types/Post"
import { PostAuthor, PostContainer, PostImage } from "./PostPage.styled"
import Prism from 'prismjs'
import { PrismWrapper } from "./Prims.theme"
import { IconLoading } from "../Home/Home.styled"
import { AiOutlineLoading3Quarters } from "react-icons/ai"

const PostPage = () => {

  const { title } = useParams()
  const { loadSinglePost } = PostServices()
  const [post, setPost] = useState<Post | undefined>()
  const [loading, setLoading] = useState(false)

  const handlePost = async () => {
    try {
      setLoading(true)
      const res = await loadSinglePost(title)
      setPost(res.foundPosts[0])
      setLoading(false)
      console.log(post)
    } catch (error) {
      console.log(error)
      setLoading(true)
    }
  }

  useEffect(() => {
    handlePost()
    setTimeout(() => {
      Prism.highlightAll()
    }, 800)
  }, [])

  return (
    <PostContainer>
     {loading ? (
      <IconLoading>
          <AiOutlineLoading3Quarters />
      </IconLoading>
     ): (
      <>  
      <article>
      <h1>{post?.title}</h1>
      <PostAuthor>
        <img src={post?.avatar}  alt="Avatar" />
        <p>{post?.username}</p>
      </PostAuthor>
      <PostImage>
         <img src={post?.banner} alt="" />
      </PostImage>
    </article>

    <PrismWrapper dangerouslySetInnerHTML={{__html: post?.text || ''}}></PrismWrapper>
      </>
      
     )}
    </PostContainer>
  )
}

export default PostPage