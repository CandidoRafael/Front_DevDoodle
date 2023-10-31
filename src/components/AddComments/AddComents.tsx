import { useContext, useState } from 'react'
import { AddComment, ButtonCancel, ButtonComment, ContainerButton, ContainerTextarea } from './AddComments.styled'
import { UserContext } from '../../Context/UserContext'

const AddComments = ({ addCommentToPost }: any) => {

const [commentsContent, setCommentsContent] = useState({ message: '' })

const { user } = useContext(UserContext)

const handleComment = () => {
 
  if(commentsContent.message.length) {
    addCommentToPost(commentsContent)
    setCommentsContent({ message: ''}) 
  }
}

const cancelComment = () => {
    setCommentsContent({ message: '' })
}

  return (
    <AddComment>
     <ContainerTextarea>
      <img src={user?.avatar} alt="" />
       <textarea 
        name="comment" 
        id="comment" 
        cols={30} 
        rows={10}
        value={commentsContent.message}
        onChange={(e) => setCommentsContent({ message: e.target.value })}
        placeholder='Adicione um comentário...'
       />
     </ContainerTextarea>

    <ContainerButton>
     <ButtonComment type='button' onClick={handleComment}>Comentar</ButtonComment>
     <ButtonCancel onClick={cancelComment}>Cancelar</ButtonCancel>
   </ContainerButton>

</AddComment>
  )
}

export default AddComments