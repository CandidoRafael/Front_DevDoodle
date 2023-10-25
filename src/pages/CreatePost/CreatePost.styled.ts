import styled from "styled-components";

export const ContainerPost = styled.div`
   width: 80%;
   margin: auto;
   padding: 1rem;
   
   h3{
      text-align: center;
   }

   h2{
    font-size: 1.2rem;
    font-size: 1.6rem;
    margin-bottom: 1rem;
   }
`

export const MainPost = styled.main`
   padding: 1rem;
   border-radius: .3rem;
   margin-top: 2rem;
   box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.18);
   -webkit-box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.18);
   -moz-box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.18);
   background-color: #fff;

   div{
      margin-bottom: 1rem;
   }

  label {
    display: block;
    font-size: 18px;
    font-weight: 400;
    color: #222;
    padding-bottom: .3rem;
  }
  input {
   background-color: #eee;
   border: 1px solid transparent;
   padding: .5rem .4rem;
   font-size: 1rem;
   width: 100%;
   border-radius: .3rem;
   outline: none;
   font-weight: 500;
   transition: all 0.4s ease-in-out;
   
   &:focus {
         border: 1px solid var(--color-blue-secondary);
   }
}
`

export const ShowContentPost = styled.span`
   pre {
      background-color: #222;
      border-radius: .3rem;
      color: #f8f8f8;
   }
   
   code {
      font-family: monospace;

   }
`