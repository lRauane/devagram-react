import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CabecalhoComAcoes from "../../components/cabecalhoComAcoes";
import UploadImagem from "../../components/UploadImagem";
import comAutorizacao from "../../hoc/comAutorizacao";
import imgAvatarPadrao from "../../public/Imagens/avatar.svg";
import imgLimparNome from "../../public/Imagens/limpar.svg";
import usuarioServices from "../../services/UsuarioServices";
import { validarNome } from "../../utils/validadores";

const UsuarioServices = new usuarioServices();

function EditarPerfil({ usuarioLogado }) {
  const router = useRouter();
  const [avatar, setAvatar] = useState();
  const [inputUploadAvatar, setInputUploadAvatar] = useState();
  const [nome, setNome] = useState("");

  useEffect(() => {
    if (!usuarioLogado) {
      return;
    }

    setNome(usuarioLogado.nome);
    setAvatar({
      preview: usuarioLogado.avatar,
    });
  }, []);

  const atualizarPerfil = async () => {
    try {
      if (!validarNome(nome)) {
        alert("Nome precisa de pelo menos 2 caracteres");
      }

      const corpoRequisicao = new FormData();
      corpoRequisicao.append("nome", nome);

      if (avatar.arquivo) {
        corpoRequisicao.append("file", avatar.arquivo);
      }

      await UsuarioServices.atualizarPerfil(corpoRequisicao);

      localStorage.setItem("nome", nome);
      if(avatar.arquivo){
        localStorage.setItem("avatar", avatar.preview)
      }
      router.push("/perfil/eu")

    } catch (error) {
      alert("Erro ao editar perfil");
    }
  };

  const aoCancelarEdicao = () => {
    router.push("/perfil/eu");
  };

  const abrirSeletorDeArquivos = () => {
    inputUploadAvatar?.click();
  };

  return (
    <div className="paginaEditarPerfil largura">
      <div className="paginaEditarPerfil__Conteudo">
        <CabecalhoComAcoes
          titulo={"Editar perfil"}
          aoClicarAcaoEsquerda={aoCancelarEdicao}
          textoEsquerda={"Cancelar"}
          elementoDireita={"Concluir"}
          acaoElementoDireita={atualizarPerfil}
        />

        <hr className="linhaDivisoria" />

        <div className="paginaEditarPerfil__edicaoAvatar">
          <UploadImagem
            setImagem={setAvatar}
            imagemPreview={avatar?.preview || imgAvatarPadrao.src}
            imagemPreviewClassName="avatar"
            aoSetarAReferencia={setInputUploadAvatar}
          />
          <span onClick={abrirSeletorDeArquivos}>Alterar foto do perfil</span>
        </div>

        <hr className="linhaDivisoria" />

        <div className="paginaEditarPerfil__editarNome">
          <label>Nome</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <Image
            src={imgLimparNome}
            alt="Icone de limpar nome"
            width={16}
            height={16}
            onClick={() => setNome("")}
          />
        </div>

        <hr className="linhaDivisoria" />
      </div>
    </div>
  );
}

export default comAutorizacao(EditarPerfil);
