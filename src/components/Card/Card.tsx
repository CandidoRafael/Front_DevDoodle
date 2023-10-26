import { AiOutlineLike } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { CardBody, CardContainer, CardFooter, CardHeader  } from './Card.styled'
import { TextLimit } from '../TextLimit/TextLimit'
import { Link, useNavigate } from 'react-router-dom'


type CardProps = {
  title: string
  text?: string
  image: string
  likes: string
  comments: string
  avatar: string
  username: string
  size?: string
}

const Card = ({ title, image, likes, comments, size, username, text, avatar } : CardProps) => {

  return (
    <CardContainer>
    <CardBody>
      <div>
        <CardHeader size={size}>
          <Link to={`/post/${title}`}>
            <h2>{title}</h2>
          </Link>
          <Link to={`/post/${title}`}>
            <TextLimit text={text} limit={150} />
          </Link>
          
        <section>
           <img src={avatar} alt="imagem" />
           <p>{username}</p>
        </section>
        </CardHeader>


        <CardFooter>
          <section>
            <AiOutlineLike />
            <span>{likes?.length}</span>
          </section>

          <section>
            <FaRegComment />
            <span>{comments?.length}</span>
          </section>
        </CardFooter>
      </div>
     
       <img src={image} alt="Imagem" />
    </CardBody>
  </CardContainer>
  )
}

export default Card