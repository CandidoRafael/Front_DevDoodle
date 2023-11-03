import { AiOutlineLike, AiFillLike } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { CardBody, CardContainer, CardFooter, CardHeader } from './CardTopPost.styled'
import { Link } from 'react-router-dom'
import PostServices from '../../services/postsServices'
import { Post } from '../../types/Post'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../Context/UserContext'

const CardTopPost = ({ topPost } : { topPost: Post }) => {

  const { likePost } = PostServices()
  const { user } = useContext(UserContext)
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);


  const checkLiked = () => {
    const likedPosts = JSON.parse(localStorage.getItem(`likedPosts_${user?._id}`) ?? 'null') || [];
    return likedPosts.includes(topPost.id);
  };

  useEffect(() => {
    setLikeCount(topPost?.likes.length);
    setIsLiked(checkLiked());
  }, [user?._id]);

  const handleLike = async () => {
    try {
      await likePost(topPost.id);
      
      const likedPosts = JSON.parse(localStorage.getItem(`likedPosts_${user?._id}`) ?? 'null') || [];
     
      if (isLiked) {
       
        localStorage.setItem(`likedPosts_${user?._id}`, JSON.stringify(likedPosts.filter((id: string) => id !== topPost.id)));
        setLikeCount(likeCount - 1); 
      } else {
       
        localStorage.setItem(`likedPosts_${user?._id}`, JSON.stringify([...likedPosts, topPost.id]));
        setLikeCount(likeCount + 1); 
      }

      setIsLiked(!isLiked); 
    } catch (error) {
      console.log(error);
    }
  };

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
              <FaRegComment />
              <span>{topPost.comments?.length}</span>
            </section>
          </CardFooter>
        </div>
      </CardBody>
    </CardContainer>
  )
}

export default CardTopPost