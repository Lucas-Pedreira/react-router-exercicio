import {goToProfilePage} from "../Router/coordinator"
import { useNavigate } from "react-router-dom";
  
  function HeaderHome() {
    const navigate = useNavigate();
  
    return (
      <header>
        <button onClick={() => goToProfilePage(navigate, 'Lucas')}>
          Ir para página de perfil
        </button>
      </header>
    );
  }
  
  export default HeaderHome;