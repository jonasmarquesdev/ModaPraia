import { motion } from "framer-motion";
import Item from "../Item";
import Produtos from "../Item/assets";
import styles from "./ListaPopulares.module.css";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { Box, Button } from "@mui/material";

const CarouselContainer = styled.section`
  background-color: var(--branco-default);
  color: var(--preto);
  margin-top: 2em;
`;

function ListaPopulares() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <CarouselContainer>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <h1>Mais vendidos</h1>
        <Button sx={{ color: 'var(--cinza-escuro)' }}>ver mais</Button>
      </Box>
      <motion.div ref={carousel} className={styles.carousel}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className={styles.innerCarousel}
        >
          {Produtos.map((Produto) => (
            <motion.div key={Produto.id}
              className={styles.item}
            >
              <Item
                imagem={Produto.imagem}
                nome={Produto.nome}
                valor={Produto.valor}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </CarouselContainer>
  );
}

export default ListaPopulares;
