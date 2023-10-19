import { AiOutlineLike } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { CardAuthor, CardBody, CardContainer, CardFooter, CardHeader, ImageAuthor } from './CardTopPost.styled'


type CardProps = {
  title: string
  text?: string
  image: string
  likes: string
  comments: string
  username: string
  avatar: string
  size?: string
}

const CardTopPost = ({ title, image, likes, comments, size, username, avatar } : CardProps) => {

  return (
    <CardContainer>
      <CardBody>
        <img src={image} alt="Imagem" />
        <div>
          <CardHeader size={size}>
            <h2>{title}</h2>

            <section>
              <img src={avatar} alt="Imagem Autor" />
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
      </CardBody>
    </CardContainer>
  )
}

export default CardTopPost