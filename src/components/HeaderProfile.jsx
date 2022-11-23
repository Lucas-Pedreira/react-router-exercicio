import {goToHomePage, goToProductPage} from "../Router/coordinator"
import { useNavigate } from "react-router-dom";
  
  function HeaderProfile() {
    const navigate = useNavigate();
  
    return (
      <header>
        <button onClick={() => goToHomePage(navigate)}>
          Voltar para página inicial
        </button>
        <button onClick={() => goToProductPage(navigate, 1912)}>
          Ir para loja
        </button>
      </header>
    );
  }
  
  export default HeaderProfile;