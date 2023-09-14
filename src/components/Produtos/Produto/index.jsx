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
import image from "../../../assets/banner.jpg";

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

function Produto() {
  return (
    <ContainerProduto>
      <Card sx={{ maxWidth: 345, boxShadow: "none" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <Typography sx={{ color: "#CB6CE6" }} gutterBottom variant="h5" component="div">
                Blusa
              </Typography>
              <Badge sx={{ color: "green", fontSize: 17 }} ><Sifrao>R$</Sifrao> 16,00</Badge>
            </Box>
            {/* <Typography variant="body2" color="text.secondary">
              Roupas de banho
            </Typography> */}
          </CardContent>
        </CardActionArea>
      </Card>
    </ContainerProduto>
  );
}

export default Produto;
