import styled from "styled-components";

export const TitleTutorial = styled.h1`
    color: var(--color-blue-primary);
    padding: .4rem;
    font-weight: 600;
    margin-bottom: .8rem;
`

export const ListTutorial = styled.ol`
    padding: 1rem;

    li {
        margin-bottom: 1.8rem;
        list-style-type: square;

        div {
            display: flex;
            gap: 1rem;
            align-items: center;

            svg {
                
                font-size: 1.8rem;
            }
        }
    }
`

export const SectionTutorial = styled.section`
    margin-top: 1.3rem;
    margin-bottom: 5rem;
  
            img {
                border-radius: .3rem;
            }
        

    h2 {
        color: var(--color-blue-primary);
        font-weight: 500;
    }

    @media (max-width: 868px) {
        figure {
            width: 100%;

            img {
                width: 100%;
            }
        }
    }
`