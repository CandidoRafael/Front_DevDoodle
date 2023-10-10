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
    width: 90%;
 
    @media (max-width: 560px) {
      width: 90%;
    }
`

export const TextResults = styled.div`
    padding: 1.7rem;
    background-color: #fff;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    border-radius: .3rem;

    span {
        font-size: 1rem;
    }
`