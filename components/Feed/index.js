import { useEffect, useState } from "react";
import FeedService from "../../services/FeedService";
import Postagem from "./post";

const feedService = new FeedService();

export default function  Feed({ usuarioLogado }) {
  const [listaPost, setListaPost] = useState([]);

  useEffect( ()  => {
    async function user(){
      const {data} = await feedService.carregarPost();
      
      const postagensFormatadas = data.map((postagem) =>(
        {
          id: postagem._id,
          usuario: {
            id: postagem.idUsuario,
            nome: postagem.usuario.nome,
            avatar: postagem.usuario.avatar
          },
          fotoPost: postagem.foto,
          descricao: postagem.descricao,
          curtidas: postagem.likes,
          comentarios: postagem.comentario.map(c =>({
            nome: c.nome,
            mensagem: c.comentario
          }))
        }
      ));
      setListaPost(postagensFormatadas);
    }
    
    user();
  }, [usuarioLogado]);

  return( <>
  <div className="feedContainer largura">
  {listaPost.map(Dadospostagem =>(
    <Postagem
     key={Dadospostagem.id}
      {...Dadospostagem}
      usuarioLogado={usuarioLogado}
      />
  ))
  }
  </div>
  </>
  )
}
