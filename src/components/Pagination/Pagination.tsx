import { PostContext } from "../../Context/PostContext"
import usePagination from "../../hooks/usePagination"
import { ButtonPagination, PaginationContainer } from "./Pagination.styled"
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import { useContext } from 'react'

const Pagination = () => {

  const { posts } = useContext(PostContext)
  const { page, nextPage, prevPage } = usePagination()
  console.log(posts)

  return (
    <PaginationContainer>
      <ButtonPagination 
      onClick={() => prevPage()}
      disabled={page <= 0}
      >
        <AiOutlineArrowLeft />
        Anterior
      </ButtonPagination>
      <ButtonPagination
       onClick={() => nextPage()}
       disabled={posts?.length === 0}
      >
        Próximo
        <AiOutlineArrowRight />
      </ButtonPagination>
    </PaginationContainer>
  )
}

export default Pagination