const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require("cors");
const session = require('express-session');
const serverRoute = '/recipeapp/recipeapp-server';
let sqlResult;

const mode =
"developmentOmar";
/*
"productionBritt";
*/

let corsOrigin;
let connection;
if (mode === "productionBritt") {
  connection = mysql.createConnection({
    host: 'localhost', 
    user: 'britxbtx_omar2',
    password: '3yeDroplets!',
    database: 'britxbtx_recipe_app_test'
  });
  corsOrigin = 'https://brittanyjewellneal.com/recipeapp';
} else if (mode === "developmentOmar") {
  connection = mysql.createConnection({
    host: 'localhost', 
    user: 'root',
    password: '3yeDroplets!',
    database: 'recipe_app_test'
  });
  corsOrigin = 'http://localhost:3000';
}

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
    maxAge: 8*60*60*1000 //make session last 8 hours
  }
}));


app.get(`${serverRoute}/auth`, function(req, res){
  console.log('req.session in get', req.session)
  if (req.session.loggedin) {
    res.send(req.session.username);
  } 
  res.end();
}); 

app.post(`${serverRoute}/auth`, function(req, res) {
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
        res.redirect(`${serverRoute}/auth`);
        console.log('session cookiee', req.session.cookie)
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

app.get(`${serverRoute}`, (req, res) => {
  connection.query("SELECT * FROM recipes", function (err, result) {
    if (err) throw err;
    sqlResult = result;
  });
  res.send(sqlResult);
});

app.post(`${serverRoute}`, function(req, res){
  res.send('Got a POST request');
  var sql = `UPDATE recipes SET 
    item = '${req.body.item}',
    cook = '${req.body.cook}',
    img = '${req.body.img}',
    description = '${req.body.description}' 
    WHERE id = '2' `;
  connection.query(sql, 
    function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
  connection.query("SELECT * FROM recipes", function (err, result) {
    if (err) throw err;
    sqlResult = result;
  });
});
// ===============================================================
// ATTEMPT TO LINK REACT ROUTER AND EXPRESS APP
const path = require('path');
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../recipeapp')));

// Handles any requests that don't match the ones above
app.get('/recipeapp*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/../recipeapp/index.html'));
});
// ===============================================================
const port = process.env.PORT || 4000 || 27016 || 27015 || 27017;
 
app.listen(port, process.env.IP, function(){
  console.log(`Server is running on port ${port}`);
});