import {goToHomePage, goToProfilePage} from "../Router/coordinator"
import { useNavigate } from "react-router-dom";
  
  function HeaderProduct() {
    const navigate = useNavigate();
  
    return (
      <header>
        <button onClick={() => goToHomePage(navigate)}>
          Ir para página inicial
        </button>
        <button onClick={() => goToProfilePage(navigate, 'Lucas')}>
          Voltar para o perfil
        </button>
      </header>
    );
  }
  
  export default HeaderProduct;