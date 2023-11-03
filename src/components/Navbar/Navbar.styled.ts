import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding: 1rem;
    background-color: #eee;
    z-index: 1;
    margin-bottom: 1rem;
    box-shadow: rgba(50, 50, 105, 0.149) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
`

export const ImageLogo = styled.img`
  width: 10em;
  height: 5em;
  border-radius: .5rem;
  object-fit: cover;
  box-shadow: rgba(50, 50, 105, 0.149) 0px 2px 5px 0px,
  rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;

  @media (max-width: 768px){
      display: none;
    }
`

export const InputSpace = styled.div`
  width: 22rem;
  position: relative;
  display: flex;
  align-items: center;
  box-shadow: rgba(50, 50, 105, 0.149) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;


  @media (max-width: 560px) {
      width: 15rem;
    }

    button {
      border: none; 
      font-size: 1.3rem;
      background-color: var(--color-blue-primary);
      padding: 0.7rem;
      cursor: pointer;
      border-radius: 0 .3rem .3rem 0;
      color: #f5f5f5;
      height: 100%;

    }

      input {
        border: 1px solid red;
        outline: none;
        font-size: 1rem;
        font-weight: 500;
        padding: 0.8rem;
        background-color: #f5f5f5;
        border: 1px solid transparent;
        width: 100%;
        height: 100%;
        border-radius: .3rem 0 0 .3rem;
        transition: .5s all ease-in-out;

        &:focus {
          border: 1px solid var(--color-blue-primary);
        }

        @media (max-width: 660px) {
          font-size: 1rem;
      }
}
`

export const Button = styled.button`
  border: 1px solid transparent;
  padding: .8rem 1.7rem;
  cursor: pointer;
  color: #f8f8f8;
  letter-spacing: 1px;
  border-radius: .3rem;
  font-size: 1rem;
  background-color: var(--color-blue-primary);
  transition: .4s all ease-in-out;
  
  &:hover {
    border: 1px solid var(--color-blue-primary);
    background-color: transparent;
    color: var(--color-blue-primary)
  }

  @media (max-width: 520px){
      display: none;
    }
`

export const Hamburger = styled.span`
  cursor: pointer;
  transition: .2s all linear;
  
  
  svg{
    font-size: 1.6rem;  
    
    }

    &:hover {
      transform: scale(1.1);
    }

` 

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: .4rem;
  gap: 2rem;
`
export const ErrorSpan = styled.span`
    background-color: #ffaeae;
    color: #9e0000;
    padding: 1rem;
    display: flex;
    justify-content: center;
    font-size: 1.1rem;
    font-weight: bold;
`
export const LinkProfile = styled.div`

svg {
      transition: .2s all linear;
      font-size: 1.6rem;

      &:hover {
        color: var(--color-baby-blue);
        transform: scale(1.1);
      }
    }

    a {
      color: var(--color-blue-primary);
    }
`