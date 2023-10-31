import { PrismWrapper } from "./Prims.theme"
import { PostAuthor, PostContainer, PostImage } from "./PostPage.styled"
import { IconLoading } from "../Home/Home.styled"
import { AiOutlineLoading3Quarters } from "react-icons/ai"

import Comments from "../../components/Comments/Comments"
import AddComments from '../../components/AddComments/AddComents'
import usePostPage from "../../hooks/usePostPage"


const PostPage = () => {

  const { 
    loading, 
    post, 
    comments, 
    addCommentToPost, 
    handleDelete,
    Toaster
   } = usePostPage()

  return (
    <PostContainer>
     {loading ? (
      <IconLoading>
          <AiOutlineLoading3Quarters />
      </IconLoading>
     ): (
      <>  
      <article>
        <h1>{post?.title}</h1>
        <PostAuthor>
          <img src={post?.avatar}  alt="Avatar" />
          <p>{post?.username}</p>
        </PostAuthor>
        <PostImage>
          <img src={post?.banner} alt="" />
        </PostImage>
      </article>

      <PrismWrapper dangerouslySetInnerHTML={{__html: post?.text || ''}}></PrismWrapper>

        <AddComments addCommentToPost={addCommentToPost} />
        <Comments comments={comments} deleteComment={handleDelete} />
        <Toaster 
           toastOptions={{
            success: {
              style: {
                background: 'var(--color-blue-primary)',
                color: '#fff'
              },
            },
            error: {
              style: {
                background: 'darkred',
                color: '#fff'
              },
            },
          }}
        />
      </>
     )}
    </PostContainer>
  )
}

export default PostPage