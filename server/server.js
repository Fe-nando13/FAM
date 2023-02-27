const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://fe_nando13:Nando123456@cluster0.xozpj.mongodb.net/test')

// ---------- MONGOOSE - SCHEMA ----------
const userSchema = new mongoose.Schema({
    name: String,
    phone: Number,
    id: Number,
    course: String
  });

// ---------- MONGOOSE - MODEL ----------
const User = mongoose.model('user', userSchema);

const app = express()
const port = 5000

app.use(bodyParser.urlencoded({extended: true}))


// ---------- GET ----------
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
  })

// ---------- POST ----------
app.post('/test', function(req, res){
    const newUser = new User({
        id: Number(req.body.id),
        name: req.body.name,
        phone: Number(req.body.phone),
        course: req.body.course,
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