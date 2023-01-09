import httpServices from "./httpServices";

export default class usuarioServices extends httpServices{
  async login(credenciais){
    const {data} = await this.post('/login', credenciais)
    localStorage.setItem("nome:", data.nome);
    localStorage.setItem("email:", data.email);
    localStorage.setItem("token:", data.token);
  
    if(data.avatar){
      localStorage.setItem("Avatar", data.avatar);
    }
  }

  async cadastro(dados){
    return this.post('/cadastro', dados);
  }
};