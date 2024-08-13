   const express= require ("express");
   const jwt = require("jsonwebtoken");
   const secretKey="secretkey"
   const app = express();
   const cors = require("cors");
   app.get('/jwtToken',(req,res)=>{
        res.json({
            message:"Welcome"
        })
   })
   app.use(cors());
  app.post("/login",(req,res)=>{   
    const user={
        id:1,
        username:"jig",
        email:"jig@123"
    }
    jwt.sign({user},secretKey,{expiresIn:'3000s'},(err,token)=>{
            res.json({  
                token
            })
    })
  })

  app.post('/profile',verifyToken,(req,res)=>{
    // console.log(req.token)
        jwt.verify(req.token,secretKey,(err,auth)=>{
            if(err){
                res.send({result:"Invalid Token",err:err})
            }else{
                // console.log(auth)
                res.json({
                    message:"profile Access",
                    auth
                })
            }
        })
  })

  function verifyToken(req,res,next){
    const bearerHeader = req.headers['token'];
    if(typeof(bearerHeader) !=='undefined'){
        const bearer = bearerHeader.split(" ")
        const token = bearer[1];
        req.token=token;
        next();
    }else{
        res.send({
            result:"Token not verified"
        })
    }
  }
   app.listen(5000);
   console.log("server started: http://127.0.0.1:5000")    