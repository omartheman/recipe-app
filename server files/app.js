const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require("cors");


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

let con = mysql.createConnection(loginLocal);
/*
let con = mysql.createConnection(loginBritt);
*/

app.use(express.static(__dirname + '../..'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/recipeapp_server', (req, res) => {
  con.query("SELECT * FROM recipes", function (err, result, fields) {
    if (err) throw err;
    sqlResult = result;
  });
  res.send(sqlResult);
  // console.log(sqlResult);
});

app.post('/recipeapp_server', function(req, res){
// app.post('/recipeapp_server/post', function(req, res){
  res.send('Got a POST request');
  console.log('Post recieved. req.body: ', req.body);
  console.log('req.body.item: ', req.body.item)
  console.log(req.body.cook)
  var sql = `UPDATE recipes SET 
    item = '${req.body.item}',
    cook = '${req.body.cook}',
    img = '${req.body.img}',
    description = '${req.body.description}' 
    WHERE id = '2' `;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
  con.query("SELECT * FROM recipes", function (err, result, fields) {
    if (err) throw err;
    sqlResult = result;
  });
});

const port = process.env.PORT || 4000 || 27016 || 27015 || 27017;

app.listen(port, process.env.IP, function(){
  console.log(`Server is running on port ${port}`);
});