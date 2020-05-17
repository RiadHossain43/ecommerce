require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const router = require('./routes/route')

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

app.use(express.static(path.join(__dirname,'public')))
app.use(router)

const port = process.env.PORT
app.listen(port,()=>{
    console.log(`app listening on port ${port}`)
})