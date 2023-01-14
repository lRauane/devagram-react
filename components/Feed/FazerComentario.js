import Avatar from "../Avatar";

export default function FazerComentario({usuarioLogado}){
  return (
    <div className="fazerComentario__container">
      <Avatar src={usuarioLogado.avatar}/>
      <textarea rows={1} placeholder="Adicione um comentário..."></textarea>
    </div>
  )
}