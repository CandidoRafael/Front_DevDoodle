import { AiOutlineLike } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { CardAuthor, CardBody, CardContainer, CardFooter, CardHeader  } from './Card.styled'
import { TextLimit } from '../TextLimit/TextLimit'

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
          <img src={image} alt="Imagem" />
        </div>
        <div>
          <CardHeader size={size}>
            <h2>{title}</h2>
            <TextLimit text={text} limit={100}/>
          </CardHeader>

            <CardAuthor>
              <img src={avatar} alt="Imagem autor" />
              <p>{username}</p>
            </CardAuthor>
            
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