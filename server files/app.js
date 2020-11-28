const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require("cors");
const session = require('express-session');

let sqlResult;
const loginLocal = {
  host: 'localhost', 
  user: 'root',
  password: '3yeDroplets!',
  database: 'recipe_app_test'
}
const loginBritt = {
  host: 'localhost', 
  user: 'britxbtx_omar2',
  password: '3yeDroplets!',
  database: 'britxbtx_recipe_app_test'
}


let connection = mysql.createConnection(loginBritt);
let corsOrigin = 'https://brittanyjewellneal.com/recipeapp';
/*
let connection = mysql.createConnection(loginLocal);
let corsOrigin = 'http://localhost:3000';
*/

app.use(express.static(__dirname + '../..'));
app.use(cors({
  origin:[corsOrigin],
  methods:['GET','POST'],
  credentials: true }));// enable set cookie
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
  secret: '2dfl3350v907s',
  resave: true,
  saveUninitialized: true,
  cookie: {
    secure: false,
  }
}));

// ===============================================================
// ATTEMPT TO LINK REACT ROUTER AND EXPRESS APP

const path = require('path');
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../build')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

// Handles any requests that don't match the ones above
app.get('/recipeapp*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/../build/index.html'));
});

// ===============================================================

/*
app.get('/recipeapp-server/auth', function(req, res){
  console.log('req.session in get', req.session)
  if (req.session.loggedin) {
    res.send(req.session.username);
  } else {
    res.send('Please login to view this page!');
  }
  res.end();
}); 

app.post('/recipeapp-server/auth', function(req, res) {
  console.log('req.body in post: ', req.body)
  const username = req.body.username;
  const password = req.body.password;
  if (username && password) {
    connection.query(`SELECT * FROM accounts WHERE username = ? AND password = ?`, [username, password], function(error, results, fields) {
      if (results.length > 0) {
        console.log('results in app.post', results);
        req.session.loggedin = true;
        req.session.username = username; 
        req.session.page_views++;
        console.log('req.session in post: ', req.session);
        res.redirect('/recipe_server/auth');
      } else {
        res.send('Incorrect Username and/or Password!');
        req.session.page_views = 1; 
      }
      res.end();
    });
  } else {
    res.send('Please enter Username and Password!');
    res.end();
  }
});

app.get('/recipeapp-server', (req, res) => {
  connection.query("SELECT * FROM recipes", function (err, result) {
    if (err) throw err;
    sqlResult = result;
  });
  res.send(sqlResult);
});

app.post('/recipeapp-server', function(req, res){
  res.send('Got a POST request');
  var sql = `UPDATE recipes SET 
    item = '${req.body.item}',
    cook = '${req.body.cook}',
    img = '${req.body.img}',
    description = '${req.body.description}' 
    WHERE id = '2' `;
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
  connection.query("SELECT * FROM recipes", function (err, result) {
    if (err) throw err;
    sqlResult = result;
  });
});
*/

const port = process.env.PORT || 4000 || 27016 || 27015 || 27017;

app.listen(port, process.env.IP, function(){
  console.log(`Server is running on port ${port}`);
});