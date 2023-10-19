import styled from "styled-components";

type CardHeaderProps = {
  size?: string
}

export const CardContainer = styled.section`
    
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
    width: 33%;
    object-fit: cover;
    object-position: center;
    mix-blend-mode: darken;
    border-radius: 0.3rem;

    cursor: pointer;
    transition: .2s all ease-in-out;

    &:hover {
      transform: scale(1.05)
    }
  }

  @media (max-width: 668px) {
        flex-direction: column;
        
        img {
            width: 100%;
        }
  }

`;

export const CardHeader = styled.article<CardHeaderProps>`
  width: 100%;
  
  h2 {
    line-height: 1.2;
    margin-bottom: 1rem;
    color: #222;
    cursor: pointer;
    font-size: ${({ size }: any) => (size ? "2.7rem" : "1.7rem")};    
  }

  section {

    display: flex;
    align-items: center;
    gap: .7rem;

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

`

export const ImageAuthor = styled.img`
  width: 50rem;
`