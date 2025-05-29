const express=require('express');
const app=express();
app.set('view engine','ejs');
app.set('views','views');
const mongoose= require('mongoose');
mongoose.connect("mongodb://localhost:27017/shop").then((result)=>{
    console.log("Connect Successfully!");
    });
/* <----  Assignment 8  -----> */
const expressSession=require('express-session');
const MongoDBSession=require('connect-mongodb-session')(expressSession);
const mdbsession = MongoDBSession({uri:"mongodb://localhost:27017/shop",collection:'sessions' }); //Changed the collection with my collection name

/* <----  Assignment 8  -----> */
const bodyParser=require('body-parser');
const path = require("path");
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSession({secret:'Hossam',resave:false,saveUninitialized:false,store:mdbsession}));
const authRoutes=require('./routes/auth');
app.use(authRoutes);
const shopRouter = require('./routes/shop');
app.use(shopRouter);
const adminRoutes=require('./routes/admin');
app.use('/admin',adminRoutes);
const errorController=require('./controllers/errors');
app.use(errorController.get404);
app.listen(8080);