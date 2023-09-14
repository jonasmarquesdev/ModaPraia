import styled from "styled-components";
import AppRouter from "./routes";
import "./App.css";
import { useEffect, useState } from "react";


function App() {
  const [CurrentWidth, setCurrentWidth] = useState(window.innerWidth);

  const AppContainer = styled.div`
    background-color: var(--preto);
    background-color: var(--branco-default);
    padding: ${CurrentWidth > 991 ? "0 5em" : "0 2em"};
    color: var(--branco);
  `;
  
  useEffect(() => {
    const handleResize = () => {
      setCurrentWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AppContainer>
      <AppRouter />
    </AppContainer>
  );
}

export default App;
