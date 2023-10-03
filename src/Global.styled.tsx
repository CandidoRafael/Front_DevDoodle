import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

#root {
  --color-blue-primary: rgb(43, 89, 189);
  --color-blue-secondary: rgb(154, 188, 255);
  --color-baby-blue: rgb(18, 168, 238);
}

body {
  background-color: #f3f3f3;
  height: 100vh;

}
`
