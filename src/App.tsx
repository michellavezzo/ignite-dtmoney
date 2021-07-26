import styled from "styled-components";
import { Header } from "./Components/Header";
import { GlobalStyle } from "./styles/global";

const Title = styled.h1`
  font-size: 64px;
  color: #8257e6;
`;

export function App() {
  return (
    <>
      <Header />
      <GlobalStyle />
    </>
  );
}

export default App;
