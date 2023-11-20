const express = require('express')
const bodyparser = require('body-parser')
const {City} = require('./models/index')
const{PORT} = require('./config/server_config')
const CityRepository =require('./repository/city_repository')
const setupAndStartServer= async()=>{
     const app = express();

     app.use(bodyparser.json());
     app.use(bodyparser.urlencoded({extended:true}));
     
     app.listen(PORT,async()=>{
      console.log(`server started at ${PORT}`)
      const repo = new CityRepository();
      await repo.CreateCity({name:"mumbai"})
    //   City.create({
    //       name:"delhi",
    //   }).then((data)=>{
    //       console.log(data)
    //   }).catch((err)=>{
    //       console.log(err)
    //   })
       
     // City.sync({ alter: true })

     })
}

setupAndStartServer() 