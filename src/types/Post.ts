export type Post = {
    id: string
    avatar: string
    banner: string
    comments: string
    likes: string
    text: string
    title: string
    username: string
    name: string
}
 
export type PostResults = {
    results: Post[]
}

export type QueryResult<T> = {
    data: T | undefined;
    isLoading: boolean;
  };


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