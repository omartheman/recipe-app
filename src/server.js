const express = require('express');
const app = express();

let mysql = require('mysql');
let sqlResult;

let connection = mysql.createConnection({
  host: 'localhost', 
  user: 'root',
  password: '3yeDroplets!',
  database: 'omartestdb1'
});

connection.query("SELECT * FROM new_table", function (err, result, fields) {
  if (err) throw err;
  sqlResult = result;
  console.log(sqlResult);
});

app.use(express.static(__dirname + '../..'));

app.get('/', async (req, res) => {
  res.send(sqlResult)
});

const path = require('path');
const port = process.env.PORT || 4000 || 27016 || 27015 || 27017;

app.listen(port, process.env.IP, function(){
  console.log(`Server is running on port: ${port}`);
});