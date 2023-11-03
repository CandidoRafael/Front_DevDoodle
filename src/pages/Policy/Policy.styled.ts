import styled from "styled-components";

export const ContainerPolicy = styled.main`
    width: 80%;
    margin: 1rem auto;

    @media (max-width: 668px) {
        width: 90%;
    }

    h1{
        color: var(--color-blue-primary);
        margin-bottom: .5rem;
    }

    p {
        font-weight: 500;
        margin-bottom: 1.2rem;
    }
`

export const SectionPolicy = styled.section`
   h2 {
     font-size: 1.4rem;
     color: var(--color-blue-primary);
     margin-bottom: .5rem;
   }

   ul{
    list-style: none;
    margin-left: .6rem;

    li {
        margin-bottom: 1rem;
        padding-left: 5px;
        font-weight: 500;

        &::marker {
            content: '•';
            color: var(--color-baby-blue);
            
        }
      }
   }

`