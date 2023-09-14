import styled, { css } from "styled-components";
import banner from "../../assets/banner.jpg";

const tamanhoDaTela = {
  pequeno: 600,
  medio: 900,
  grande: 1200,
};

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
  height: 500px;
  width: 100%;
  overflow: hidden;
  border-radius: 16px;
  margin-top: 1em;

  ${media.medio`
    display: none;
  `}
`;

const ImagemEstilizada = styled.img`
  max-width: 100%;
  height: auto;
`;

const Mascara = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

function Slider() {
  return (
    <ContainerEstilizado>
      <ImagemEstilizada src={banner} alt="" />
      <Mascara />
    </ContainerEstilizado>
  );
}

export default Slider;
