import { useQuery } from '@tanstack/react-query'
import PostServices from '../services/postsServices'


export const useTopPost = () => {

    const { getTopPosts } = PostServices()

    const { data: topPostData , isLoading: isLoadingTopPost } = useQuery({
        queryKey: ['topPost'],
        queryFn: getTopPosts
      })

    return { topPostData, isLoadingTopPost }
}