const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/' , (req , res)=>{
   res.send('hello from simple server :)')
})
app.get('/about' , (req , res)=>{
   res.send('my name is wakas')
})
app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))