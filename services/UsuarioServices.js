import httpServices from "./httpServices";

export default class usuarioServices extends httpServices{
  async login(credenciais){
    const {data} = await this.post('/login', credenciais)
    localStorage.setItem("nome", data.nome);
    localStorage.setItem("email", data.email);
    localStorage.setItem("token", data.token);

    const usuario = await this.get('/usuario');
    localStorage.setItem("id", usuario.data._id);

  
    if(usuario.data.avatar){
      localStorage.setItem("Avatar", usuario.data.avatar);
    };
  }

  async cadastro(dados){
    return this.post('/cadastro', dados);
  }

  estaAutenticado(){
    return localStorage.getItem('token') !== null;
  };
};