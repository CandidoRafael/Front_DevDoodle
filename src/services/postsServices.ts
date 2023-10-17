import axios from "axios";
import { Post, PostResults } from "../types/Post";
import Cookies from "js-cookie";

const baseURL = 'https://apidevdoodle.vercel.app' 

export const getAllPosts = async () => {
    const response =  await axios.get<PostResults>(`${baseURL}/posts`)

    return response.data.results
}

export const getTopPosts = async () => {
    const response = await axios.get(`${baseURL}/posts/top`)

    return response.data.post
}

export const searchPosts = async (title: string | undefined) => {
      
    const response = await axios.get(`${baseURL}/posts/search?title=${title}`)
      
    return response.data
  }

export const getAllPostsByUser = async () => {
    const response = await axios.get(`${baseURL}/posts/byUserId`, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`
        }
    })

    return response
}