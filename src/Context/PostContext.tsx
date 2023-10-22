import { createContext, useState } from "react";
import { Page, Post } from "../types/Post";

export const PostContext = createContext<any>({})

export const PostProvider = ({ children }: { children: React.ReactNode }) => {
    const [posts, setPosts] = useState<Page<Post>>()
    const [page, setPage] = useState<number>(0)
    
    return (
        <PostContext.Provider value={{posts , setPosts, page, setPage}}>
            { children }
        </PostContext.Provider>
    )
}