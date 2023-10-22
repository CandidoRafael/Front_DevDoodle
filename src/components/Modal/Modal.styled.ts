import styled from "styled-components";

export const BackgroundModal = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: rgba(0,0,0, 0.424);
`

export const ModalContainer = styled.div`
    position: fixed;
    background-color: rgb(226, 225, 225);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: .3rem;
    color: #222;
    transition: .5s all;

    h1 {
        color: var(--color-blue-primary);
        padding-bottom: 1rem;
    }

    figure {
        img{
            width: 100px;
            border: 2px solid var(--color-blue-secondary);
            border-radius: 50%;
        }
    }

    div{
        display: flex;
        flex-direction: column;
    }

    
`

