export default function Button({ tipo = "button", texto, cor = "primaria", disabilitado = false, manipularClick }) {
  return (
    <button type={tipo} className={`btn ${cor}`} disabled={disabilitado} onClick={manipularClick}>
      {texto}
    </button>
  );
}
