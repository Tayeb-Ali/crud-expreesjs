const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json())

    exports.login = async (req, res) => {

    //you can do this either synchronously or asynchronously
    //if synhronously, you can set a variable to jwt sign and pass it into the payload with secret key
    //if async => call back 


    //Mock user
    const user = {
        id:Date.now(),
        userEmail:'elteyab@gmail.com',
        password:'123123'
    }

    //send abpve as payload
    jwt.sign({user},'secretkey',(err,token)=>{
        res.json({
            token
        })
    })
};



    exports.profile = async (req, res) => {

    jwt.verify(req.token,'secretkey',(err,authData)=>{
        if(err)
            res.sendStatus(403);
        else{
            res.json({
                message:"Welcome to Profile",
                userData:authData
            })
           
        }
    })
  
}
