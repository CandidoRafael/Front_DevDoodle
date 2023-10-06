import axios from "axios";

const baseURL = 'https://api-devdoodle.onrender.com' 

export const getAllPosts =  () => {
    const response =  axios.get(`${baseURL}/posts`)

    return response
}

export const getTopPosts =  () => {
    const response =  axios.get(`${baseURL}/posts/top`)

    return response
}




