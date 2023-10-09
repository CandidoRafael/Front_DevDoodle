import axios from "axios"

export const searchServices = () => {

  const baseURL = 'https://apidevdoodle.vercel.app' 

  const searchPosts = async (title: { title: string }) => {
      
    const response = await axios.get(`${baseURL}/search/${title}`)
      return response.data
  }

  return { searchPosts }
}