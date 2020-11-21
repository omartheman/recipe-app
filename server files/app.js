const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let mysql = require('mysql');
let sqlResult;
var cors = require("cors");

let con = mysql.createConnection({
  // host: 'localhost', 
  // user: 'britxbtx_omar2',
  // password: '3yeDroplets!',
  // database: 'britxbtx_recipe_app_test'

  host: 'localhost', 
  user: 'root',
  password: '3yeDroplets!',
  database: 'recipe_app_test'
});



app.use(express.static(__dirname + '../..'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

con.query("SELECT * FROM recipes", function (err, result, fields) {
  if (err) throw err;
  sqlResult = result;
});

app.get('/recipeapp_server', (req, res) => {
  res.send(sqlResult);
  // console.log(sqlResult);
});

app.post('/recipeapp_server/post', function(req, res){
  console.log('Post recieved. req.body: ', req.body);
  console.log('req.body.item: ', req.body.item)
  console.log(req.body.cook)
  var sql = `UPDATE recipes SET 
    cook = '${req.body.cook}',
    img = '${req.body.img}',
    description = '${req.body.description}' 
    WHERE item = 'Dumplings' `;

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
  
  con.query("SELECT * FROM recipes", function (err, result, fields) {
    if (err) throw err;
    sqlResult = result;
  });
})

const port = process.env.PORT || 4000 || 27016 || 27015 || 27017;

app.listen(port, process.env.IP, function(){
  console.log(`Server is running on port ${port}`);
});