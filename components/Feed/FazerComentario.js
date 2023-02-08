import { useState } from "react";
import Avatar from "../Avatar";

export default function FazerComentario({usuarioLogado, comentar}){
  const [rows, setRows] = useState(1);
  const [comentario, setComentario] = useState('');

  const AoDigitarComentario =(e) =>{
    const valorInput = e.target.value
    setComentario(valorInput);
    setRows(valorInput.length > 0 ? 2 : 1);
  }

  const AoPressionarTecla = (e) => {
    if(e.key === 'Enter'){
     FazerComentario();
    }
  }

  const FazerComentario = () =>{
    if(comentario.trim().length === 0 || !comentar){
      return;
    }
    comentar(comentario);
  }

  return (
    <div className="fazerComentario__container">
      <Avatar src={usuarioLogado.avatar}/>
      <textarea 
      onKeyDown={AoPressionarTecla}
      rows={rows} 
      value={comentario}
      autoFocus={true}
      onChange={AoDigitarComentario} placeholder="Adicione um comentário..."></textarea>
      <button className="btn-publicacao desktop" type="button" onClick={FazerComentario}>Publicar</button>
    </div>
  )
}