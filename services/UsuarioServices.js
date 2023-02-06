import httpServices from "./httpServices";

export default class usuarioServices extends httpServices {
  async login(credenciais) {
    const { data } = await this.post("/login", credenciais);
    localStorage.setItem("nome", data.nome);
    localStorage.setItem("email", data.email);
    localStorage.setItem("token", data.token);

    const usuario = await this.get("/usuario");
    localStorage.setItem("id", usuario.data._id);

    if (usuario.data.avatar) {
      localStorage.setItem("Avatar", usuario.data.avatar);
    }
  }

  async cadastro(dados) {
    return this.post("/cadastro", dados);
  }

  async atualizarPerfil(dados){
    return this.put('/usuario', dados)
  }

  estaAutenticado() {
    return localStorage.getItem("token") !== null;
  }

  async pesquisa(termoPesquisa) {
    return this.get("/pesquisa?filtro=" + termoPesquisa);
  }

  async obterPerfil(idUsuario) {
    return this.get(`/pesquisa?id=${idUsuario}`);
  }

  async alternarSeguir(idUsuario){
    return this.put(`/seguir?id=${idUsuario}`)
  }

  async logout(){
    localStorage.removeItem("nome");
    localStorage.removeItem("email");
    localStorage.removeItem("token")
    localStorage.removeItem("id");
    localStorage.removeItem("Avatar");
  }  
  obterInfoUser() {
    return {
      id: localStorage.getItem("id"),
      nome: localStorage.getItem("nome"),
      avatar: localStorage.getItem("avatar"),
    };
  }
}
