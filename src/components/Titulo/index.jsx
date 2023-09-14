/* eslint-disable react/prop-types */
import styled from "styled-components";

const Titulo = styled.h1`
  font-size: ${(props) => props.tamanho || "16px"};
`;

export default Titulo;
