import axios from "axios";
import { useEffect, useState } from "react";
import Contact from "./Contact";

const About = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    DataCall();
    CategoryData();
  }, [handleShowCategory]);

  //Category call
 
  const CategoryData = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then(function (cat) {
        return cat.json();
      })
      .then(function (cate) {
        cate.unshift("All");
        setCategory(cate);
        console.log(cate);
      });
  };

  //All Product call
  const DataCall = () => {
    axios({
        method:"get",
        url:("https://fakestoreapi.com/products")
      })
      .then((req)=> {
        setData(req.data);
        console.log(req);
      });
  };

  //Data Sorting acc.. to price
  const handleDataSorting = () => {
    if (count) {
      setData((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setData((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
    setCount((prev) => !prev);
  };
 
   //Product call according to the category
  const handleShowCategory = (e) => {
    if (e.target.value === "All") {
      DataCall();
    } else {
      fetch(`https://fakestoreapi.com/products/category/${e.target.value}`)
        .then(function (res) {
          return res.json();
        })
        .then(function (req) {
          setData(req);
          console.log(req);
        });
    }
  }

  return (
    <center>
       <Contact product={data} cate={category}/>
      <h1>About</h1>
      <p>I am the About Content</p>
      <select onChange={handleShowCategory}>
        {category.map((item) => (
          <option value={item} key={item}>
            {item.toUpperCase()}
          </option>
        ))}
      </select>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th> Price<span className="ms-2 bi bi-arrow-down-up" onClick={handleDataSorting}></span></th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>
                <img src={product.image} width={100} height={100} />
              </td>
              <td>&#36;{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </center>
  );
};

export default About;
