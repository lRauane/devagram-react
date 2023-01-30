import { useEffect, useState } from "react";
import Feed from "../../components/Feed";
import { useRouter } from "next/router";
import comAutorizacao from "../../hoc/comAutorizacao";
import CabecalhoPerfil from "../../components/CabecalhoPerfil";
import usuarioServices from "../../services/UsuarioServices";

const UsuarioService = new usuarioServices()

function Perfil({ usuarioLogado }) {
  const [usuario, setUsuario] = useState({});
  const router = useRouter();

  const obterPerfil = async (idUsuario) =>{
    try {
     const {data} = await UsuarioService.obterPerfil(idUsuario)
     return data;
    } catch (error) {
      alert("erro ao obter o perfil do usuario")
    }
  }

  useEffect(() => {
    async function fetchData() {
      if(!router.query.id){
        return;
      }
      const dadosPerfil = await obterPerfil(router.query.id)
      setUsuario(dadosPerfil);
    }
    fetchData()
  }, [router.query.id]);

  return (
    <div className="paginaPerfil">
      <CabecalhoPerfil usuarioLogado={usuarioLogado} usuario={usuario} />

      <Feed 
      usuarioLogado={usuarioLogado}
      idUsuario={usuario?._id} 
      />
    </div>
  );
}

export default comAutorizacao(Perfil);
