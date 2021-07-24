import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --red: #e52e4d;
    --blue: #5429cc;
    
    --blue-light: #6933ff;
    
    --text-title: #363f5f;
    --text-body: #969cb3;
    
    --shape: #FFFFFF;
    --background:  #f0f2f5;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    //outline: não removi o outline por questões de acessibilidade
  }

  //REM -> 1rem = 16px => fontsize
  //importante pois usa a fontsize como parametro para dimensão de outras fontes etc...
  html {
    @media(max-width: 1080px){
      font-size: 93.75%; // porcento de 16 = 15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; // porcento de 16 = 14px
    }
  }

  body {
    background: var(---background);
    -webkit-font-smoothing: antialiased; //engine chrome/(deixa fonte menos serrilhadas)
  }


  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
