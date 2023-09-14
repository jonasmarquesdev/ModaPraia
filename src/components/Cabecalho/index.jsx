import logo from "../../assets/logo.png";

import styles from "./Cabecalho.module.css";
import { Box } from "@mui/material";
import ModalB from "../Modal";

function Cabecalho() {
  return (
    <section className={styles.container}>
      <img className={styles.banner} src={logo} alt="" />
      <Box sx={{ display: "flex", gap: "2em", alignItems: "center" }}>
        <ModalB />
        
      </Box>
    </section>
  );
}

export default Cabecalho;
