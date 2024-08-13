import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addData } from "../reducer";

const Datafetch = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const reduxData = useSelector((state) => state.users);
  console.log(reduxData);

  const DataCall = () => {
      fetch("https://dummyjson.com/products")
      .then((req) => req.json())
      .then((res) => {
        setData(res.products);
      });
    };
  useEffect(() => {
      DataCall();
    }, []);
  const { title, description, price, category, image } = data;
    const handleDataAdd = (e) => {
        e.preventDefault();
        const addReduxData = data.filter((item) => item.id == e.target.value);
        console.log(addReduxData);
        dispatch(
        addData({
            addReduxData,
        })
        );
    };
  return (
    <div>
      <p>{JSON.stringify(reduxData)}</p>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((items, index) => (
            <tr key={index}>
              <td>{items.id}</td>
              <td>{items.title}</td>
              <td>{items.description}</td>
              <td>{items.price}</td>
              <td>{items.category}</td>
              <td>
                <img src={items.thumbnail} height={150} width={150} />
              </td>
              <td>
                <button value={items.id} onClick={handleDataAdd}>
                  Add to Reducer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Datafetch;
