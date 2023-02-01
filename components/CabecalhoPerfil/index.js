import imgSetaEsquerda from "../../public/imagens/setaEsquerda.svg";
import CabecalhoComAcoes from "../cabecalhoComAcoes";
import Button from "../Button";
import Avatar from "../Avatar";
import { useEffect, useState } from "react";
import usuarioServices from "../../services/UsuarioServices";
import { useRouter } from "next/router";

const UsuarioServices = new usuarioServices();

export default function CabecalhoPerfil({ usuario, estaNoPerfilPessoal }) {
  const [estaSeguindo, setEstaSeguindo] = useState(false);
  const [qtdSeguidores, setqtdSeguidores] = useState(0);
  const router = useRouter()

  useEffect(() => {
    if (!usuario) {
      return;
    }

    setEstaSeguindo(usuario.segueEsseUsuario);
    setqtdSeguidores(usuario.seguidores);
  }, [usuario]);

  const obterTextoBotaoSeguir = () => {
    if(estaNoPerfilPessoal){
      return 'Editar perfil'
    }

    if (estaSeguindo) {
      return "Deixar de seguir";
    }
    return "Seguir";
  };

  const obterCorDobotaoSeguir = () => {
    if (estaSeguindo) {
      return "invertido";
    }
    return "primaria";
  };

  const manipularCliqueBotaoSeguir = async () => {
    try {
      await UsuarioServices.alternarSeguir(usuario._id);
      setqtdSeguidores(estaSeguindo ? qtdSeguidores - 1 : qtdSeguidores + 1);
      setEstaSeguindo(!estaSeguindo);
    } catch (error) {
      alert("Erro ao seguir/deixar de seguir!");
    }
  };

  const aoClicarSetaEsquerda = () =>{
    router.back();
  }
  return (
    <div className="cabecalhoPerfil largura">
      <CabecalhoComAcoes
       iconeEquerda={imgSetaEsquerda} 
       aoClicarAcaoEsquerda={aoClicarSetaEsquerda}
       titulo={usuario.nome} />

      <hr className="linhaDivisoria" />

      <div className="statusPerfil">
        <Avatar src={usuario.avatar} />
        <div className="informacoesPerfil">
          <div className="statusContainer">
            <div className="status">
              <strong>{usuario.publicacoes}</strong>
              <span>Publicações</span>
            </div>

            <div className="status">
              <strong>{qtdSeguidores}</strong>
              <span>Seguidores</span>
            </div>

            <div className="status">
              <strong>{usuario.seguindo}</strong>
              <span>Seguindo</span>
            </div>
          </div>

          <Button
            texto={obterTextoBotaoSeguir()}
            cor={obterCorDobotaoSeguir()}
            manipularClick={manipularCliqueBotaoSeguir}
          />
        </div>
      </div>
    </div>
  );
}
