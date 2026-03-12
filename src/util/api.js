import axios from 'axios';

const API = axios.create({
    baseURL:'/',
     headers: {
    'Content-Type': 'application/json',
  }    
})

export const listGoods =() => API.get('listGoods');
export const addGoods =(addGoodsData) =>API.post('addGoods',addGoodsData);
export const deleteGood =(deleteGoodData) =>API.post('deleteGood',deleteGoodData);
