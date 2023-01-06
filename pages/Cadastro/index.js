import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Button from "../../components/Button";
import Logo from "../../public/Imagens/logo.svg";
import usuarioAtivo from "../../public/Imagens/usuarioAtivo.svg";
import Envelope from "../../public/Imagens/envelope.svg";
import Chave from "../../public/Imagens/chave.svg";
import InputPublico from "../../components/InputPublico";
import UploadImagem from "../../components/UploadImagem";
import Avatar from "../../public/Imagens/avatar.svg";


export default function Cadastro() {

  const [imagem, setImagem] = useState(null)
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [confirmaçãoSenha, setconfirmaçãoSenha] = useState("")

  return (
    <section className={"cadastro__Section paginaPublica"}>
      <div className="logo__Container desktop">
        <Image
          src={Logo}
          alt="Logotipo Devagram"
          layout="fill"
          className="logo"
        />
      </div>
      <div className="conteudo__paginaPublica">
        <form>
          <UploadImagem 
          imagemPreviewClassName="avatar avatarPreview"
          imagemPreview={imagem?.preview || Avatar.src}
          setImagem={setImagem}

          />
        <InputPublico
            image={usuarioAtivo}
            texto="Nome completo"
            tipo="text"
            aoAlterarValor={e => setNome(e.target.value)}
            valor={nome}
          />
        <InputPublico
            image={Envelope}
            texto="E-mail"
            tipo="email"
            aoAlterarValor={e => setEmail(e.target.value)}
            valor={email}
          />
        <InputPublico
            image={Chave}
            texto="Senha"
            tipo="password"
            aoAlterarValor={e => setSenha(e.target.value)}
            valor={senha}
          />
        <InputPublico
            image={Chave}
            texto="Confirmar senha"
            tipo="password"
            aoAlterarValor={e => setconfirmaçãoSenha(e.target.value)}
            valor={confirmaçãoSenha}
          />


          <Button texto="Cadastrar" tipo="submit" disabilitado={false} />
        </form>

        <div className="rodape_paginaPublica">
          <p>Já possui uma conta?</p>
          <Link href="/">Faça seu Login agora!</Link>
        </div>
      </div>
    </section>
  );
}
