import axios from "axios";
export default class httpServices{
  constructor(){
    this.axios =  axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL + '/api'
    });

    this.axios.interceptors.request.use((config) =>{
      const token = localStorage.getItem('token');
      if(token){
        config.headers.authorization = `Bearer ` + token
      };

      return config;
    })
  };

  post(url, data){
    return this.axios.post(url, data);
  }

  get(url){
    return this.axios.get(url);
  }
}