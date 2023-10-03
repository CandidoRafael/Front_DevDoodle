import { AiOutlineLike } from 'react-icons/ai'
import { AiTwotoneLike } from 'react-icons/ai'
import { FaRegCommentDots } from 'react-icons/fa'
import { FaRegComment } from 'react-icons/fa'
import { CardBody, CardContainer, CardFooter } from './Card.styled'

type CardProps = {
  title: string
  text?: string
  image: string
  likes: number
  comments: number
}

const Card = ({ title, image, likes, comments } : CardProps) => {

  return (
    <CardContainer>
      <CardBody>
        <figure>
          <img src={image}  alt="alt da image" />
        </figure>
        <div>
          <h2>{title}</h2>
        </div>

      </CardBody>

      <CardFooter>
        <div>
          <AiOutlineLike />
          <span>{likes}</span>
        </div>
        
        <div>
          <FaRegComment />
          <span>{comments}</span>
        </div>

       
      </CardFooter>
    </CardContainer>
  )
}

export default Card