import { AiOutlineLike, AiFillLike } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { CardBody, CardContainer, CardFooter, CardHeader } from './CardTopPost.styled'
import { Link } from 'react-router-dom'
import { Post } from '../../types/Post'
import useLikeTopPost from '../../hooks/useLikeTopPost'

const CardTopPost = ({ topPost } : { topPost: Post }) => {

  const { isLiked, likeCount, handleLike } = useLikeTopPost(topPost)

  return (
    <CardContainer>
      <CardBody>
        <img  src={topPost.banner} alt="Imagem" />
        <div>
          <CardHeader size={topPost.size}>
            <Link to={`/post/${topPost.title}`}>
            <h2 >{topPost.title}</h2>
            </Link>

            <section>
              <img src={topPost.avatar} alt="Imagem Autor" />
              <p>{topPost.username}</p>
            </section>
          </CardHeader>

          <CardFooter>
            <section>
              <i onClick={() => handleLike()}>
               {isLiked ? <AiFillLike /> : <AiOutlineLike />}
              </i>
              <span>{likeCount}</span>
            </section>

            <section>
              <Link to={`/post/${topPost.title}#comments`}>
               <FaRegComment />
              </Link>
              <span>{topPost.comments?.length}</span>
            </section>
          </CardFooter>
        </div>
      </CardBody>
    </CardContainer>
  )
}

export default CardTopPost