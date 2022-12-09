import axios from "axios";

const api = axios.create({
    baseURL: 'https://tidevops.totvs.com.br:4434/',
    headers: {'Content-Type': 'application/json'}
  });

export default api