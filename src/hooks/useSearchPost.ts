import { useState } from 'react'

const useSearchPosts = () => {

  const [title, setTitle] = useState('')

    return { title, setTitle }
}

export default useSearchPosts