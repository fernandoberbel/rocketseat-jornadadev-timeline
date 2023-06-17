import axios from 'axios'

// definir o caminho padrão do back-end
export const api = axios.create({
  baseURL: 'http://192.168.200.203:3333/',
})
