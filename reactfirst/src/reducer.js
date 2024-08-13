import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


var initialData=
    {
        loading:false,
        users:[],
        error:''
       
        // id: 0,
        // title: "hello",
        // "description": "",
        // "price": 0,
        // "discountPercentage": 0,
        // "rating": 0,
        // "stock": 0,
        // "brand": "",
        // "category": "",
        // "thumbnail": "",
    }


//Defining the Action
 export const fetchUsers=createAsyncThunk('user/fetchuser',()=>{
    return axios
    .get("https://dummyjson.com/products")
    .then(response=>response.data.products)
 })
let data;
const userSlice= createSlice({
    name:"user",
    initialState:initialData,
    
    
    extraReducers:(builder)=>{
         builder.addCase(fetchUsers.pending,(state)=>{
         state.loading=true
        })
        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            state.loading=false
            state.users= action.payload
            data= state.users;
            state.error=''
        })
        builder.addCase(fetchUsers.rejected,(state,action)=>{
            state.loading=false
            state.users=[]
            state.error=action.error.message
           
        })
    }
    
})

export const{sortInAlphabet}=userSlice.actions;
export default userSlice.reducer;