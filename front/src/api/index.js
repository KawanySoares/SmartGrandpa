import axios from 'axios'

const api = axios.create ({
  baseURL: "http://10.62.0.115:8080",
})

export default api
