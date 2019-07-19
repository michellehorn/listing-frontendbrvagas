import axios from 'axios';


export default () => {
  return axios.create({
    baseURL: `https://api.github.com/repos/frontendbr/vagas`,
    headers: {
      "Content-Type": "application/json"
    }
  })
}