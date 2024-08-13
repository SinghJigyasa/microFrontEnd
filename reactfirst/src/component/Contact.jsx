import axios from "axios";
import { useEffect, useRef, useState } from "react";


const Contact=()=>{
    const [allItem, setAllItem]=useState([]);
    const [data, setData] = useState([]);
    const [showCatData,setShowCatData] =useState(allItem)

   const prevRef=useRef();
    const DataCall = () => {
            fetch("https://fakestoreapi.com/products")
            .then((req)=>req.json())
            .then((req)=> {
                setAllItem(req)
                console.log(req)
                let category= req.map(item=>{
                        return item.category
                });
                let arr= category.filter((items,index)=>{
                    return category.indexOf(items) === index;
                })
                arr.unshift("All")
                setData(arr)
                console.log(arr)
            });
      
          };

      const handleCallProduct=(e)=>{
        console.log(showCatData);
        let ev=e.target.value;
        if(ev==='All'){
         DataCall();
        }else{
            const newitem= allItem.filter(item=>item.category === ev);
            // console.log('newitem',newitem)
      setShowCatData(newitem)
        }
      }
    //   const filterProduct=
              
      useEffect(()=>{
        DataCall();
      },[])
    return(
        <center>
          <h1>Contact</h1>
          <p>I am the contact Content</p>
        <select onChange={handleCallProduct}>
           {
            data.map((items,index)=>
                <option key={index} value={items}>{items.toUpperCase()}</option>  
                )
           }
        </select>
        <div className="card-style ms-3">
          {
            showCatData.map((product) =>
            <div key={product.id} className="card m-3" style={{width:'250px',height:"auto"}}>
            <img className="card-img-top" src={product.image} />
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
            </div>
            <div className="card-body">
                <p>{product.description}</p>
                <span className="font-weight-bold">&#36;{product.price}</span>
            </div>
            </div>
           )}
        </div> 
        </center>
    )
}

export default Contact;