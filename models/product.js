const mongodb = require('mongodb')
const getDb = require('../util/database').getDb
class Product{
    constructor(title,price,quantity,catagory,imgurl,detail,about,specs){
        this.title = title
        this.price = price
        this.imgurl = imgurl
        this.quantity = quantity
        this.catagory = catagory
        this.detail = detail
        this.about = about
        this.specs = specs
    }
    save(){
        const db = getDb()
        return db.collection('products')
            .insertOne(this)
            .then(result=>{
                console.log(result)
            })
            .catch()
    }
    static fetchAll() {
        const db = getDb();
        return db
          .collection('products')
          .find()
          .toArray()
          .then(products => {
            console.log(products);
            return products;
          })
          .catch(err => {
            console.log(err);
          });
      }
      static findById(prodId) {
        const db = getDb();
        return db
          .collection('products')
          .find({ _id: new mongodb.ObjectId(prodId) })
          .next()
          .then(product => {
            console.log(product);
            return product;
          })
          .catch(err => {
            console.log(err);
          });
      }
}
module.exports = Product