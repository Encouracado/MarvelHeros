import axios from 'axios';


const privateKey = '4d89f732f2070f767cd167c90974c9722f2c6e19';

const publicKey = '4da92f9ba2c7b05eaf1e088dbffe0ce7';

let privateK = ""
let publicK = ""

const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public/',
});


export default api;
