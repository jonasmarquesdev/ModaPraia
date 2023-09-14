import { Typography, Link, Container } from "@mui/material";

const Footer = () => {
  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "white",
        padding: "1em"
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body2" color="textSecondary" align="center">
          © {new Date().getFullYear()} ModaPraia. Todos os direitos
          reservados.
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          Desenvolvido
          por{" "}
          <Link color="inherit" href="https://jonasmarques.vercel.app" target="_blank" rel="noopener">
            Jonas Marques
          </Link>
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;