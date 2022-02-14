const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const Connection = require("./Configuration/connection").DbConnection
const Axios = require("axios")
const path = require("path")
const PORT = process.env.PORT || 5000;
dotenv.config();

//database connection
Connection();

app.use(express.json());
app.use(cors());

//routes

const user = require("./Routes/login");

// const people = require("./Routes/people")

//app.use
app.use("/",user);
// app.use("/",people)
app.use("/people", function(req,res){
   Axios.get('https://swapi.dev/api/people/')
  .then(response => {
    res.status(200).json({
      data:response.data
    })
  })
  .catch(error => {
    res.status(404).json({
      error: error.message
    })
  });

})

app.use("/planet", function(req,res){
   Axios.get('https://swapi.dev/api/planets')
  .then(response => {
  res.status(200).json({
    data:response.data
  })
  })
  .catch(error => {
    res.status(404).json({
      error : error.message
    }) ;
  });  
})


app.use("/starship", function(req,res){
  Axios.get('https://swapi.dev/api/starships')
 .then(response => {
 res.status(200).json({
   data:response.data
 })
 })
 .catch(error => {
   res.status(404).json({
     error : error.message
   }) ;
 });  
})



//__________ Deployment_________________//


if (process.env.NODE_ENV == 'production') {
  app.use(express.static("/client/build"));

  // app.get("*" , (req,res) =>{
  //   res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  // })
} else {
    app.get("/" , (res,res) => {
      res.send("API is Running.. ")
    })
}



app.listen(PORT, () => {
  console.log(`server connect on PORT ======>  ${PORT}`);
});

module.exports = app;