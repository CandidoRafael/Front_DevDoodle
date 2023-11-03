import styled from "styled-components";

export const SearchContainer = styled.section`
    padding-top: 1.2rem;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;

    img {
        width: 20%;
    }
    
    @media (max-width: 668px) {
        flex-direction: column;
        
        img {
            width: 100%;
        }
  }
`

export const SearchPosts = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
    width: 80%;
 
    @media (max-width: 560px) {
      width: 90%;
    }
`

export const TextResults = styled.div`
    padding: 1.2rem;
    background-color: #fff;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    border-radius: .3rem;
    box-shadow: rgba(50, 50, 105, 0.149) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
    
    span {
      padding-right: .2rem;
    }
`