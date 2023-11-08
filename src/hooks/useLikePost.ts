import { useContext, useEffect, useState } from 'react'
import PostServices from '../services/postsServices';
import { UserContext } from '../Context/UserContext';
import { Post } from '../types/Post';

const useLikePost = (post: Post) => {
  
    const { likePost } = PostServices()
    const { user } = useContext(UserContext)
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
  
    const checkLiked = () => {
      const likedPosts = JSON.parse(localStorage.getItem(`likedPost_${user?._id}`) ?? 'null') || [];
      return likedPosts.includes(post.id);
    };
  
    useEffect(() => {
      setLikeCount(post?.likes.length);
      setIsLiked(checkLiked());
    }, [user?._id, post.id]);
  
    const handleLike = async () => {
      try {
        await likePost(post.id);
        
        const likedPosts = JSON.parse(localStorage.getItem(`likedPost_${user?._id}`) ?? 'null') || [];
       
        if (isLiked) {
         
          localStorage.setItem(`likedPost_${user?._id}`, JSON.stringify(likedPosts.filter((id: string) => id !== post.id)));
          setLikeCount(likeCount - 1); 
        } else {
         
          localStorage.setItem(`likedPost_${user?._id}`, JSON.stringify([...likedPosts, post.id]));
          setLikeCount(likeCount + 1); 
        }
  
        setIsLiked(!isLiked); 
      } catch (error) {
        console.log(error);
      }
    };


    return {
        isLiked,
        likeCount,
        handleLike
    }
}

export default useLikePost