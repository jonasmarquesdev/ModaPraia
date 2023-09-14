import styled from "styled-components";
import Produto from "./Produto";

const ContainerEstilizado = styled.section`
  background-color: var(--branco-default);
  color: var(--preto);
  margin-top: 2em;
`;

const ContainerProdutos = styled.section`
  background-color: var(--branco);
  color: var(--branco);
  height: auto;
  padding: 3em 3em 10em 3em;
  margin-top: 1em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  place-content: center;
  place-items: center;
  gap: 2em;
  border-radius: 16px;
`;

function Produtos() {
  return (
    <ContainerEstilizado>
      <h1>Produtos</h1>
      <ContainerProdutos>
        <Produto />
        <Produto />
        <Produto />
        <Produto />
        <Produto />
        <Produto />
        <Produto />
      </ContainerProdutos>
    </ContainerEstilizado>
  );
}

export default Produtos;
