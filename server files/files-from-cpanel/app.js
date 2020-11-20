const express = require('express');
const app = express();
let mysql = require('mysql');
let sqlResult;
var cors = require("cors");

let connection = mysql.createConnection({
  host: 'localhost', 
  user: 'britxbtx_omar2',
  password: '3yeDroplets!',
  database: 'britxbtx_recipe_app_test'
});

connection.query("SELECT * FROM recipes", function (err, result, fields) {
  if (err) throw err;
  sqlResult = result;
  console.log(sqlResult);
});

app.use(express.static(__dirname + '../..'));
app.use(cors());

// app.get('/', async (req, res) => {
//   res.send(sqlResult);
// });

app.get('/recipeapp_server', (req, res) => {
  console.log('im going to right place')
  res.send(sqlResult);
});

const path = require('path');

app.listen(process.env.PORT || 3000 || 27016 || 27015 || 27017, process.env.IP, function(){
  console.log('Server is running on port 3000');
});