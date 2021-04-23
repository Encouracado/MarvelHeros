import axios from 'axios';
import md5 from 'md5';

export interface dataKey {
    privateKey: string,
    publicKey: string
}

const privateKey = '4d89f732f2070f767cd167c90974c9722f2c6e19';
const publicKey = '4da92f9ba2c7b05eaf1e088dbffe0ce7';

let privateK = ""
let publicK = ""

export const GetKeys = (data: dataKey)=>{

  privateK = data.privateKey;
  publicK = data.publicKey;
  
};

let ts = Number(new Date());

let hashKeys =  md5(ts + privateKey + publicKey);
console.log("hash: ", hashKeys);
console.log("ts: ", ts);
const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public/',
  params: {
      ts,
      apikey: publicKey,
      hash: hashKeys

  }
});


export default api;
