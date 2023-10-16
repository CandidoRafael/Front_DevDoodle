import axios, { AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { User, UserDataLogin, UserDataRegister } from "../types/User";

const baseURL = 'https://apidevdoodle.vercel.app'

export const SignUp = (data: UserDataRegister): Promise<AxiosResponse>  => {

    const body = {
        ...data,
        username: generateUserName(data.name),
        avatar: 'https://media.istockphoto.com/id/1127367070/pt/vetorial/user-member-vector-icon-for-social-net-or-smartphone-ui-app-design-isolated-avatar-profile.jpg?s=612x612&w=0&k=20&c=rIh6e4vRa_Hw9LiELv1K83T7at1LxUQCiE30XGQ5xwY=',
        background: 'https://i.imgur.com/XbRg9D7.png'
    }

    const response = axios.post(`${baseURL}/user/create`, body)
    return response
}

export const SignIn = (data: UserDataLogin): Promise<AxiosResponse> => {
   const response = axios.post(`${baseURL}/auth/login`, data)
   return response
}

export const userLogged = (): Promise<AxiosResponse<User>> => {

    const response = axios.get<User>(`${baseURL}/user/findById`, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`
        }
    })
    return response
}

function generateUserName(name: string) {
    const nameWithoutSpace = name.replace(/\s/g, "").toLowerCase()
    const randomNumber = Math.floor(Math.random() * 1000)
    return `${nameWithoutSpace}${randomNumber}`
}