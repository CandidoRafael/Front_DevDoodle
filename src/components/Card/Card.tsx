import { AiOutlineLike } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { CardBody, CardContainer, CardFooter, CardHeader  } from './Card.styled'
import { TextLimit } from '../TextLimit/TextLimit'
import { Link } from 'react-router-dom'
import { Post } from '../../types/Post'


const Card = ({ post } : { post: Post }) => {

  return (
    <CardContainer>
    <CardBody>
      <div>
        <CardHeader size={post?.size}>
          <Link to={`/post/${post?.title}`}>
            <h2>{post?.title}</h2>
          </Link>
          <Link to={`/post/${post?.title}`}>
            <TextLimit text={post?.text} limit={60} />
          </Link>
          
        <section>
           <img src={post?.avatar} alt="imagem" />
           <p>{post?.username}</p>
        </section>
        </CardHeader>

        <CardFooter>
          <section>
            <AiOutlineLike />
            <span>{post?.likes?.length}</span>
          </section>

          <section>
            <Link to={`/post/${post.title}#comments`}>
              <FaRegComment />
            </Link>
            <span>{post?.comments?.length}</span>
          </section>
        </CardFooter>
      </div>
     
       <img src={post?.banner} alt="Imagem" />
    </CardBody>
  </CardContainer>
  )
}

export default Card