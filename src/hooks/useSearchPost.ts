import { useEffect, useState } from 'react'

import PostServices from '../services/postsServices'
import { useParams } from 'react-router-dom'

const useSearchPosts = () => {
  const [titlePost, setTitlePost] = useState('')
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
    if(title)
    handleSearch()
  }, [title])

  return {
    posts,
    title,
    titlePost,
    setTitlePost
  }
}

export default useSearchPosts