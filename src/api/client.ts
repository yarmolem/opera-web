import axios from 'axios'

export const axiosClient = axios.create({
  baseURL: 'https://proopera.org.mx/wp-json'
})
