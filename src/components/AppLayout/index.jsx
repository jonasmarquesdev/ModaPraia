import styled from "styled-components";

const AppLayout = styled.div`
  background-color: var(--preto);
  background-color: var(--branco-default);
  padding: 0 5em;
  color: var(--branco);

  @media (max-width: 991px) {
    padding: 0 2em;
  }
`;

export default AppLayout;