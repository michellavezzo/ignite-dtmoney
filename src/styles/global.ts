import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --red: #e52e4d;
    --blue: #5429cc;
    --green: #33CC95;
    
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
    background: var(--background);
    -webkit-font-smoothing: antialiased; //engine chrome/(deixa fonte menos serrilhadas)
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
  h1, h2 ,h3, h4, h5, h5, h6, strong {
    font-weight: 600;  
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay{
    background: rgba(0,0,0,0.5);

    position: fixed; //ocupar tela toda /sempre no topo da tela
    top: 0;
    bottom: 0;
    right:0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content:center;
  .react-modal-content{
    width: 100%auto;
    max-width: 576px;

    background: var(--background);
    padding: 3rem;
    position:relative;
    border-radius:0.25rem;
  }
`;
