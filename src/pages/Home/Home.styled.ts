import styled from "styled-components";

export const HomePosts = styled.section`
   display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.4rem;
    padding: 1em;
    width: 1024px;
    margin: 1rem auto;

    @media (max-width: 1024px) {
      width: 90%;
    }
    
    @media (max-width: 860px) {
      grid-template-columns: 1fr;
    }
`

export const HomeTopPost = styled.main`
    width: 1024px;
    margin: 1rem auto 3rem auto;
    
    @media (max-width: 1024px) {
      width: 90%;
    }
`

export const TitleHome = styled.h1`
  text-align: center;
  font-weight: 800;
  font-size: 2.8rem;
  color: var(--color-blue-primary);
  letter-spacing: 1px;
  margin-bottom: .3rem;
`