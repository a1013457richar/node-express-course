const express=require('express')
const connectDB = require('./db/connect');
require('dotenv').config();
const app=express()

app.get('hello',(req,res)=>{
    res.send('task')
})
const port = process.env.PORT || 5000;
const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI);
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  start();