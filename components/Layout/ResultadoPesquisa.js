import Avatar from '../Avatar'

export default function ResultadoPesquisa({nome, avatar, onClick, id}){
  return(
    <div className="resultadoPesquisa" onClick={() => onClick(id)}>
      <Avatar src={avatar}/>
      <div className='infoUser'>
        <strong>{nome}</strong>
      </div>
    </div>
  );
}