import axios from "axios"

export const login = (id, pwd) => {
  return axios.post('/login', {
    id, pwd
  })
}