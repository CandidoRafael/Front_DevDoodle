export interface UserDataLogin {
    email: string
    password: string
}

export interface UserDataRegister extends UserDataLogin {
    name: string
}

export interface User {
    name: string
    email: string
    password: string
    username: string
    avatar: string
    background: string
}

export interface UserProfile {
    name: string
    username: string
    avatar: string
    background: string
}
