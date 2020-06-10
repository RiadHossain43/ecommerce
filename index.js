require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const shopRoutes = require('./routes/mainrouter')
const adminRoutes = require('./routes/admin')
const mongoConnect = require('./util/database').mongoConnect

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname,'public')))

app.use((req, res, next) => {
    // User.findById(1)
    //   .then(user => {
    //     req.user = user;
    //     next();
    //   })
    //   .catch(err => console.log(err));
    next();
  });

app.use('/admin', adminRoutes)
app.use(shopRoutes)


const port = process.env.PORT



mongoConnect(()=>{
    app.listen(port,()=>{
        console.log(`app listening on port ${port}`)
    })
})