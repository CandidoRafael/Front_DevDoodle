import { useContext } from "react"
import { PostContext } from "../Context/PostContext"

const usePagination = () => {

  const { page, setPage } = useContext(PostContext)

    const nextPage = () => {
        setPage(page + 4);
    };

    const prevPage = () => {
        if(page - 4 >= 0) {
            setPage(page - 4);
        }
    };

  return { page, setPage , nextPage, prevPage }

}


export default usePagination








