import Image from 'next/image'

export default function InputPublico({
  image,
  tipo,
  texto,
  valor = "",
  exibirMensagemValidacao = false,
  mensagemValidacao = "",
  aoAlterarValor
}) {
  return (
    <div className="container__inputPublico">
      <div className="input__elementos">
        <Image
          src={image}
          alt="imagem do campo"
          className="icone__inputPublico"
          width={20}
          height={20}
        />
        <input type={tipo} placeholder={texto} value={valor} onChange={aoAlterarValor}/>
      </div>

      {exibirMensagemValidacao && (
        <p className="MensagemValidacao">{mensagemValidacao}</p>
      )}
    </div>
  );
}
