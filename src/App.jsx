import styled from "styled-components";
import { Cabecalho, Slider, Produtos, Footer } from "./components";
import "./App.css";

const AppContainer = styled.div`
  background-color: var(--preto);
  background-color: var(--branco-default);
  padding: 0 5em;
  color: var(--branco);
`;

function App() {
  return (
    <AppContainer>
      <Cabecalho />
      <Slider />
      <Produtos />
      <Footer />
    </AppContainer>
  );
}

export default App;
