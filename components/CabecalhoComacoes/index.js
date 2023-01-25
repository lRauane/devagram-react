import Image from "next/image";

export default function CabecalhoComAcoes({
  className,
  iconeEsquerda,
  textoEsquerda = null,
  aoClicarAcaoEsquerda,
  titulo,
  elementoDireita,
}) {
  return (
    <div className={`header__comAcoes ${className}`}>
      {iconeEsquerda ? (
        <Image
          src={iconeEsquerda}
          alt="icone esquerdo cabeçalho com ações"
          onClick={aoClicarAcaoEsquerda}
          width={25}
          height={25}
        />
      ) : (
        textoEsquerda !== null && (
          <span
            className="header__textoEsquerda"
            onClick={aoClicarAcaoEsquerda}>
            {textoEsquerda}
          </span>
        )
      )}

      <h3>{titulo}</h3>
      {elementoDireita && <button type="button">{elementoDireita}</button>}
    </div>
  );
}
