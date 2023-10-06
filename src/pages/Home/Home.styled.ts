import styled from "styled-components";

export const HomePosts = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    width: 80%;
    margin: 0 auto;

    @media (max-width: 1000px) {
      grid-template-columns: 1fr;
    }
    
    @media (max-width: 560px) {
      width: 90%;
    }
`

export const HomeTopPost = styled.main`
    width: 80%;
    margin: 1rem auto;
  
    @media (max-width: 560px) {
      width: 90%;
    }
`