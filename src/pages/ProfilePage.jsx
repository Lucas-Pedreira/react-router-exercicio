import { useParams } from "react-router-dom";
import HeaderProfile from "../components/HeaderProfile";

function ProfilePage() {
  const { name } = useParams()
  return (
    <section>
      <h1>Página de perfil do {name}</h1>
      <HeaderProfile/>
    </section>
  );
}

export default ProfilePage;
