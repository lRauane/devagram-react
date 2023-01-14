import Image from "next/image";
import Link from "next/link";
import Avatar from "../Avatar";

import CurtirImg from "../../public/Imagens/curtir.svg";
import Curtido from "../../public/Imagens/curtido.svg";
import ComentarioAtivo from "../../public/Imagens/comentarioAtivo.svg";
import ComentarioCinza from "../../public/Imagens/comentarioCinza.svg";

export default function Postagem({ usuario, fotoPost, descricao, comentario }) {
  return (
    <div className="postagem">
      <Link href={`/Perfil/${usuario.id}`}>
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
            src={CurtirImg}
            alt="icone curtir"
            width={20}
            onClick={() => console.log("curtir")}
          />
          <Image
            src={ComentarioCinza}
            alt="icone comentar"
            width={20}
            onClick={() => console.log("curtir")}
          />

          <span className="quantidadeCurtidas__postagem">
            Curtido por <strong>1200 pessoas</strong>
          </span>
        </div>
        <div className="descricao__postagem">
          <Link href={`/Perfil/${usuario.id}`}>
            <strong className="nomeUsuario__descricao">{usuario.nome}</strong>
          </Link>

          <p className="descricaoPost__descricao">{descricao}</p>
        </div>

        <div className="comentarios__postagem">
          {comentario.map((comentario, i) => (
            <div className="comentario" key={i}>
              <strong className="nomeUsuario__descricao">
                {comentario.nome}
              </strong>
              <p className="descricaoPost__descricao">{comentario.mensagem}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
