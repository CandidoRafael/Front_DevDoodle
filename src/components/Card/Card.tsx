import { AiOutlineLike } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { CardBody, CardContainer, CardFooter, CardHeader } from './Card.styled'

type CardProps = {
  title: string
  text?: string
  image: string
  likes: string
  comments: string,
  username: string
  size?: string
}

const Card = ({ title, image, likes, comments, size, username } : CardProps) => {

  return (
    <CardContainer>
      <CardBody>
        <img src={image} alt="Imagem" />
        
        <div>
          <CardHeader size={size}>
            <h2>{title}</h2>
            <i>Criado por, {username}</i>
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
      </CardBody>
    </CardContainer>
  )
}

export default Card