import comAutorizacao from "../../hoc/comAutorizacao";
import CabecalhoComAcoes from "../../components/cabecalhoComAcoes";
import UploadImagem from "../../components/UploadImagem";
import imgPublicacao from "../../public/Imagens/imagempublicacao.svg";
import { useState } from "react";
import Button from "../../components/Button";

function Publicacao() {
  const [imagem, setImagem] = useState();
  const [inputImage, setInputImage] = useState();

  return (
    <div className="paginaPublicacao largura">
      <CabecalhoComAcoes
        textoEsquerda=""
        elementoDireita=""
        titulo={"Nova publicação"}
      />
      <hr className="linhaDivisoria" />
  
      <div className="paginaPublicacao__conteudo">
        <div className="primeiraEtapa">
          <UploadImagem
            setImagem={setImagem}
            aoSetarAReferencia={setInputImage}
            imagemPreviewClassName={!imagem ? "previewImagemPubli" : "previewImagemSelecionada"}
            imagemPreview={imagem?.preview || imgPublicacao.src}
          />

          <span className="desktop textDragInDrop">Arraste sua foto aqui!</span>

          <Button
            texto={"Selecionar uma imagem"}
            manipularClick={() => inputImage?.click()}
          />
        </div>
      </div>
    </div>
  );
}

export default comAutorizacao(Publicacao);
