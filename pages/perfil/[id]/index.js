import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Feed from "../../../components/Feed";
import HeaderPerfil from "../../../components/HeaderPerfil";
import comAutorizacao from "../../../hoc/comAutorizacao";

function Perfil({ usuarioLogado }) {
  const [usuario, setUsuario] = useState({});
  const router = useRouter();

  useEffect( () => {
    setUsuario({
      nome: "Rauane Lima"
    })
  }, [router.query.id]);

  return (
    <div className="paginaPerfil">
      <HeaderPerfil 
      usuarioLogado={usuarioLogado}
      usuario={usuario}
      />
      <Feed usuarioLogado={usuarioLogado} />
    </div>
  );
}

export default comAutorizacao(Perfil);
