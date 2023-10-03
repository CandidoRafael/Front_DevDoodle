import styled from "styled-components";

export const CardContainer = styled.section`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   gap: 1rem;
   border-radius: 15px;
   width: 100%;
   cursor: pointer;
   box-shadow: rgba(50, 50, 105, 0.149) 0px 2px 5px 0px,
   rgba(0, 0, 0, .5) 0px 1px 1px 0px;

   background-color: #f8f8f8;
   padding: 2rem;
   
    @media (max-width: 480px) {
        width: 60%;
        font-size: .8rem;
        text-align: center;
    }
   
`

export const CardBody = styled.article`
    display: flex;
    align-items: center;
    justify-content: space-between;
  
    div {
        width: 55%;
        
        border: 1px solid red;

        h2 {
            color: var(--color-blue-primary);
            transition: .3s all linear;
            &:hover {
            color: var(--color-baby-blue)
            }
  
        }
    }

    figure {
        width: 40%;

        img {
            width: 100%;
            border-radius: 15px;
            object-fit: cover;
            object-position: center;
        }
    }

    @media (max-width: 520px) {
        flex-direction: column;
        gap: .3rem;

        div {
            width: 100%;
            font-size: .9rem;
        }

        figure {
            width: 90%;
        }
    }

`

export const CardFooter = styled.footer`
    display: flex;
    align-items: center;
    gap: 1rem;

    div {
        display: flex;
        align-items: center;
        gap: 5px;
    }
`

