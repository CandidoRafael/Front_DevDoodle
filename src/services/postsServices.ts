import axios from "axios";
import { Page, Post, PostData } from "../types/Post";
import Cookies from "js-cookie";
import { PostContext } from "../Context/PostContext";
import { useContext } from 'react'

export const PostServices = () => {
    const baseURL = 'https://apidevdoodle.vercel.app'

    const { setPosts } = useContext(PostContext)
    
    const getAllPosts = async (page: number) => {
    
        const response =  await axios.get<Page<Post>>(`${baseURL}/posts?limit=5&offset=${page}`)
        setPosts(response.data.results)
        return response.data
    }
    
    const getTopPosts = async () => {
        const response = await axios.get(`${baseURL}/posts/top`)
        return response.data.post
    }
    
     const searchPosts = async (title: string | undefined) => {
          
        const response = await axios.get(`${baseURL}/posts/search?title=${title}`)
        return response.data
      }
    
     const getAllPostsByUser = async () => {
        const response = await axios.get(`${baseURL}/posts/byUserId`, {
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        })
        return response
    }

    const createPost = async (postData: PostData) => {
        const token = Cookies.get("token");

        const headers = {
            Authorization: `Bearer ${token}`
        };
    
        const response = await axios.post(`${baseURL}/posts/create`, postData, { headers })
        return response.data
    }

    return { 
        getAllPosts, 
        getTopPosts, 
        searchPosts, 
        getAllPostsByUser,
        createPost 
    }
}

export default PostServices 
