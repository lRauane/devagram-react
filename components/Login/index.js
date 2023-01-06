import InputPublico from "../InputPublico";
import { useState } from "react";
import Envelope from "../../public/Imagens/envelope.svg";
import Chave from "../../public/Imagens/chave.svg";
import Logo from "../../public/Imagens/logo.svg";
import Image from "next/image";
import Button from "../Button";
import Link from "next/link";


export default function Login() {

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")


  return (
    <section className={"login__Section paginaPublica"}>
      <div className="logo__Container">
        <Image src={Logo} alt={"Logotipo Devagram"} layout="fill" />
      </div>
      <div className="conteudo__paginaPublica">
        <form>
          <InputPublico
            image={Envelope}
            texto="Digite seu E-mail..."
            tipo="email"
            aoAlterarValor={e => setEmail(e.target.value)}
            valor={email}
          />

          <InputPublico
            image={Chave}
            texto="Digite sua Senha..."
            tipo="password"
            aoAlterarValor={e => setSenha(e.target.value)}
            valor={senha}
          />

          <Button texto="Login" tipo="submit" disabilitado={false} />
        </form>

        <div className="rodape_paginaPublica">
          <p>Não possui uma conta?</p>
          <Link href="/Cadastro">Faça seu cadastro agora!</Link>
        </div>
      </div>
    </section>
  );
}
