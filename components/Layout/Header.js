import LogoHorizontal from "../../public/Imagens/LogoHorizontal.svg";
import imagemLupa from "../../public/Imagens/lupa.svg";
import Image from "next/image";
import NavBar from "./NavBar";
import { useState } from "react";
import ResultadoPesquisa from "./ResultadoPesquisa";
import usuarioServices from "../../services/UsuarioServices";
import { useRouter } from "next/router";

const UsuarioService = new usuarioServices();

export default function Header() {
  const [resultadoPesquisa, setResultadoPesquisa] = useState([]);
  const [termoPesquisado, setTermoPesquisado] = useState("");
  const router = useRouter();

  const aoPesquisar = async (e) => {
    setTermoPesquisado(e.target.value);
    setResultadoPesquisa([]);

    if (termoPesquisado.length < 3) {
      return;
    }

    try {
      const { data } = await UsuarioService.pesquisa(termoPesquisado);
      setResultadoPesquisa(data);
    } catch (e) {
      alert("erro ao pesquisar usuario" + e?.response?.data?.erro);
    }
  };

  const aoClicarResultadoPesquisa = (id) => {
    setResultadoPesquisa([]);
    setTermoPesquisado('');
    router.push(`/Perfil/${id}`);
  };

  const redirecionaHome = () =>{
    router.push('/');
  }

  return (
    <header className="home__headerPrincipal">
      <div className="home__headerConteudoPrincipal">
        <div className="logo__headerPrincipal">
          <Image onClick={redirecionaHome} src={LogoHorizontal} alt="Logo Devagram" layout="fill" />
        </div>

        <div className="barraPesquisa">
          <div className="container__ImagemLupa">
            <Image src={imagemLupa} alt="Lupa" layout="fill" />
          </div>

          <input
            type="text"
            placeholder="Pesquisar..."
            value={termoPesquisado}
            onChange={aoPesquisar}
          />
        </div>

        <NavBar className="desktop" />
      </div>

      {resultadoPesquisa.length > 0 && (
        <div className="resultadoPesquisa__container">
          {resultadoPesquisa.map((r) => (
            <ResultadoPesquisa
              avatar={r.avatar}
              nome={r.nome}
              key={r._id}
              id={r._id}
              onClick={aoClicarResultadoPesquisa}
            />
          ))}
        </div>
      )}
    </header>
  );
}
