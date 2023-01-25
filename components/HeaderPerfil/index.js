import CabecalhoComAcoes from "../CabecalhoComacoes";
import Button from "../Button";
import imgSetaEsquerda from "../../public/Imagens/setaEsquerda.svg";
import Avatar from "../Avatar";

export default function HeaderPerfil({ usuario }) {
  return (
    <div className="HeaderPerfil">
      <CabecalhoComAcoes
        iconeEsquerda={imgSetaEsquerda}
        titulo={usuario.nome}
      />

      <div className="headerPerfil__statusPerfil">
        <Avatar src={usuario.avatar}/>
        <div className="statusPerfil__statusInformacoes">
          <div class="statusContainer">
            <div className="status">
              <strong>150</strong>
              <span>Publicações</span>
            </div>
            <div className="status">
              <strong>1500</strong>
              <span>Seguidores</span>
            </div>
            <div className="status">
              <strong>120</strong>
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
