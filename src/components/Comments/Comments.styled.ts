import styled from "styled-components";

export const CommentArticle  = styled.article`
    text-align: left;
    width: 80%;
    margin: 1rem auto;
    padding-bottom: .5rem;


  @media (max-width: 678px) {
    width: 95%;
  }
`

export const SectionComment = styled.section`
    background-color: #fff;
    margin-bottom: .5rem;
    padding: .4rem;
    border-radius: .3rem;
    box-shadow: rgba(50, 50, 105, 0.149) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
    
    section {
        display: flex;

        img {
          border-radius: 50%;
          object-fit: contain;
          width: 40px;
          
        }

        div {
          padding: .5rem;
          width: 94%;
          
           
          p {
            font-weight: 600;
          }

          span {
            font-weight: 00;
            font-size: 13px;
          }
        }
    }
`

export const IconDeleteComment = styled.i`
  font-size: 20px;
  color: darkred;
  height: 25px;
  cursor: pointer;
  transition: .3s all linear;

  &:hover {
    color: red;
  }
`