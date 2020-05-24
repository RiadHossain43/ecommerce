const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/',(req,res)=>{
    // res.sendFile(path.join(__dirname,'..','views','index.html'))
    res.render('home',{prod:"home"})
})
router.get('/product/detail',(req,res)=>{
    res.render('product_detail',{prod:"product_detail"})
})
router.get('/shop',(req,res)=>{
    res.render('shop')
})
router.get('/cart',(req,res)=>{
    res.render('cart')
})
router.get('/checkout',(req,res)=>{
    res.render('checkout')
})

module.exports = router