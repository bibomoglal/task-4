const express = require ('express');
const route = require ('./routes/routes.js');
const app = express ();
app.use(express.json())

app.use('/',route)

app.listen(3001,()=>{
    console.log('server is running http://localhost:3001')
})