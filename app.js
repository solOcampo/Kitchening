const express=require('express')
const app=express()
const path=require('path')
const port=3010

app.use(express.static(path.resolve(__dirname,'public')))

app.get('/',(req,res)=> res.sendFile(path.join(__dirname,'views','index.html')))

app.listen(port,()=>console.log(`Se levanto el servidor en http://localhost: ${port}`))