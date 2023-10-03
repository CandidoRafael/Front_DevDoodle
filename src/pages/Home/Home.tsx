import { useState } from 'react'
import { Posts } from "../../Data"

import Navbar from "../../components/Navbar/Navbar"
import Sidebar from "../../components/Sidebar/Sidebar"
import Card from "../../components/Card/Card"
import { HomePosts } from './Home.styled'

const Home = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <>
     <Navbar setToggleMenu={setToggleMenu} />
      <Sidebar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />

      <HomePosts>
        {Posts.map((post, index) => (
          <Card
            key={index}
            title={post.title}
            text={post.text}
            image={post.image}
            likes={post.likes}
            comments={post.comments}        
          />
        ))}
      </HomePosts>
    </>
  )
}

export default Home