const express =  require('express');
var cors = require('cors');
var app = express();


var corsOptions = {
    origin: 'http://localhost:8080'
}

app.use(express.json());

app.use(express.urlencoded({extended:true}));


//simple route

app.get('/', (req, res)=>{
    res.json({
        message : 'Welcome to the World of Node JS'
    });
});
require("../app/routes/route.js")
const PORT = process.env.PORT || 8080;


app.listen(PORT, ()=>{
    console.log("server running....")
})