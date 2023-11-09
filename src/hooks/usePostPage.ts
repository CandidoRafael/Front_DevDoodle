import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { PostContext } from "../Context/PostContext"
import PostServices from "../services/postsServices"
import Prism from 'prismjs'
import toast, { Toaster } from "react-hot-toast"

const usePostPage = () => {

    const { title } = useParams()
    const { post, setPost } = useContext(PostContext)
    const { loadSinglePost, addComment, deleteComment } = PostServices()
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(false)
  
    const handlePost = async () => {
  
      try {
        setLoading(true)
        const res = await loadSinglePost(title)
        
        setPost(res.foundPosts[0])
        setComments(res.foundPosts[0].comments)
        setLoading(false)
        
        
        setTimeout(() => {
          Prism.highlightAll()
        }, 1000)
        
      } catch (error) {
        console.log(error)
        setLoading(true)
      }
    }
    
    useEffect(() => {
      handlePost()
    }, [title])
  
    const addCommentToPost = async (comment: any) => {
      try {
        const resp = await addComment(post.id, comment);
        setComments(resp.comment)
        toast.success('Comentário publicado!', {
          duration: 2200,
          position: 'bottom-right'
      })
      } catch (error) {
        console.log(error);
      }
    }
  
    const handleDelete = async (idComment: string) => {
      try {
        await deleteComment(post.id, idComment)
        const deleteComments = comments.filter((comment: any) => ( comment.idComment !== idComment ))
        setComments(deleteComments)
        toast.error('Comentário deletado!', {
          duration: 2100,
          position: 'bottom-right'
      })
      } catch (error) {
        console.log(error)
      }
    }

    return {
        loading,
        post,
        comments,
        addCommentToPost,
        handleDelete,
        Toaster
    }
}

export default usePostPage