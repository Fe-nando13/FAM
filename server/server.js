const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express()
const port = 5000

app.use(bodyParser.urlencoded({extended: true}))
mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://fe_nando13:Nando123456@cluster0.xozpj.mongodb.net/FAM')

// ---------- MONGOOSE - SCHEMA - New User ----------
const userSchema = new mongoose.Schema({
    login: String,
    name: String,
    password: String,
  });


// ---------- MONGOOSE - MODEL ----------
const User = mongoose.model('user', userSchema);

// ---------- POST USER----------
app.post('/users', function(req, res){
    const newUser = new User({
        login: req.body.login,
        name: req.body.name,
        password: req.body.password,
        
    })
    console.log(req.body)
    newUser.save()
  
    res.send(`The user ${req.body.name} was added successfully`)
})



// ---------- MONGOOSE - ARRAY ----------
const childSchema = new mongoose.Schema({ name: 'string' });

const parentSchema = new mongoose.Schema({
    login: String,
  // Array of subdocuments
    children: [childSchema],
  
});

// ---------- MONGOOSE - MODEL ----------
const Transaction = mongoose.model('transaction', parentSchema);

// ---------- POST ----------
app.post('/transaction', function(req, res){
    const newTransac = new Transaction({
        login: req.body.login,
        transactions: [
            { 
                date1: req.body.date1, 
                date2: req.body.date2 
            }
        ], 
    })
    console.log(req.body)
    newTransac.save()
  
    res.send(`The user ${req.body.login} was added successfully`)
})



// ---------- GET ----------
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
    // res.json({ message: "Hello from server!" });
})

// ---------- GET ----------
app.get('/users:id', function (req, res) {
    res.sendFile(__dirname + '/index.html')
    // res.json({ message: "Hello from server!" });
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