import styled from "styled-components";

export const FooterContainer = styled.footer`
   border-top: 1px solid var(--color-blue-secondary);
   padding: 2rem;
   height: 200px;
   display: flex;
   flex-direction: column;
   align-items: center;

   @media (max-width: 768px) {
      padding: .6rem;
   }
`