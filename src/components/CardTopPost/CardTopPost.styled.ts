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
  display: flex;
  height: 100%;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem 1.2rem;
  }

  img {
    width: 40%;
    object-fit: cover;
    object-position: center;
    mix-blend-mode: darken;
    border-radius: 0.3rem;    
  }

  @media (max-width: 668px) {
        flex-direction: column;
        
        img {
            width: 100%;
        }
  }
`;

export const CardHeader = styled.article<CardHeaderProps>`
  
  h2 {
    line-height: 1.2;
    margin-bottom: 1rem;
    color: #222;
    cursor: pointer;

    font-size: ${({ size }) => (size ? "2.6rem" : "1.7rem")};    
    transition: .3s all ease-in-out;

    &:hover {
      color: var(--color-blue-primary);
    }
  }

  a {
    text-decoration: none;
  }

  section {
    display: flex;
    align-items: center;
    gap: .7rem;
    margin-bottom: .4rem;

    img {
      width: 25px;
      height: 25px;
      object-fit: cover;
    }
  }

`;

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

export const CardAuthor = styled.section`
  display: flex;
  align-items: center;
  gap: .7rem;

`;

export const ImageAuthor = styled.img`
  width: 50rem;
`;