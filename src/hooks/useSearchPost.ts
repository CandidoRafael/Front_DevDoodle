import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostServices from '../services/postsServices'

const useSearchPosts = () => {
  const { title } = useParams()
  const { searchPosts } = PostServices()
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

  return {
    posts,
    title,
  }
}

export default useSearchPosts