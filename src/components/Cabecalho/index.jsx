import logo from "../../assets/logo.png";
import {BsWhatsapp} from "react-icons/bs";
import styles from "./Cabecalho.module.css";
import { Box, Button } from "@mui/material";

function Cabecalho() {
  return (
    <section className={styles.container}>
      <img className={styles.banner} src={logo} alt="" />
      <Box sx={{ display: "flex", gap: "2em", alignItems: "center" }}>
        <Button className={styles.contato} fontSize={20} sx={{ color: "var(--cinza)" }}>Contato</Button>
        <BsWhatsapp color="green" fontSize={36} />
      </Box>
    </section>
  );
}

export default Cabecalho;
