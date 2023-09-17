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
  color: var(--preto);
  height: 200px;
  width: 200px;
  margin-top: 2em;
  pointer-events: none;
  border-radius: 8px;
`;

const Sifrao = styled.span`
  font-size: 11px;
  margin-right: 2px;
`;

function Item({ imagem, nome, valor }) {
  return (
    <ContainerProduto>
      <Card sx={{ maxWidth: 345, boxShadow: "none", borderRadius: "0" }}>
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
              <Badge sx={{ color: "green", fontSize: 17 }}>
                <Sifrao>R$</Sifrao> {valor}
              </Badge>
              <Typography
                sx={{ 
                  color: "var(--preto)", 
                  fontSize: "16px"
                }}
                gutterBottom
                variant="h5"
                component="div"
              >
                {nome}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </ContainerProduto>
  );
}

export default Item;
