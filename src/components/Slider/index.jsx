/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import TextoAnimado from "../TextoAnimado";
import img1 from "./assets/gif1.gif";
import img2 from "./assets/gif2.gif";
import img3 from "./assets/gif3.gif";

const tamanhoDaTela = {
  pequeno: 600,
  medio: 900,
  grande: 1200,
};

const frases = [
  {
    id: 1,
    img: img1,
    frase: "Seu destino para as últimas tendências em moda.",
  },
  {
    id: 2,
    img: img2,
    frase: "Roupas que falam por você - encontre sua voz na moda.",
  },
  {
    id: 3,
    img: img3,
    frase: "Qualidade, moda e inovação - tudo em um só lugar.",
  }
];

const media = Object.keys(tamanhoDaTela).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${tamanhoDaTela[label]}px) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

const ContainerEstilizado = styled.section`
  background-color: var(--branco);
  position: relative;
  color: var(--preto);
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => (props.height ? `${props.height}` : "0px")};
  width: 100%;
  overflow: hidden;
  border-radius: 16px;
  margin-top: 1em;
  padding: 2em;

  ${media.medio`
    display: none;
  `}
`;

const IlustracaoContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 2em;
  color: var(--rosa);
`;

const Ilustracao = styled.img`
  left: 10%;
  max-width: 35%;
`;

function Slider({ height }) {
  return (
    <ContainerEstilizado height={height}>
      <IlustracaoContainer>
        <Ilustracao src={frases[0].img} alt="" />
        <div>
          <TextoAnimado text={frases[0].frase} fontSize="2em" />
          <TextoAnimado text="Compras via Whatsapp" fontSize="1.5em" justify="center" color="var(--cinza-escuro)" />
        </div>
      </IlustracaoContainer>
    </ContainerEstilizado>
  );
}

export default Slider;
