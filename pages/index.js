import Button from "../components/Button";
import Avatar from "../components/Avatar";

export default function Home() {
  return (
    <>
      <h1>Olá mundo</h1>
      <div style={{ width: 350 }}>
        <Avatar/>
        <Button
          texto={"Editar perfil"}
          manipularClick={() => console.log("clicou")}
        />
      </div>
    </>
  );
}
