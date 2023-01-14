import { useEffect, useState } from "react";
import Postagem from "./post";

export function Feed({ usuarioLogado }) {
  const [listaPost, setListaPost] = useState([]);

  useEffect(() => {
    console.log("carregar feed")
    setListaPost([
      {
        id: "1",
        usuario: {
          id: "1",
          nome: "Rauane Lima",
          avatar: null,
        },
        fotoPost: 'https://criadouropetlegal.com.br/wp-content/uploads/2021/07/Gavia%CC%83o-asa-de-telha.jpeg',
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        curtidas: [],
        comentario: [
          {
            nome: 'joãozinho da catraca',
            mensagem: 'que doidera'
          },
          {
            nome: 'Shaolin matador de porco',
            mensagem: 'uouuuu'
          },
          {
            nome: 'zefa da farinha',
            mensagem: 'Que maravilha!'
          },
        ]
      },
      {
        id: "1",
        usuario: {
          id: "1",
          nome: "José Lima",
          avatar: null,
        },
        fotoPost: 'https://www.resumoescolar.com.br/wp-content/imagens/Resumo-sobre-o-p%C3%A1ssaro-Gavi%C3%A3o.jpg',
        descricao: 'Outro gavião',
        curtidas: [],
        comentario: [
          {
            nome: 'Fulando da Silva',
            mensagem: 'Muito legal :)'
          }
        ]
      },
    ]);
  }, [usuarioLogado]);

  return( <>
  <div className="feedContainer largura">
  {listaPost.map(Dadospostagem =>(
    <Postagem key={Dadospostagem.id} {...Dadospostagem}/>
  ))
  }
  </div>
  </>
  )
}
