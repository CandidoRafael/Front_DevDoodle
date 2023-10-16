import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding: 1rem;
    background-color: #eeee;
    z-index: 1;
    margin-bottom: 1rem;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
`

export const ImageLogo = styled.img`
  width: 10em;
  height: 5em;
  border-radius: .5rem;
  object-fit: cover;

  @media (max-width: 768px){
      display: none;
    }
`

export const InputSpace = styled.div`
  width: 22rem;
  position: relative;
  display: flex;
  align-items: center;


  @media (max-width: 560px) {
      width: 15rem;
    }

    button {
      border: none; 
      font-size: 1.3rem;
      background-color: var(--color-baby-blue);
      padding: 0.63rem;
      cursor: pointer;
      border-radius: 0 .5rem .5rem 0;
      color: #f5f5f5;
      height: 100%;

    }

      input {
        border: 1px solid red;
        outline: none;
        font-size: 1.1rem;
        padding: 0.7rem;
        background-color: #f5f5f5;
        border: 1px solid transparent;
        width: 100%;
        height: 100%;
        border-radius: .5rem 0 0 .5rem;
        transition: .5s all ease-in-out;

        &:focus {
          border: 1px solid var(--color-baby-blue);
        }

        @media (max-width: 660px) {
          font-size: 1rem;
      }
}
`

export const Button = styled.button`
  border: 1px solid transparent;
  padding: 1rem 2rem;
  cursor: pointer;
  color: #f8f8f8;
  letter-spacing: 1px;
  border-radius: .5rem;
  font-size: 1rem;
  background-color: var(--color-baby-blue);
  transition: .4s all ease-in-out;
  
  &:hover {
    border: 1px solid var(--color-baby-blue);
    background-color: transparent;
    color: var(--color-baby-blue)
  }

  @media (max-width: 520px){
      display: none;
    }
`

export const Hamburger = styled.span`
  cursor: pointer;
  transition: .3s all linear;
  svg{
    font-size: 1.6rem;  
    }

    &:hover {
      transform: scale(1.2)
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
