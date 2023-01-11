import Image from "next/image";
import HomeAtivo from "../../public/Imagens/homeAtivo.svg";
import HomeCinza from "../../public/Imagens/homeCinza.svg";
import publicacaoAtivo from "../../public/Imagens/publicacaoAtivo.svg";
import publicacaoCinza from "../../public/Imagens/publicacaoCinza.svg";
import usuarioAtivo from "../../public/Imagens/usuarioAtivo.svg";
import usuarioCinza from "../../public/Imagens/usuarioCinza.svg";

export default function NavBar({className}) {
  return (
    <nav className={`${className} navBar`}>
      <ul>
        <li>
          <Image 
          src={HomeAtivo}
          alt="Logo home"
          width={20}
          height={20}
          />
        </li>
        <li>
          <Image 
          src={publicacaoCinza}
          alt="Logo Publicação"
          width={20}
          height={20}
          />
        </li>
        <li>
          <Image 
          src={usuarioCinza}
          alt="Logo usuario"
          width={20}
          height={20}
          />
        </li>
        
      </ul>
    </nav>
  );
}
