import styled from "styled-components";

export const FooterContainer = styled.footer`
   border-top: 1px solid var(--color-blue-primary);
   padding: 2rem;
   height: 100px;
   display: flex;
   flex-direction: column;
   align-items: center;

   a {
      color: var(--color-blue-primary);
   }

   @media (max-width: 768px) {
      padding: .6rem;
   }
`