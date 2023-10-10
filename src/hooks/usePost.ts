import { useQuery } from '@tanstack/react-query'
import { getAllPosts } from '../services/postsServices'

export const usePost = () => {
    
    const { data: PostsData , isLoading: isLoadingPosts } = useQuery({
        queryKey: ['posts'],
        queryFn: getAllPosts,
        
      })

      return { PostsData, isLoadingPosts }
}