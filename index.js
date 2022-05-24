const express = require("express");
const fs = require('fs')
const app = express()

app.get('/', function (req, res){ 
    fs.readFile('./employees.json','utf-8',(error,data)=>{
        res.send(data);
    })
})
    

const PORT= 3000
app.listen(PORT,()=>{
    console.log(`Server is running on the port ${PORT} `)
})