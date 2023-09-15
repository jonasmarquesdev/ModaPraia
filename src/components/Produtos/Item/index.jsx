/* eslint-disable react/prop-types */
import styled from "styled-components";
import {
  Badge,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const ContainerProduto = styled.div`
  background-color: var(--cinza);
  color: var(--preto);
  height: 200px;
  width: 200px;
  margin-top: 2em;
`;

const Sifrao = styled.span`
  font-size: 11px;
  margin-right: 2px;
`;

function Item({ imagem, nome, valor }) {
  return (
    <ContainerProduto>
      <Card sx={{ maxWidth: 345, boxShadow: "none" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={imagem}
            alt="green iguana"
            sx={{ objectFit: "contain" }}
          />
          <CardContent>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography
                sx={{ color: "#CB6CE6" }}
                gutterBottom
                variant="h5"
                component="div"
              >
                {nome}
              </Typography>
              <Badge sx={{ color: "green", fontSize: 17 }}>
                <Sifrao>R$</Sifrao> {valor}
              </Badge>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </ContainerProduto>
  );
}

export default Item;
