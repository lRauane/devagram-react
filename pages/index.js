import { useEffect, useState } from "react";
import Login from "../components/Login";
import usuarioServices from "../services/UsuarioServices";
import Home from "../components/Home";

const usuarioservices = new usuarioServices();

export default function Index() {
  const [estaAutenticado, setEstaAutenticado] = useState(false);

  useEffect(() => {
    setEstaAutenticado(usuarioservices.estaAutenticado());
  }, []);
  if (estaAutenticado) {
    return <Home />;
  }

  return <Login aposAutenticacao = {() => setEstaAutenticado(true)} />;
}
