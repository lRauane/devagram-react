import CabecalhoComAcoes from "../CabecalhoComacoes";
import Button from "../Button";
import imgSetaEsquerda from "../../public/Imagens/setaEsquerda.svg";
import Avatar from "../Avatar";

export default function HeaderPerfil({ usuario }) {
  return (
    <div className="HeaderPerfil largura">
      <CabecalhoComAcoes
        iconeEsquerda={imgSetaEsquerda}
        titulo={usuario.nome}
      />

      <hr className="linhaDivisoria"/>

      <div className="headerPerfil__statusPerfil">
        <Avatar src={usuario.avatar}/>
        <div className="statusPerfil__statusInformacoes">
          <div class="statusContainer">
            <div className="status">
              <strong>{usuario.publicacoes}</strong>
              <span>Publicações</span>
            </div>
            <div className="status">
              <strong>{usuario.seguidores}</strong>
              <span>Seguidores</span>
            </div>
            <div className="status">
              <strong>{usuario.seguindo}</strong>
              <span>Seguindo</span>
            </div>
          </div>
            <Button
             texto={"seguir"}
             cor="primaria"
            />
        </div>
      </div>
    </div>
  );
}
