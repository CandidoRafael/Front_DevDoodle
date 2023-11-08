import styled from "styled-components";

type SizeCard = {
  size: string | undefined
}

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  box-shadow: rgba(50, 50, 105, 0.149) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
  border-radius: 0.3rem;
  background-color: #fff;
`;

export const CardBody = styled.article`
  display: flex;
  width: 100%;
  height: 100%;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    width: 100%;
  }

  img {
    width: 40%;
    object-fit: cover;
    object-position: center;
    border-radius: 0 0.3rem 0.3rem 0;

    @media (max-width: 668px) {
      border-radius: .3rem .3rem 0 0;
    }
  }

  @media (max-width: 668px) {
        flex-direction: column-reverse;
        
        img {
            width: 100%;
        }
  }
`;

export const CardHeader = styled.article<SizeCard>`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: ${({ size }) => (size ? "1.5rem" : ".9rem")};

  a{
    text-decoration: none;
    color: #222;
    transition: .3s all ease-in-out;

    &:hover{
      color: var(--color-blue-primary);
    }
  }

  h2 {
    margin-bottom: 1rem;
    font-size: ${({ size }) => (size ? "3rem" : "1.1rem")};
    width: 100%;
    font-weight: 800;
  }

  section {
    display: flex;
    margin-top: .7rem;
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

    a{
      color: #222;
      display: flex;
    }

    i {
      display: flex;
    }

    svg {
      cursor: pointer;
    }
  }
`;