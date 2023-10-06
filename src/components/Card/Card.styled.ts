import styled from "styled-components";


type CardHeaderProps = {
  size?: string
}

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 100%;

  box-shadow: rgba(50, 50, 105, 0.149) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
  border-radius: 0.3rem;
  background-color: #fff;
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
  width: 100%;
  color: var(--color-blue-primary);
  
  h2 {
    line-height: 1.3;
    margin-bottom: 1rem;
    cursor: pointer;
    font-size: ${({ size }: any) => (size ? "3rem" : "1.2rem")};    
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
  }
`;

