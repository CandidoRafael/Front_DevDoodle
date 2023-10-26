import { useQuery } from '@tanstack/react-query'
import PostServices from '../services/postsServices'
import { PostContext } from '../Context/PostContext'
import { useContext } from 'react'

export const usePost = () => {

  const { getAllPosts } = PostServices()

  const { page } = useContext(PostContext)

    const { data: PostsData , isLoading: isLoadingPosts } = useQuery({
        queryKey: ['posts', page],
        cacheTime: 5,
        queryFn: () => getAllPosts(page),
      })

      return { PostsData, isLoadingPosts }
}