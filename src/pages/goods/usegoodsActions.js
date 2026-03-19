import { useState } from 'react';
import { listGoods } from '../../util/api';

// export custom hook for goods Actions
export const useGoodsActions = () =>{
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);


    // function to call the listgoods API and get it displayed 
    const displayGoods = async () => {
    try {
      const listGoodsResponse = await listGoods();
      console.log(listGoodsResponse);
      setPosts(listGoodsResponse.data[0]);
    } catch (err) {
      setError(err.message);
    }
  };
  return{posts,error,displayGoods};
}
