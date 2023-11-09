export type Post = {
    id: string
    avatar: string
    banner: string
    comments: []
    likes: []
    text: string
    title: string
    username: string
    name: string,
    size: string
}


export type Page<T> = {
    limit: number
    nextUrl: string | null
    offset: number
    previousUrl: string | null
    results: Array<T>
    total: number
}

export type PostData = {
    title: string
    banner: string
    text: string
}

export type Comments = {
    createdAt: Date,
    idComment: string,
    message: string,
    user: {
        avatar: string,
        username: string
    }
    userId: string
}