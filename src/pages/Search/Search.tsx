import { useParams } from "react-router-dom"

const Search = () => {

  const { title } = useParams()

  return (
    <div>{title}</div>
  )
}

export default Search