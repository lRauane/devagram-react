import Image from "next/image";
import Link from "next/link";
import Avatar from "../Avatar";
import { useState } from "react";

import CurtirImg from "../../public/Imagens/curtir.svg";
import Curtido from "../../public/Imagens/curtido.svg";
import ComentarioAtivo from "../../public/Imagens/comentarioAtivo.svg";
import ComentarioCinza from "../../public/Imagens/comentarioCinza.svg";
import { FazerComentario } from "./FazerComentario";
import FeedService from "../../services/FeedService";

const TamanhoLimiteDescricao = 90;
const feedService = new FeedService();

export default function Postagem({
  id,
  usuario,
  fotoPost,
  descricao,
  comentarios,
  usuarioLogado,
  curtidas,
}) {
  const [curtidasPostagem, setCurtidasPostagem] = useState(curtidas);
  const [comentariosPostagem, setComentariosPostagem] = useState(comentarios);
  const [TamanhoAtualDescricao, SetTamanhoAtualDescricao] = useState(
    TamanhoLimiteDescricao
  );
  const [exibirSessaoComentario, setexibirSessaoComentario] = useState(false);

  const exibirDescricaoCompleta = () => {
    SetTamanhoAtualDescricao(Number.MAX_SAFE_INTEGER);
  };

  const DescricaoMaiorQueLimite = () => {
    return descricao.length > TamanhoAtualDescricao;
  };

  const obterDescricao = () => {
    let mensagem = descricao.substring(0, TamanhoAtualDescricao);

    return mensagem;
  };

  const ObterImagemComentario = () => {
    return exibirSessaoComentario ? ComentarioAtivo : ComentarioCinza;
  };

  const comentar = async (comentario) => {
    try {
      await feedService.adicionarComentario(id, comentario);
      setexibirSessaoComentario(false);
      setComentariosPostagem([
        ...comentariosPostagem,
        {
          nome: usuarioLogado.nome,
          mensagem: comentario,
        },
      ]);
    } catch (e) {
      alert("Erro ao fazer comentario" + (e?.response?.data?.erro || ""));
    }
  };

  const usuarioLogadoCurtiuPostagem = () => {
    return curtidasPostagem.includes(usuarioLogado.id);
}

  const AlterarCurtida = async () => {
    try {
        await feedService.alterarCurtida(id);
        if (usuarioLogadoCurtiuPostagem()) {
            // tiro o usuario logado da lista de curtidas
            setCurtidasPostagem(
                curtidasPostagem.filter(idUsuarioQueCurtiu => idUsuarioQueCurtiu !== usuarioLogado.id)
            );
        } else {
            // adiciona o usuario logado na lista de curtidas
            setCurtidasPostagem([
                ...curtidasPostagem,
                usuarioLogado.id
            ]);
        }
    } catch (e) {
        alert(`Erro ao alterar a curtida! ` + (e?.response?.data?.erro || ''));
    }
}

  const ObterImagemCurtida = () => {
    return usuarioLogadoCurtiuPostagem() ? Curtido : CurtirImg;
  };

  return (
    <div className="postagem">
      <Link href={`perfil/${usuario.id}`}>
        <section className="cabecalho__post">
          <Avatar src={usuario.avatar} />
          <strong>{usuario.nome}</strong>
        </section>
      </Link>

      <div className="foto__Postagem">
        <img src={fotoPost} alt="foto post" />
      </div>

      <div className="rodape__postagem">
        <div className="acoesRodape__postagem">
          <Image
            src={ObterImagemCurtida()}
            alt="icone curtir"
            width={20}
            onClick={AlterarCurtida}
          />
          <Image
            src={ObterImagemComentario()}
            alt="icone comentar"
            width={20}
            onClick={() => setexibirSessaoComentario(!exibirSessaoComentario)}
          />

          <span className="quantidadeCurtidas__postagem">
            Curtido por <strong>{curtidasPostagem.length} pessoas</strong>
          </span>
        </div>
        <div className="descricao__postagem">
          <Link href={`/perfil/${usuario.id}`}>
            <strong className="nomeUsuario__descricao">{usuario.nome}</strong>
          </Link>

          <p className="descricaoPost__descricao">
            {obterDescricao()}
            {DescricaoMaiorQueLimite() && (
              <span
                onClick={exibirDescricaoCompleta}
                className="exibirDescricao__descricao">
                ...mais
              </span>
            )}
          </p>
        </div>

        <div className="comentarios__postagem">
          {comentariosPostagem.map((comentario, i) => (
            <div className="comentario" key={i}>
              <strong className="nomeUsuario__descricao">
                {comentario.nome}
              </strong>
              <p className="descricaoPost__descricao">{comentario.mensagem}</p>
            </div>
          ))}
        </div>
      </div>

      {exibirSessaoComentario && (
        <FazerComentario comentar={comentar} usuarioLogado={usuarioLogado} />
      )}
    </div>
  );
}
