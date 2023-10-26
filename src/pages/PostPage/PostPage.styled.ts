import styled from "styled-components";

export const PostContainer = styled.main`
    width: 1024px;
    margin: 1rem auto;
   text-align: center;
   
   @media (max-width: 1024px) {
       width: 80%;
   }

   @media (max-width: 768px) {
       width: 100%;
   }

    h1{
        width: 80%;
        margin: auto;
        font-size: 36px;

        @media (max-width: 768px) {
            width: 100%;
            font-size: 30px;
        }
    }
`

export const PostAuthor = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 1rem 0 1rem 0;

    img{
    width: 50px;
    border-radius: 50%;
   }
`

export const PostImage = styled.figure`
    width: 70%;
    margin: auto;

    @media (max-width: 768px) {
        width: 95%;
    }

    img {
        object-fit: cover;
        width: 100%;
        border-radius: .4rem;
        mix-blend-mode: darken;
        object-position: center;
    }
`
