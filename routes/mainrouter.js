const path = require('path')
const express = require('express')
const homeController = require('../controllers/home')
const shopController = require('../controllers/shop')
const router = express.Router()


router.get('/',homeController.getProducts)

router.get('/product/detail',(req,res)=>{
    res.render('Mainsite/product_detail',{prod:"product_detail"})
})

router.get('/shop', shopController.getProducts )
router.get('/products/:productId', shopController.getProduct )

router.get('/cart',(req,res)=>{
    res.render('Mainsite/cart')
})
router.get('/checkout',(req,res)=>{
    res.render('Mainsite/checkout')
})
router.get('/contact',(req,res)=>{
    res.render('Mainsite/contactus')
})
router.get('/signin',(req,res)=>{
    res.render('Mainsite/login')
})

module.exports = router