const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express()
const port = 5000

app.use(bodyParser.urlencoded({extended: true}))
mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://fe_nando13:Nando123456@cluster0.xozpj.mongodb.net/test')


// ---------- MONGOOSE - SCHEMA - New User ----------
const userSchema = new mongoose.Schema({
    login: String,
    name: String,
    password: String,
    // transactions: [transactionSchema],
    
    // {
    //     amountFrom: String, 
    //     currencyFrom: String, 
    //     feeComp: Number, 
    //     currencyTo: String, 
    //     amountTo: Number, 
    //     date: Date 
    // }
  });


  // ---------- MONGOOSE - SCHEMA - New Transaction ----------
const transactionSchema = new mongoose.Schema({
        amountFrom: String, 
        currencyFrom: String, 
        feeComp: Number, 
        currencyTo: String, 
        amountTo: Number, 
        date: Date 
  });

// ---------- MONGOOSE - MODEL ----------
const User = mongoose.model('user', userSchema);


// ---------- GET ----------
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
    // res.json({ message: "Hello from server!" });
  })

// ---------- POST ----------
app.post('/users', function(req, res){
    const newUser = new User({
        login: req.body.login,
        name: req.body.name,
        password: req.body.password,
        amountFrom: req.body.amountFrom,
        currencyFrom: req.body.currencyFrom,
        feeComp: req.body.feeComp,
        currencyTo: req.body.currencyTo,
        amountTo: req.body.amountTo,
        dateTrans: req.body.date,
        dateFinal: req.body.dateFinal
    })
    console.log(req.body)
    newUser.save()
  
    res.send(`The user ${req.body.name} was added successfully`)
})

// ---------- DELETE ----------
app.delete('/users/:userId', function(req, res){

    const delUser = req.params.userId
  
  User.deleteOne(
    {name: delUser},
    function(err){
        if(!err){
            console.log("The user was deleted")
        }else{
            console.log(err)
        }
    }
)
res.send(`The user ${req.params.userId} was deleted.`)
})
  
  

// ---------- PORT ----------
app.listen(port, () => {
    console.log(`FAM server is running on port ${port}`)}
    )