import axios from "axios";
import Cookies from "js-cookie";
import { Page, Post, PostData } from "../types/Post";
import { PostContext } from "../Context/PostContext";
import { useContext } from 'react'

export const PostServices = () => {
    const baseURL = 'https://apidevdoodle.vercel.app'
    
    const token = Cookies.get('token')
    const headers = {
        Authorization: `Bearer ${token}`
    };

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
        const response = await axios.get(`${baseURL}/posts/byUserId`,{ headers })
        return response
    }

    const createPost = async (postData: PostData) => {

        const response = await axios.post(`${baseURL}/posts/create`, postData, { headers })
        return response.data
    }

    const loadSinglePost = async (title: string | undefined) => { 
        const response = await axios.get(`${baseURL}/posts/search?title=${title}`)
        return response.data
    }

    const addComment = async (postId: string, commentData: any) => {

        const response = await axios.patch(`${baseURL}/posts/${postId}/comment`, commentData, { headers })
        return response.data
    }

    const deleteComment = async (postId: string, idComment: string ) => {
        const response = await axios.patch(`${baseURL}/posts/${postId}/${idComment}/comment`, {}, { headers })
        return response.data
    }

    const likePost = async (postId: string) => {
        const response = await axios.patch(`${baseURL}/posts/${postId}/like`, {}, { headers })
        response.data
    }


    return { 
        getAllPosts, 
        getTopPosts, 
        searchPosts, 
        getAllPostsByUser,
        createPost,
        loadSinglePost,
        addComment,
        deleteComment,
        likePost
    }
}

export default PostServices 
