import { useRouter } from "next/router";
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

      return <Componente {...props} />;
    }

    return null;
  };
}
