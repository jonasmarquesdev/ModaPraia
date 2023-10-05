import { Cabecalho, Slider, ListaPopulares, ListaProdutos, Footer } from "../components";

function Home() {
  return(
    <>
      <Cabecalho />
      <Slider height="500px" />
      <ListaPopulares />
      <ListaProdutos />
      <Footer />
    </>
  );
}

export default Home;