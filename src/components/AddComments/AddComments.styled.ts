import styled from "styled-components";

export const AddComment = styled.div`
    margin-bottom: 1.5rem;
    padding: .4rem;


    width: 80%;
    margin: 1rem auto;


  @media (max-width: 678px) {
    width: 95%;
  }
`

export const ContainerButton = styled.div`
    display: flex;
    gap: .7rem;
    justify-content: flex-end;
    padding-top: .7rem;
`

export const ButtonComment = styled.button`
    border: 1px solid transparent;
    cursor: pointer;
    color: #eee;
    font-size: 14px;
    font-weight: 600;
    border-radius: .3rem;
    background-color: var(--color-blue-primary);
    padding: .5rem 1rem;
    transition: .3s all linear;


    &:hover {
      color: var(--color-blue-primary);
      background-color: transparent;
      border: 1px solid var(--color-blue-primary);
    }

`

export const ButtonCancel = styled.button`
    border: 1px solid transparent;
    cursor: pointer;
    color: #eee;
    font-weight: 600;
    border-radius: .3rem;
    padding: .5rem 1rem;
    background-color: darkred;
    transition: .3s all linear;

    &:hover {
      color: darkred;
      background-color: transparent;
      border: 1px solid darkred;
    }
`

export const ContainerTextarea = styled.div`
     
    display: flex;
    align-items: flex-start;
    gap: .7rem;
    
    img {
      border-radius: 50%;
      width: 40px;
      object-fit: cover;
      box-shadow: rgba(50, 50, 105, 0.149) 0px 2px 5px 0px,
      rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
    }

     textarea {

        width: 100%;
        border: 1px solid transparent;
        height: 100px;
        font-size: .9rem;
        outline: none;
        padding: .3rem;
        box-shadow: rgba(50, 50, 105, 0.149) 0px 2px 5px 0px,
        rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
        resize: none;
        border-radius: .3rem;
        transition: .1s all linear;

        &:focus {
            border: 1px solid var(--color-blue-primary);
        }
    }
`