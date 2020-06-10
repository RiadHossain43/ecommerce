const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product')
}

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title
    const price = req.body.price
    const quantity = req.body.quantity
    const catagory = req.body.catagory
    const imageUrl = req.body.image_url
    const detail = req.body.detail
    const about = req.body.about
    const specs = req.body.specs

    const product = new Product(title, price, quantity, catagory, imageUrl, detail, about ,specs)
    product
        .save()
        .then(result => {
            // console.log(result);
            console.log('Created Product')
            res.redirect('/admin/add-product')
        })
        .catch(err => {
            console.log(err)
        })
}