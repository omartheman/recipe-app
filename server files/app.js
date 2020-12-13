const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require("cors");
const session = require('express-session');
const serverRoute = '/recipeapp/recipeapp-server/';
const multer = require('multer');
const fs = require('file-system');

function spacesToUnderscores(item){item=item.replace(/ /g,"_"); return item;}
function replaceSqlCharacters(str){
  const newStr = str.replace(/"/g, '_').replace(/'/g, '_').replace(/`/g, '_').replace(/;/g, '_').replace(/\*/g, '_').replace(/#/g, '_').replace(/\$/g, '_');
  return newStr;
}

const mode =
"developmentOmar";
/*
"productionBritt";
*/

let corsOrigin;
let connection;
let imageUploadPath;
if (mode === 'productionBritt') {
  connection = mysql.createConnection({
    host: 'localhost', 
    user: 'britxbtx_omar2',
    password: '3yeDroplets!',
    database: 'britxbtx_recipe_app_test'
  });
  corsOrigin = 'https://brittanyjewellneal.com/recipeapp';
  imageUploadPath = '/home/britxbtx/public_html/uploaded_files';
} else if (mode === 'developmentOmar') {
  connection = mysql.createConnection({
    host: 'localhost', 
    user: 'root',
    password: '3yeDroplets!',
    database: 'recipe_app_test'
  });
  corsOrigin = 'http://localhost:3000';
  imageUploadPath = 'C:/Users/HP EliteBook 8470p/Documents/Coding/recipe-app/uploaded_files';
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
  }
}));

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, imageUploadPath)
  },
  filename: function(req, file, cb) {
    cb(null, `${file.fieldname}_dateVal_${Date.now()}_${spacesToUnderscores(file.originalname)}`)
  }
})
const imageUpload = multer({storage: storage})

app.post(`${serverRoute}get-images`, (req, res) => {
  console.log(req.body);
  const item = spacesToUnderscores(req.body.item);
  console.log('spacesToUnderscores item: ', item)
  const sql = `
    SELECT * FROM recipe${req.body.id}_${item}_images;
  `;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log('Result GET images: ', result);
    res.send(result);
  })
})

app.post(`${serverRoute}image-upload`, imageUpload.array("imageFile"),
  (req, res) => {
    //Create a new table with all image names. 
    const sqlGetId = `
    SELECT * from recipes ORDER BY id DESC;
    `;
    connection.query(sqlGetId, (err, result) => {
      if (err) throw err;
      console.log(Number(result[0].id))
      const id = Number(result[0].id);
      let item = result[0].item;
      console.log('item name', item)
      item = replaceSqlCharacters(spacesToUnderscores(item).toLowerCase());
      const sqlCreateImagesTable = `
        CREATE TABLE recipe${id}_${item}_images (
        id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        imageName varchar(255) NOT NULL
      );`;
      connection.query(sqlCreateImagesTable, (err, result) => {
        if (err) throw err; 
        console.log(result);
      });

      //Insert image names into image table. 
      console.log('req.files',req.files);
      for (let i = 0; i < req.files.length; i++) {
        console.log('req.files[i].filename', req.files[i].filename);
  
        const sqlAddImgToImgTable = 
          `INSERT INTO recipe${id}_${item}_images (imageName) VALUES 
          ('${req.files[i].filename}');`;
        connection.query(sqlAddImgToImgTable, (err, result) => {
          if (err) throw err; 
        });
      }
    })
  }
)


app.post(`${serverRoute}getingredients`, (req, res) => {
  console.log(req.body);
  const item = spacesToUnderscores(req.body.item);
  console.log('spacesToUnderscores item: ', item)
  const sqlGetIngredients = `
    SELECT * FROM recipe${req.body.id}_${item}_ingredients;
  `;
  connection.query(sqlGetIngredients, (err, result) => {
    if (err) throw err;
    console.log('Result GET ingredients: ', result);
    res.send(result);
  })
});

app.post(`${serverRoute}getrecipe`, (req, res) => {
  const sqlGetRecipe = `
    SELECT * FROM recipes WHERE id = '${req.body.id}';
  `;
  connection.query(sqlGetRecipe, (err, result) => {
    if (err) throw err; 
    console.log('Result GET recipe: ', result)
    res.send(result);
  })
});

app.get(`${serverRoute}myrecipes`, (req, res) => {
  console.log('myrecipes req.session.username', req.session.username)
  const sqlGetUserRecipes = `
    SELECT * FROM recipes WHERE user = '${req.session.username}' ORDER BY item;
  `;
  connection.query(sqlGetUserRecipes, function (err, result) {
    if (err) throw err;
    console.log('Result sql myrecipes:',result)
    res.send(result);
  });  
});

app.post(`${serverRoute}create-account`, (req, res) => {
  console.log('Create account post working.')
  res.send('Got a POST request to create account.');
  var sql = `INSERT INTO accounts (firstName, lastName, email, username, password)
    VALUES(
      '${req.body.firstName}', 
      '${req.body.lastName}',
      '${req.body.email}',
      '${req.body.username}',
      '${req.body.password}'
  )`;
  connection.query(sql, 
    function (err, result) {
    if (err) throw err;
    console.log(result);
    console.log(result.affectedRows + " record(s) updated");
  });
})

app.get(`${serverRoute}logout`, function(req, res){
  req.session.loggedin = false;
  res.send('Logged out.')
})

app.get(`${serverRoute}auth`, function(req, res){
  if (req.session.loggedin) {
    res.send(req.session.username);
  } 
  res.end();
}); 

app.post(`${serverRoute}auth`, function(req, res) {
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
        console.log('Logged in user from app.post: ', username);
        // res.redirect(`${serverRoute}/auth`);
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
  console.log(`Got a GET request to ${serverRoute};`);
  connection.query("SELECT * FROM recipes", function (err, result) {
    if (err) throw err;
  });
});

app.post(`${serverRoute}recipe-upload`, (req, res) => {
  //Check to see that user is logged in. 


  res.send('Got a POST request to upload recipe.');
  console.log('req.session.username: ',req.session.username)
  var sql = `INSERT INTO recipes (item, cook, img, description, user)
  VALUES (
    ?,
    ?,
    ?,
    ?,
    ?
  );`;
  connection.query(sql, [
    req.body.item,
    req.body.cook,
    req.body.img,
    req.body.description,
    req.session.username
  ], function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
  // *******CREATE TABLE FOR RECIPE INGREDIENTS********
  //Retrieve id from new recipe.
  const sqlGetId = `
  SELECT id FROM recipes WHERE item = ? AND cook = ? AND description = ? ORDER BY id DESC;`;
  connection.query(sqlGetId,[
    req.body.item,
    req.body.cook,
    req.body.description
  ], function (err, result) {
    if (err) throw err;
    const id = result[0].id;
    let item = req.body.item;
    item = replaceSqlCharacters(spacesToUnderscores(item).toLowerCase());
    console.log('modified item: ', item)
    const sqlCreateIngredientsTable = `
      CREATE TABLE recipe${id}_${item}_ingredients (
        id INT NOT NULL AUTO_INCREMENT,
        ingredient varchar(50) NOT NULL,
        amount varchar(50) NOT NULL,
        PRIMARY KEY (ID) 
    );`;
    connection.query(sqlCreateIngredientsTable, (err, result) => {
      if (err) throw err; 
    });

    //Create a loop to insert all ingredients and amounts. 
    for (let i = 0; i < req.body.ingredients.length; i++) {
      const sqlAddIngredient = 
        `INSERT INTO recipe${id}_${item}_ingredients (ingredient, amount) VALUES ('${req.body.ingredients[i]}', '${req.body.amounts[i]}');`;
      connection.query(sqlAddIngredient, (err, result) => {
        if (err) throw err; 
      });
    }
  });
});

app.post(`${serverRoute}`, function(req, res){
  res.send('Got a POST request to update recipes.');
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
  
});


// ===============================================================
// LINK REACT ROUTER AND EXPRESS APP
const path = require('path');
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../recipeapp')));

// Handles any requests that don't match the ones above
app.get('/recipeapp*', (req, res) =>{
    res.sendFile(path.join(__dirname + '/../recipeapp/index.html'));
});
// ===============================================================
const port = process.env.PORT || 4000 || 27016 || 27015 || 27017;
 

app.listen(port, process.env.IP, function(){
  console.log(`Server is running on port ${port}`);
});