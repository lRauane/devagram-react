import Button from "../components/Button";
import Avatar from "../components/Avatar";
import {UploadImagem} from "../components/UploadImagem";
import { useState, useRef } from "react";

export default function Home() {
  const [imagem, setImagem] = useState(null);
  const referenciaInput = useRef(null);

  return (
    <>
      <h1>Ola mundo!</h1>
      <button onClick={() => referenciaInput?.current?.click()}>abrir seletor de arquivos</button>

      <UploadImagem
        setImagem={setImagem}
        imagemPreview={imagem?.preview}
        aoSetarAReferencia={(ref) => referenciaInput.current = ref}
      />

      <div style={{width: 200}}>
        <Avatar />
        <Button
          texto={"Editar perfil"}
          manipularClick={() => console.log("clicou")}
        />
      </div>
    </>
  )
}
