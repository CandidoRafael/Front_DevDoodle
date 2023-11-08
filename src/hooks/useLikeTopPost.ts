import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/UserContext";
import PostServices from "../services/postsServices";
import { Post } from "../types/Post";

const useLikeTopPost = (topPost: Post) => {

  const { likePost } = PostServices()
  const { user } = useContext(UserContext)
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const checkLiked = () => {
    const likedPosts = JSON.parse(localStorage.getItem(`likedTopPost_${user?._id}`) ?? 'null') || [];
    return likedPosts.includes(topPost.id);
  };

  useEffect(() => {
    setLikeCount(topPost?.likes.length);
    setIsLiked(checkLiked());
  }, [user?._id]);

  const handleLike = async () => {
    try {
      await likePost(topPost.id);
      
      const likedPosts = JSON.parse(localStorage.getItem(`likedTopPost_${user?._id}`) ?? 'null') || [];
     
      if (isLiked) {
       
        localStorage.setItem(`likedTopPost_${user?._id}`, JSON.stringify(likedPosts.filter((id: string) => id !== topPost.id)));
        setLikeCount(likeCount - 1); 
      } else {
       
        localStorage.setItem(`likedTopPost_${user?._id}`, JSON.stringify([...likedPosts, topPost.id]));
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

export default useLikeTopPost