import InputPublico from "../InputPublico";
import Envelope from '../../public/Imagens/envelope.svg';

export default function Login() {
  return (
    <section className={"login__Section paginaPublica"}>
      <div className="logo__Container"></div>
      <div className="conteudo__paginaPublica">
        <form>
          <InputPublico 
          image={Envelope}
          texto="Digite seu E-mail..."
          tipo="email"
          aoAlterarValor={() => console.log("Digitando email...")}/> 
        </form>
      </div>
    </section>
  );
}
