import imgSetaEsquerda from "../../public/imagens/setaEsquerda.svg";
import imgLogout from "../../public/imagens/logout.svg";
import CabecalhoComAcoes from "../cabecalhoComAcoes";
import Button from "../Button";
import Avatar from "../Avatar";
import { useEffect, useState } from "react";
import usuarioServices from "../../services/UsuarioServices";
import { useRouter } from "next/router";
import Image from "next/image";

const UsuarioServices = new usuarioServices();

export default function CabecalhoPerfil({ usuario, estaNoPerfilPessoal }) {
  const [estaSeguindo, setEstaSeguindo] = useState(false);
  const [qtdSeguidores, setqtdSeguidores] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (!usuario) {
      return;
    }

    setEstaSeguindo(usuario.segueEsseUsuario);
    setqtdSeguidores(usuario.seguidores);
  }, [usuario]);

  const obterTextoBotaoSeguir = () => {
    if (estaNoPerfilPessoal) {
      return "Editar perfil";
    }

    if (estaSeguindo) {
      return "Deixar de seguir";
    }
    return "Seguir";
  };

  const obterCorDobotaoSeguir = () => {
    if (estaSeguindo || estaNoPerfilPessoal) {
      return "invertido";
    }
    return "primaria";
  };

  const manipularCliqueBotaoPrincipal = async () => {
    if (estaNoPerfilPessoal) {
      return router.push("/perfil/editar");
    }
    try {
      await UsuarioServices.alternarSeguir(usuario._id);
      setqtdSeguidores(estaSeguindo ? qtdSeguidores - 1 : qtdSeguidores + 1);
      setEsta(!estaSeguindo);
    } catch (error) {
      alert(`Erro ao seguir/deixar de seguir!`);
    }
  };

  const aoClicarSetaEsquerda = () => {
    router.back();
  };

  const Logout = () => {
    UsuarioServices.logout();
    router.replace("/");
  };

  const obterElementoDireita = () => {
    if (estaNoPerfilPessoal) {
      return (
        <Image
          src={imgLogout}
          alt="icone Logout"
          onClick={Logout}
          width={25}
          height={25}
        />
      );
    }

    return null;
  };

  return (
    <div className="cabecalhoPerfil largura">
      <CabecalhoComAcoes
        iconeEquerda={estaNoPerfilPessoal ? null : imgSetaEsquerda}
        aoClicarAcaoEsquerda={aoClicarSetaEsquerda}
        titulo={usuario.nome}
        elementoDireita={obterElementoDireita()}
      />
      
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
            manipularClick={manipularCliqueBotaoPrincipal}
          />
        </div>
      </div>
    </div>
  );
}
