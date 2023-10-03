import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
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

  svg {
    position: absolute;
    top: 1;
    font-size: 2.4rem;
    right: .3rem;
    
    border: none;
    color: var(--color-baby-blue);
    padding: 0.5rem;
  }

  input {
    outline: none;
    font-size: 1.2rem;
    padding: 0.6rem;
    background-color: #f5f5f5;
    border: 1px solid transparent;
    width: 100%;
    border-radius: .5rem;
    transition: .5s all ease-in-out;

    @media (max-width: 660px) {
      font-size: 1rem;
    }

    &:focus {
      border: 1px solid var(--color-baby-blue);
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
  transition: .5s all ease-in-out;
  
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

  svg{
    font-size: 1.6rem;  
    }
` 

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: .4rem;
  gap: 2rem;
`