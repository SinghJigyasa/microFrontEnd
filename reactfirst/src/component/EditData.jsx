import axios from "axios"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const EditData=()=>{
    const[data,setData]= useState({title:"",price:"",description:""});
    // const [update,setUpdate]=useState({title:"",price:"",description:""})
    
    let {title,price,description,category,image}=data;
    const {id}=useParams();
    const navigate=useNavigate()
    const ProductData= async()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>{setData(json)})
    }
    useEffect(()=>{
        ProductData()
    },[])

    const handleSubmitForm=(e)=>{
        e.preventDefault();
        fetch(`https://fakestoreapi.com/products/${id}`,{
            method:"PUT",
            body:JSON.stringify(data)
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
        alert("updated sucessfully")
        console.log(JSON.stringify(data))   
        navigate("/home");
        
    }
    

    const handleChange=(e)=>{
      const{name,value} =e.target;
      setData({
        ...data,[name]:value
      })
    }
//     const handleChange = (productId, field, value) => { setUpdate((prevProducts) => prevProducts.map((product) => product.id === productId ? { ...product, [field]: value } : product));
//       };
//    const handleFirstChange=(e)=>{
//     setPrice(e.target.value)
//     console.log(price)
//    }
    return(
        <div>
                <label htmlFor="title">Title</label>
                  <input type="text" value={title|| ''} onChange={handleChange} className="form-control" name="title" /><br/>
                
                <label htmlFor="price">Price</label>
                <input name="price" type="text" value={price|| ''} onChange={handleChange} className="form-control"/><br/>

                <label >category</label>
                <input type="text" value={category|| ''} readOnly  className="form-control"/><br/>

                <label htmlFor="description">Description</label>
                <textarea name="description" value={description|| ''} onChange={handleChange} className="form-control"/><br/>

                <img src={image} height={200} width={200}/>
               
            <button onClick={handleSubmitForm}>Update</button>
        </div>
    )
}
export default EditData;