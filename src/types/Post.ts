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