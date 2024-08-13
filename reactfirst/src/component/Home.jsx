import axios from "axios"
import React, { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
const Home=()=> {
const [allData, SetAllData] = useState([]);
const [dropData,setDropData]=useState("All");
    useEffect(()=>{
        const getProduct=async()=>{
        try{
            const response=await axios.get("https://fakestoreapi.com/products")
            SetAllData(response.data);
            console.log(response.data)
            }catch(er){
                console.log(er)
            }}
       getProduct();
    },[])
    const category =["All", ...new Set(allData.map(product=>product.category))]
    const handleCategory=(e)=>{
      setDropData(e.target.value) 
    }
    const filterProduct=dropData==="All"?allData:allData.filter(item=>item.category===dropData);
    // console.log(filterProduct)

    const handleClick =(e)=>{
        console.log(e.target.value)
    }
    return(
    <center>
          <h1> Home</h1>
          <p>I am the home content</p>
        <Form.Select onChange={handleCategory}>
            {
                   category.map((categories,index)=>(
                   <option key={index} value={categories}>{categories}</option>
                 ))
            }
        </Form.Select>
    <Table>
        <thead>
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Image</th>
            <th>Price</th>
            <th>Category</th>
        </tr>
        </thead>
        <tbody>
           {filterProduct.map((item,index)=>(
            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td><img src={item.image} width={100} height={100}/></td>
                <td>&#36;{item.price}</td>
                <td>{item.category}</td>
                <td><Link className="bi bi-pen-fill" to={`/editData/${item.id}`} ></Link></td>
                {/* <button onClick={handleClick} className="bi bi-pen" value={item.id}></button> */}
            </tr>
           ))}
        </tbody>
    </Table>
        </center>
    )
}
export default Home;