import React, {useState,useEffect} from 'react';
import axios from 'axios';

const Goods = () => {
    const [posts,setPosts] = useState([]);
    const [error,setError] = useState(null);
    useEffect(()=>{
      axios.get('/listGoods')
      .then((response) => {
          console.log(response);
          setPosts(response.data[0]);
      })
      .catch((err) => {
          setError(err.message);
      });
    },[]);
    const [state, setState] = useState({
      name: 'John',
      age: 25,
      hobbies: ['Reading', 'Gaming', 'Coding'],
  });

  // Parsing the data
  const { name, age, hobbies } = state;

    return <div className="container">
      
      <div className="row">
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <ul>
                {posts.map((post,index) => (
            
                    <li key={index}>Hi{post['goodsName']}</li>
                        
                ))}
               
            
            </ul>
      </div>
    </div>;
  };
  
  export default Goods;