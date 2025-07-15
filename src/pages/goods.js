import React, {useState,useEffect} from 'react';
import axios from 'axios';

const Goods = () => {
    const [posts,setPosts] = useState([]);
    const [error,setError] = useState(null);
    const [goodsFormData,setFormData] = useState({
      goodsName:"",
      goodsSize:"",
      goodsDesc:"",
      goodsUnitOfMeas:"",
      availableStock:"0",
      qtySold:"0"
    });
    const [addGoodsResponse,setResponse]= useState(null);
    const handleChange = (e) =>{
      setFormData({...goodsFormData,[e.target.name]:e.target.value});
    };
    const handleSubmit = async (e) =>{
      e.preventDefault();

    try {
      const res = await fetch("/addGoods", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([goodsFormData]),
      })

      const data = await res.json();
      console.log(data);
      setResponse(data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit form");
    }
    }
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
    

  
  

    return <div className="container">
      
      <div className="row">
        <div className="col-sm-12">
          {error && <p style={{ color: 'red' }}>Error: {error}</p>}
          <ul className="list-group">
              {posts.map((post,index) => (
                
                <li className={post['goodsStatus']==='ACTIVE'?"list-group-item border-success":"list-group-item border-danger"} key={index}>
                  <div className="row">
                    <div className="col-sm-2 text-start">
                    <label className="fw-bold">Name</label>
                    <p>{post['goodsName']}</p>
                    </div>  
                    <div className="col-sm-2 text-start">
                    <label className='fw-bold'>Size</label>
                    <p>{post['goodsSize']}</p>
                    </div>
                    <div className="col-sm-3 text-start">
                    <label className='fw-bold'>Description</label>
                    <p>{post['goodsDesc']}</p>
                    </div>
                    <div className='col-sm-2 text-start'>
                      <label className='fw-bold'>Available Stock</label>
                      <p>{post['availableStock']}{post['goodsUnitOfMeasurement']}</p>
                    </div>
                    <div className='col-sm-2 text-start'>
                      <label className='fw-bold'>Quantity Sold</label>
                      <p>{post['qtySold']}{post['goodsUnitOfMeasurement']}</p>
                    </div>
                    <div className="col-sm-1 text-start">
                    <i className="bi bi-pencil"></i>&nbsp;
                    {/* <p>{post['goodsId']}</p> */}
                    <i className="bi bi-trash"></i>
                    
                    </div>
                  </div>
                  </li>
              ))}
            </ul>
            <div className="floating-button"><i  data-bs-toggle="modal" data-bs-target="#formModal" className="bi bi-plus-circle"></i></div>   
            

<div className="modal fade" id="formModal" tabIndex="-1" aria-labelledby="formModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="formModalLabel">User Form</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        
        <form id="modalForm" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Good Name</label>
            <input type="text" className="form-control" id="goodsName" name="goodsName" value={goodsFormData.goodsName}  onChange={handleChange} placeholder="Enter your good name" required/>
          </div>
          <div className="mb-3">
            <label htmlFor="goodsSize" className="form-label">Good Size</label>
            <input type="text" className="form-control" id="goodsSize" name="goodsSize" value={goodsFormData.goodsSize}  onChange={handleChange} placeholder="Enter your good size" required/>
          </div>
          <div className="mb-3">
            <label htmlFor="goodsDesc" className="form-label">Good Description</label>
            <input type="text" className="form-control" id="goodsDesc" name="goodsDesc" value={goodsFormData.goodsDesc}  onChange={handleChange} placeholder="Enter your good description" required/>
          </div>
          <div className="mb-3">
            <label htmlFor="goodsUnitOfMeas" className="form-label">Good Unit</label>
            <input type="text" className="form-control" id="goodsUnitOfMeas" name="goodsUnitOfMeas" value={goodsFormData.goodsUnitOfMeas}  onChange={handleChange} placeholder="Enter your good unit" required/>
          </div>
          <div className="mb-3">
            <label htmlFor="availableStock" className="form-label">Good Available Stock</label>
            <input type="hidden" className="form-control" id="availableStock" name="availableStock" value={goodsFormData.availableStock} placeholder="Enter Available Stock" required/>
          </div>
          <div className="mb-3">
            <label htmlFor="qtySold" className="form-label">Quantity Sold</label>
            <input type="hidden" className="form-control" id="qtySold" name="goodsSize" value={goodsFormData.goodsSize} placeholder="Enter your good size" required/>
          </div>
          



          
          <button type="submit" className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  </div>
</div>
        </div>
      
          

      </div>
    </div>;
  };
  
  export default Goods;