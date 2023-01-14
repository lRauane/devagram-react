import { useRouter } from "next/router";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import usuarioServices from "../services/UsuarioServices";

const UsuarioServices = new usuarioServices();

export default function comAutorizacao(Componente) {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const router = useRouter();
    if (typeof window !== "undefined") {
      if (!UsuarioServices.estaAutenticado()) {
        router.replace("/");
        return null;
      }

      const usuarioLogado = UsuarioServices.obterInfoUser();

      return (
        <>
        <Header usuarioLogado={usuarioLogado}/>
        <Componente usuarioLogado={usuarioLogado} {...props} />;
        <Footer usuarioLogado={usuarioLogado}/>
        </>
      );
    }

    return null;
  };
}
