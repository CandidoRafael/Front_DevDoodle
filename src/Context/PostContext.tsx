import { createContext, useState } from "react";
import { Page, Post } from "../types/Post";

export const PostContext = createContext<any>({})

export const PostProvider = ({ children }: { children: React.ReactNode }) => {
    const [posts, setPosts] = useState<Page<Post>>()
    const [post, setPost] = useState<Post | undefined>()
    const [page, setPage] = useState<number>(0)
    
    return (
        <PostContext.Provider value={{
            posts, 
            setPosts, 
            page, 
            setPage,
            post,
            setPost
            }}>
            { children }
        </PostContext.Provider>
    )
}