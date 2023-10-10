import { useQuery } from '@tanstack/react-query'
import { getTopPosts } from '../services/postsServices'

export const useTopPost = () => {
    const { data: topPostData , isLoading: isLoadingTopPost } = useQuery({
        queryKey: ['topPost'],
        queryFn: getTopPosts
      })

    return { topPostData, isLoadingTopPost }
}