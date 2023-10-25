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
        color: var(--color-baby-blue);
        padding-bottom: 1rem;
    }

    figure {
        img{
            width: 100px;
            border: 3px solid var(--color-blue-secondary);
            border-radius: 50%;
        }
    }
`

export const IconClose = styled.i`
    position: absolute;
    right: 0;
    top: 0;
    font-size: 2rem;
    padding: .3rem;
    cursor: pointer;
    color: var(--color-baby-blue);
    transition: all 0.4s ease-in-out;

    &:hover{
        color: var(--color-blue-primary);
    }

`

export const InputContainer = styled.div`
        display: flex;
        flex-direction: column;
        margin-bottom: 5px;
        
        label {
            padding-top: .8rem;
            font-size: 18px;
            padding: .4rem;
            font-weight: 600;
            
        }

        input {
            background-color: #eee;
            border: 1px solid transparent;
            padding: .5rem .4rem;
            font-size: 1rem;
            border-radius: 8px;
            outline: none;
            font-weight: 300;
            transition: all 0.4s ease-in-out;
            
            &:focus {
                border: 1px solid var(--color-blue-secondary);
            }
        }
`

export const ButtonConfirm = styled.button`
    background-color: var(--color-baby-blue);
    color: #fff;
    padding: 9px 25px;
    margin-top: .4rem;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    letter-spacing: 0.5px;
  
    cursor: pointer;
    transition: all 0.6s ease-in-out;

    &:hover {
        background-color: var(--color-blue-primary);
    }
`

