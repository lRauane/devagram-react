import InputPublico from "../InputPublico";
import { useState } from "react";

import Envelope from "../../public/Imagens/envelope.svg";
import Chave from "../../public/Imagens/chave.svg";
import Logo from "../../public/Imagens/logo.svg";

import Image from "next/image";
import Button from "../Button";
import Link from "next/link";
import {validarEmail, validarSenha} from '../../utils/validadores'
import usuarioServices from "../../services/UsuarioServices";

const UsuarioServices = new usuarioServices();

export default function Login() {

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [submetendo, setSubmetendo] = useState(false);

  const validarForm = () =>{
    return (
      validarEmail(email)
      && validarSenha(senha)
    )
  }

  const submeter = async (e) =>{
    e.preventDefault();

    if(!validarForm()){
      return;
    }
    setSubmetendo(true);

    try {
      await UsuarioServices.login({
        login: email,
        senha
    });
      alert("sucesso")

      // redirecionar usuario para home
    } catch (e) {
      alert("Erro ao realizar o login." + e?.response?.data?.erro)
    }
    setSubmetendo(false)
  }

  return (
    <section className={"login__Section paginaPublica"}>
      <div className="logo__Container">
        <Image src={Logo} alt="Logotipo Devagram" layout="fill" className="logo"/>
      </div>
      <div className="conteudo__paginaPublica">
        <form onSubmit={submeter}>
          <InputPublico
            image={Envelope}
            texto="Digite seu E-mail..."
            tipo="email"
            aoAlterarValor={e => setEmail(e.target.value)}
            valor={email}
            mensagemValidacao="O endereço de E-mail informado é inválido"
            exibirMensagemValidacao={email && !validarEmail(email)}
          />

          <InputPublico
            image={Chave}
            texto="Digite sua Senha..."
            tipo="password"
            aoAlterarValor={e => setSenha(e.target.value)}
            valor={senha}
            mensagemValidacao="Precisa ter pelo menos 3 caracteres!"
            exibirMensagemValidacao={senha && !validarSenha(senha)}
          />

          <Button texto="Login" tipo="submit" disabilitado={!validarForm() || submetendo} />
        </form>

        <div className="rodape_paginaPublica">
          <p>Não possui uma conta?</p>
          <Link href="/Cadastro">Faça seu cadastro agora!</Link>
        </div>
      </div>
    </section>
  );
}
