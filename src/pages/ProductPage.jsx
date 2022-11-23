import HeaderProduct from "../components/HeaderProduct";
import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();
  return (
    <section>
      <h1>Bem vindo a Loja {id}</h1>
      <HeaderProduct/>
    </section>
  );
}

export default ProductPage;