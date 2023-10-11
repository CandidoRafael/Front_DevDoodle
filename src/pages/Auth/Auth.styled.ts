import styled from "styled-components";

export const AuthContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
`

export const ContainerToogle = styled.main`
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.28);
    position: relative;
    overflow: hidden;
    width: 868px;
    max-width: 100%;
    min-height: 480px;

    p{
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.3px;
      margin: 20px 0;
    }

    span{
    font-size: 12px;
    }

    button{
    background-color: var(--color-baby-blue);
    color: #fff;
    font-size: 12px;
    padding: 10px 45px;
    border: 1px solid transparent;
    border-radius: 8px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-top: 10px;
    cursor: pointer;
    transition: all 0.6s ease-in-out;

    &:hover {
        background-color: var(--color-blue-primary);
    }

    }

    button.hidden{
    background-color: transparent;
    border-color: #fff;
    }

    form{
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    height: 100%;
    }

    input{
    background-color: #eee;
    border: none;
    margin: 8px 0;
    padding: .6rem .9rem;
    font-size: 1rem;
    border-radius: 8px;
    width: 100%;
    outline: none;
}
`
export const FormContainer = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;

    

    h1{
        color: var(--color-baby-blue);
        margin-bottom: 1rem;
    }
`

export const SpanError = styled.span`
    color: red;
`

export const Icon = styled.i`
    position: absolute;
    right: 13%;
    font-size: 19px;
    top: 56%;
    cursor: pointer;
    color: var(--color-baby-blue);
`

export const IconCreate= styled.i`
    position: absolute;
    right: 13%;
    font-size: 19px;
    top: 61.7%;
    cursor: pointer;
    color: var(--color-baby-blue);
`