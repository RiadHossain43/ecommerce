const mongodb = require('mongodb')
const MongodbClient = mongodb.MongoClient
const mongodb_url = 'mongodb://localhost/e-commerce'

let _db

const mongoConnect = (callback)=>{
    MongodbClient.connect(mongodb_url)
    .then(client=>{
        _db = client.db()
        callback()
    })
    .catch(err=>{
        console.log(err)
        throw err
    })
}

const getDb = ()=>{
    if(_db)
        return _db
    throw 'Database not found'
}

exports.mongoConnect = mongoConnect
exports.getDb = getDb