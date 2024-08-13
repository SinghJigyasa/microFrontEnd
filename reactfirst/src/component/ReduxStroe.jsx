import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../reducer";

const ReduxStore=()=>{
    const[count,setCount]=useState(0);
    const [sortedData , setSortedData] = useState([])
    const [targetvalue,setTargetValue]= useState()
    
    const userState= useSelector(state=>state.user)
    const dispatch=useDispatch()

  useEffect(()=>{
        dispatch(fetchUsers())    
    },[])

  useEffect(()=>{
    setSortedData(userState.users)
    },[userState.users])

 function DataSort() {
        if (count) {
            setSortedData((prev) =>[...prev].sort((a, b) => (a[targetvalue] > b[targetvalue] ? 1 : -1)));
        } else {
            setSortedData((prev) =>[...prev].sort((a, b) => (b[targetvalue] > a[targetvalue] ? 1 : -1)));
        }setCount((prev) => !prev);
        }
        
 const handleSorting=(e)=>{ 
       setTargetValue(e.target.value)
       DataSort();
    }
return(
        <div>
            {userState.loading && <div>Loading.....</div>}
            {!userState.loading && userState.error?<div>Error:{user.error}</div>:null}
            {!userState.loading && userState.users.length?(
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th><button value="title" onClick={handleSorting}>Title</button></th>
                        <th><button value="description" onClick={handleSorting}>Description</button></th>
                        <th> <button value="price" onClick={handleSorting}>Price</button></th>
                        <th><button value="category" onClick={handleSorting}>Category</button></th>
                        <th>Image</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        sortedData.map(item=>(
                        <tr key={item.id}>
                            <td> {item.title}</td>    
                            <td>{item.description}</td>
                            <td>&#8377;{item.price}</td>
                            <td>{item.category}</td>
                            <td><img src={item.thumbnail} height={150} width={150} /></td>
                        </tr>
                        ))
                    }
                    </tbody>
                </table>
            ):null}
    </div>
    )
}
export default ReduxStore;