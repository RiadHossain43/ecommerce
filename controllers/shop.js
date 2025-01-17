const Product = require('../models/product')

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
    .then(products => {
      res.render('Mainsite/shop', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products'
      })
    })
    .catch(err => {
      console.log(err)
    })
}
exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(product => {
      res.render('Mainsite/product_detail', {
        product: product,
        pageTitle: product.title,
      });
    })
    .catch(err => console.log(err));
};
