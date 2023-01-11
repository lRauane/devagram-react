import LogoHorizontal from "../../public/Imagens/LogoHorizontal.svg";
import imagemLupa from "../../public/Imagens/lupa.svg";
import Image from "next/image";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="home__headerPrincipal">
      <div className="home__headerConteudoPrincipal">
        <div className="logo__headerPrincipal">
          <Image src={LogoHorizontal} alt="Logo Devagram" layout="fill" />
        </div>

        <div className="barraPesquisa">
          <div className="container__ImagemLupa">
            <Image src={imagemLupa} alt="Lupa" layout="fill" />
          </div>

          <input
            type="text"
            placeholder="Pesquisar..."
            value={""}
            onChange={() => console.log("pesquisando")}
          />
        </div>

        <NavBar className="desktop" />
      </div>
    </header>
  );
}
