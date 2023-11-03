
import { useContext, useEffect, useRef } from 'react';
import { CommentArticle,  IconDeleteComment,  SectionComment } from './Comments.styled'
import { UserContext } from '../../Context/UserContext';
import { MdDelete } from 'react-icons/md'

const Comments = ({ comments, deleteComment }: any) => {

  const { user } = useContext(UserContext)

  const commentsRef = useRef<HTMLDivElement | null>(null)
  
   const formatDate = (data: any) => {
        const partes = data.split('-'); 
      
        if (partes.length === 3) {
    
          const [ano, mes, dia] = partes; 
      
          return `${dia}/${mes}/${ano}`; 
        }
        return data;
      }

     useEffect(() => {
      if(window.location.hash === '#comments' && commentsRef.current) {
        commentsRef.current.scrollIntoView({ behavior: 'smooth' });
      }
     }, []) 
  return (
    <>
      <h2>Comentarios ({comments?.length})</h2>
    <CommentArticle id='comments' ref={commentsRef}>
     
        {comments?.map((comment: any) => (
            <SectionComment key={comment?.idComment}>
                <section>
                    <img src={comment?.user?.avatar} alt="User avatar" />
                    <div>
                     <p>{comment?.user?.username}</p>
                     <span>{formatDate(comment.createdAt.split('T')[0])}</span>
                    </div>
                    <IconDeleteComment onClick={() => deleteComment(comment?.idComment)}>
                    {user?._id === comment.userId ? (
                      <MdDelete  />
                      ) : null}
                    </IconDeleteComment>
                </section>
                <p>{comment?.message}</p>
            </SectionComment>
        )).reverse()}

    </CommentArticle>
    </>
  )
}

export default Comments