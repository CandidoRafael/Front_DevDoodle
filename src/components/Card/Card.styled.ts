import styled from "styled-components";

type CardHeaderProps = {
  size?: string
}

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 100%;  
`;

export const CardBody = styled.article`


  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 1rem;
  }
  
  img {
    border-radius: 1rem;
    width: 100%;
    height: 300px;
    object-fit: contain;
    mix-blend-mode: darken;
    cursor: pointer;
    transition: .2s all ease-in-out;

    &:hover {
      transform: scale(1.05)
    }

    @media (max-width: 668px) {
      height: 100%;
    }
  }
`;

export const CardHeader = styled.article<CardHeaderProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  cursor: pointer;
  
  font-size: ${({ size }) => (size ? "1.5rem" : ".9rem")};

  h2 {
    margin-bottom: .4rem;
    font-size: ${({ size }) => (size ? "3rem" : "1.1rem")};
    font-weight: 800;
  }
`;

export const CardAuthor = styled.section`
  display: flex;
  align-items: center;
  gap: .7rem;
  margin-bottom: .6rem;

  img {
    width: 25px;
    height: auto;
    object-fit: cover;
    object-position: center;
  }
`

export const CardFooter = styled.article`
  display: flex;
  align-items: center;
  gap: 1rem;

  section {
    display: flex;
    align-items: center;
    gap: 0.2rem;

    
    svg {
      cursor: pointer;
    }
  }
`;
