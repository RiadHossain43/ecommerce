const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/',(req,res)=>{
    // res.sendFile(path.join(__dirname,'..','views','index.html'))
    res.render('home',{prod:"HELLO"})
})

module.exports = router