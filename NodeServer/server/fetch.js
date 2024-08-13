const express= require("express");
const mongoClient = require("mongodb").MongoClient;
const cors = require("cors");
const bodyParser = require('body-parser');


let connectionString ="mongodb://localhost:27017";

const app = express()
app.use(cors());
app.use(express.urlencoded({
    extended:true
}));
app.use(bodyParser.urlencoded({ 
    extended:false 
}))

app.use(bodyParser.json())
app.use(express.json());

//Fetching the data from the collection
app.get('/fetchData',(req,res)=>{
    mongoClient.connect(connectionString).then(clientObject=>{
        let database= clientObject.db("firstDatabase");
        database.collection("table1").find({}).toArray()
        .then(document=>{
            res.send(document)
            res.end()
        })
    })
})

//Adding the data in collection
app.post('/addData',(req,res)=>{
    mongoClient.connect(connectionString).then(clientObject=>{
        let database = clientObject.db("firstDatabase");
        let dataStore = {
            Name:req.body.name,
            Empid:parseInt(req.body.emp),
            Designation:req.body.desg
        };
        database.collection("table1").insertOne(dataStore)
        .then(result=>{
            console.log("Data Inserted")
            res.redirect('/fetchData');
            res.end()
        })
    })
})

//Fetching particular data from the collection
app.get('/details/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    mongoClient.connect(connectionString).then(clientObject=>{
        let database = clientObject.db("firstDatabase");
        database.collection("table1").find({Empid:id}).toArray()
        .then(result=>{
            res.send(result);
            res.end()
        })
    })
})

//Delete the data in the collection
app.delete('/deleteItem/:emp',(req,res)=>{
    const emp= parseInt(req.params.emp);
    mongoClient.connect(connectionString).then(clientObject=>{
        let database= clientObject.db('firstDatabase');
        database.collection('table1').deleteOne({Empid:emp})
        .then(result=>{
            console.log("Record Deleted",emp)
            res.redirect('/fetchData')
            res.end()
        })
    })
})

//Updating the data in the collection
// app.put('/updateDetails',(req,res)=>{
//     mongoClient.connect(connectionString).then(clientObject=>{
//         let database =clientObject.db("firstDatabase");
//         let findQuery = {Empid:parseInt(req.body.Empid)}
//         let itemUpdate={$set:{
//             Name:req.body.name,
//             Empid:parseInt(req.body.emp),
//             Designation:req.body.desg
//         }}
//         database.collection('table1').updateOne(findQuery,itemUpdate)
//         .then(result=>{
//             console.log("data Updated",itemUpdate,findQuery);
//             res.redirect('/fetchData');
//             res.end();
//         })
//     })
// })



app.listen(8080);
console.log("server started: http://127.0.0.1:8080")    