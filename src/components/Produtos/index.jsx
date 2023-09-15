import styled from "styled-components";
import Item from "./Item";

import Produtos from "./Item/assets";

const ContainerEstilizado = styled.section`
  background-color: var(--branco-default);
  color: var(--preto);
  margin-top: 2em;
`;

const ContainerProdutos = styled.section`
  background-color: var(--branco);
  color: var(--preto);
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

function ListaProdutos() {
  return (
    <ContainerEstilizado>
      <h1>Todos Produtos</h1>
      <ContainerProdutos>
        {Produtos.map((Produto) => (
          <Item 
            key={Produto.id}
            imagem={Produto.imagem} 
            nome={Produto.nome}
            valor={Produto.valor}
          />
        ))}
      </ContainerProdutos>
    </ContainerEstilizado>
  );
}

export default ListaProdutos;
