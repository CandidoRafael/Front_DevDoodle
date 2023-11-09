import styled from "styled-components";

export const PostContainer = styled.main`
    width: 1024px;
    margin: 1rem auto;
   
   
   @media (max-width: 1024px) {
       width: 80%;
   }

   @media (max-width: 768px) {
       width: 100%;
   }

`

export const TitlePost = styled.h1`
        width: 80%;
        text-align: center;
        margin: auto;
        font-size: 36px;

        @media (max-width: 768px) {
            width: 100%;
            font-size: 30px;
        }
`

export const PostAuthor = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 1rem 0 1rem 0;

    img{
    width: 55px;
    box-shadow: rgba(50, 50, 105, 0.149) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
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
