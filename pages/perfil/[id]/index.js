import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Feed from "../../../components/Feed";
import HeaderPerfil from "../../../components/HeaderPerfil";
import comAutorizacao from "../../../hoc/comAutorizacao";
import usuarioServices from "../../../services/UsuarioServices";

const UsuarioServices = new usuarioServices();

function Perfil({ usuarioLogado }) {
  const [usuario, setUsuario] = useState({});
  const router = useRouter();

  const obterPerfil = async (idUsuario) => {
    try {
      const { data } = await UsuarioServices.obterPerfil(idUsuario);
    } catch (error) {
      alert("erro ao obter perfil do usuario!");
    }
  };

  useEffect(() => {
    async function ObterDados() {
      if (!router.query.id) {
        return;
      }
     const dadosPerfil = obterPerfil(router.query.id);setUsuario(dadosPerfil);
    }
    ObterDados();
  }, [router.query.id])


  return (
    <div className="paginaPerfil">
      <HeaderPerfil usuarioLogado={usuarioLogado} usuario={usuario} />
      <Feed 
      usuarioLogado={usuarioLogado}
       />
    </div>
  );
}

export default comAutorizacao(Perfil);
