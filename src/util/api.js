import axios from 'axios';

const API = axios.create({
    baseURL:'/',
     headers: {
    'Content-Type': 'application/json',
  }    
})

export const addGoods =(addGoodsData) =>API.post('addGoods',addGoodsData);