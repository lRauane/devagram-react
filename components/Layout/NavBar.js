import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HomeAtivo from "../../public/Imagens/homeAtivo.svg";
import HomeCinza from "../../public/Imagens/homeCinza.svg";
import publicacaoAtivo from "../../public/Imagens/publicacaoAtivo.svg";
import publicacaoCinza from "../../public/Imagens/publicacaoCinza.svg";
import usuarioAtivo from "../../public/Imagens/usuarioAtivo.svg";
import usuarioCinza from "../../public/Imagens/usuarioCinza.svg";

const mapaRotas = {
  home: {
      imagemAtivo: HomeAtivo,
      rotasAtivacao: ['/'],
      imagemPadrao: HomeCinza
  },
  publicacao: {
      imagemAtivo: publicacaoAtivo,
      rotasAtivacao: ['/publicacao'],
      imagemPadrao: publicacaoCinza
  },
  perfil: {
      imagemAtivo: usuarioAtivo,
      rotasAtivacao: ['/Perfil/eu', '/Perfil/editar'],
      imagemPadrao: usuarioCinza
  }
}

export default function NavBar({ className }) {
  const [rotaAtiva, setRotaAtiva] = useState('Home');
    const router = useRouter();

    useEffect(() => {
        definirRotaAtiva();
    }, [router.asPath]);
    
    const definirRotaAtiva = () => {
        const chavesDoMapaDeRotas = Object.keys(mapaRotas);
        const indiceAtivo = chavesDoMapaDeRotas.findIndex(chave => {
            return mapaRotas[chave].rotasAtivacao.includes(
                window.location.pathname
            );
        });

        if (indiceAtivo === -1) {
            setRotaAtiva('Home');
        } else {
            setRotaAtiva(chavesDoMapaDeRotas[indiceAtivo]);
        }
    }

    const obterImagem = (nomeRota) => {
      const rotaAtivada = mapaRotas[nomeRota];

      if (rotaAtiva === nomeRota) {
          return rotaAtivada.imagemAtivo;
      }

      return rotaAtivada.imagemPadrao;
  }

    const aoClicarNoIcone = (nomeRota) => {
      setRotaAtiva(nomeRota)
      router.push(mapaRotas[nomeRota].rotasAtivacao[0]);
    }


  return (
    <nav className={`${className} navBar`}>
      <ul>
        <li onClick={() => aoClicarNoIcone('home')}>
          <Image
            src={obterImagem("home")}
            alt="Logo home"
            width={20}
            height={20}
          />
        </li>
        <li onClick={() => aoClicarNoIcone('publicacao')}>
          <Image
            src={obterImagem("publicacao")}
            alt="Logo Publicação"
            width={20}
            height={20}
          />
        </li>
        <li onClick={() => aoClicarNoIcone('perfil')}>
          <Image
            src={obterImagem("perfil")}
            alt="Logo usuario"
            width={20}
            height={20}
          />
        </li>
      </ul>
    </nav>
  )
}
