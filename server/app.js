const mode =

"developmentOmar";
/*
"productionBritt";
*/

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require("cors");
const session = require('express-session');
const serverRoute = '/recipeapp/recipeapp-server/';
const multer = require('multer');

function spacesToUnderscores(item){item=item.replace(/ /g,"_"); return item;}
function replaceSqlCharacters(str){
  const newStr = str.replace(/"/g, '_').replace(/'/g, '_').replace(/`/g, '_').replace(/;/g, '_').replace(/\*/g, '_').replace(/#/g, '_').replace(/\$/g, '_').replace(/%/g, '_').replace(/\`/g, '_').replace(/@/g, '_').replace(/\?/g, '_').replace(/~/g, '_').replace(/\^/g, '_').replace(/&/g, '_').replace(/\(/g, '_').replace(/\)/g, '_').replace(/\./g, '_').replace(/\,/g, '_').replace(/\\/g, '_').replace(/\//g, '_').replace(/\+/g, '_').replace(/=/g, '_').replace(/\[/g, '_').replace(/\]/g, '_').replace(/{/g, '_').replace(/}/g, '_').replace(/!/g, '_').replace(/-/g, '_');
  return newStr;
}
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
  methods:['GET','POST', 'DELETE'],
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

let pastDayNum = 0;
let randomRecipe = 0;
app.get(`${serverRoute}get-featured-recipe`, (req, res) => {
  console.log(`Got a GET request to /get-featured-recipe;`);
  const todaysDayNum = Math.floor(Date.now()/1000/8640);
  console.log(Date.now())
  console.log('pastDayNum: ', pastDayNum)
  console.log('todaysDayNum: ', todaysDayNum)
  if (pastDayNum + 7 < todaysDayNum) {
    console.log('Entered IF to change featured recipe.')
    pastDayNum = todaysDayNum;
    connection.query("SELECT * FROM recipes", function (err, result) {
      if (err) throw err;
      randomRecipe = Math.floor(Math.random()*result.length);
    });
  }
  //get images for new recipe
  connection.query("SELECT * FROM recipes", function (err, result) {
    if (err) throw err;
    console.log(result);
    const id = result[randomRecipe].id;
    const item = replaceSqlCharacters(spacesToUnderscores(result[randomRecipe].item).toLowerCase());
    const itemTitle = result[randomRecipe].item;
    const description = result[randomRecipe].description;
    const sql = `
    SELECT * FROM recipe${id}_${item}_images
    ORDER BY RAND()
    LIMIT 1;`;
    connection.query(sql, (err, result) => {
      if (err) throw err;
      const imagePath = result[0].imageName;
      res.send([id, imagePath, itemTitle, description, pastDayNum, todaysDayNum]);
      console.log('Result GET images: ', result[0].imageName);
    })
  });
})

app.post(`${serverRoute}get-images-home-carousel`, (req, res) => {
  console.log(req.body);
  const item = replaceSqlCharacters(spacesToUnderscores(req.body.item).toLowerCase());
  const sql = `
    SELECT * FROM recipe${req.body.id}_${item}_images
    ORDER BY RAND()
    LIMIT 1;`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.send([req.body.id, result[0].imageName]);
    console.log('Result GET images: ', result[0].imageName);
  })
})

app.post(`${serverRoute}get-images`, (req, res) => {
  console.log(req.body);
  const item = replaceSqlCharacters(spacesToUnderscores(req.body.item).toLowerCase());
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

app.delete(`${serverRoute}to-try-delete`, (req, res) => {
  console.log('to try delete')
  console.log(req.body);
  const user = replaceSqlCharacters(spacesToUnderscores(req.body.loggedInUser));
  const sql = `
    DELETE FROM to_try_${user} WHERE id = ${req.body.id};
  `;
  connection.query(sql, (err, result) => {
    if (err) throw err; 
    res.send(result);
  });
});

app.post(`${serverRoute}to-try-get`, (req, res) => {
  console.log('to try get user:', req.body.loggedInUser)
  if (req.body.loggedInUser){
    const user = replaceSqlCharacters(spacesToUnderscores(req.body.loggedInUser));
    const sqlCreateToTryTable = `
      CREATE TABLE IF NOT EXISTS to_try_${user} (
        id int(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        item varchar(255),
        imageName varchar(255),
        link varchar(255)
    );`;
    connection.query(sqlCreateToTryTable, (err, result) => {
      if (err) throw err;
      const sql = `SELECT * FROM to_try_${user};`;
      connection.query(sql, (err, result) => {
        if (err) throw err; 
        console.log(result);
        res.send(result);
      });
    });
  };
});

app.post(`${serverRoute}to-try-upload`, imageUpload.array("imageFile"),
  (req, res) => {
    console.log('req.files: ', req.files);
    console.log('"To Try" request body', req.body);
    console.log('logged user /', req.body.loggedInUser,'/');
    const user = replaceSqlCharacters(spacesToUnderscores(req.body.loggedInUser));
    const sql = `
      CREATE TABLE IF NOT EXISTS to_try_${user} (
      id int(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
      item varchar(255),
      imageName varchar(255),
      link varchar(255)
    );`;
    console.log('modified username', user)
    connection.query(sql, (err, result) => {
      if (err) throw err; 
      if (req.files[0] && req.body.link) {
        console.log(result);
        const sqlSaveToTry = `
          INSERT INTO to_try_${user} (item, imageName, link)
          VALUES (?, ?, ?)
        `;
        connection.query(sqlSaveToTry, [
          req.body.item, 
          req.files[0].filename,
          req.body.link
        ]), (err, result) => {
          if (err) throw err; 
          console.log(result);
          res.send(result);
        }
      } else if (req.body.link) {
        console.log(result);
        const sqlSaveToTry = `
          INSERT INTO to_try_${user} (item, link)
          VALUES (?, ?)
        `;
        connection.query(sqlSaveToTry, [
          req.body.item, 
          req.body.link
        ]), (err, result) => {
          if (err) throw err; 
          console.log(result);
          res.send(result);
        };
      } else if (req.files[0]){
        console.log(result);
        const sqlSaveToTry = `
          INSERT INTO to_try_${user} (item, link)
          VALUES (?, ?)
        `;
        connection.query(sqlSaveToTry, [
          req.body.item, 
          req.body.link
        ]), (err, result) => {
          if (err) throw err; 
          console.log(result);
          res.send(result);
        };
      }
      res.send(result);
    });
});

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

app.post(`${serverRoute}get-instructions`, (req, res) => {
  console.log(req.body);
  const item = replaceSqlCharacters(spacesToUnderscores(req.body.item));
  console.log('spacesToUnderscores item: ', item)
  const sqlGetIngredients = `
    SELECT * FROM recipe${req.body.id}_${item}_instructions;
  `;
  connection.query(sqlGetIngredients, (err, result) => {
    if (err) throw err;
    console.log('Result GET ingredients: ', result);
    res.send(result);
  })
});

app.post(`${serverRoute}getingredients`, (req, res) => {
  console.log(req.body);
  const item = replaceSqlCharacters(spacesToUnderscores(req.body.item));
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

app.get(`${serverRoute}all-recipes`, (req, res) => {
  console.log('myrecipes req.session.username', req.session.username)
  const sqlGetUserRecipes = `
    SELECT * FROM recipes ORDER BY item;
  `;
  connection.query(sqlGetUserRecipes, function (err, result) {
    if (err) throw err;
    console.log('Result sql myrecipes:',result)
    res.send(result);
  });  
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

app.post(`${serverRoute}check-existing-usernames`, (req, res) => {
  console.log('Got a POST request to /check-existing-usernames.')
  console.log(req.body.username)
  const sql = `SELECT * FROM accounts WHERE username = ?;`;
  connection.query(sql, [req.body.username], (err, result) => {
    if (err) throw err;
    console.log('matched usernames: ',result);
    res.send(result);
  });
});

app.post(`${serverRoute}create-account`, (req, res) => {
  console.log('Create account post working.')
  res.send('Got a POST request to create account.');
  var sql = `INSERT INTO accounts (firstName, lastName, email, username, password)
    VALUES(
      ?,
      ?,
      ?,
      ?,
      ?
  );`;
  connection.query(sql, [
    req.body.firstName, 
    req.body.lastName,
    req.body.email,
    req.body.username,
    req.body.password
  ], function (err, result) {
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
    connection.query(`SELECT * FROM accounts WHERE username = ? AND password = ?;`, [username, password], function(error, results, fields) {
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
    res.send(result);
  });
});

app.post(`${serverRoute}recipe-upload`, (req, res) => {
  //Check to see that user is logged in. 
  res.send('Got a POST request to upload recipe.');
  console.log('req.session.username: ',req.session.username)
  var sql = `INSERT INTO recipes (item, cook, description, user)
  VALUES (
    ?,
    ?,
    ?,
    ?
  );`;
  connection.query(sql, [
    req.body.item,
    req.body.cook,
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
    // CREATE INGREDIENTS TABLE
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
    for (let i = 0; i < req.body.ingredients.length; i++) {
      const sqlAddIngredient = 
        `INSERT INTO recipe${id}_${item}_ingredients (ingredient, amount) VALUES (?, ?);`
      ;
      connection.query(sqlAddIngredient,[
        req.body.ingredients[i],
        req.body.amounts[i]
      ], (err, result) => {
        if (err) throw err; 
      });
    }
    // CREATE INSTRUCTIONS TABLE
    const sqlCreateInstructionsTable = `
      CREATE TABLE recipe${id}_${item}_instructions (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        instruction varchar(50) NOT NULL
    );`;
    connection.query(sqlCreateInstructionsTable, (err, result) => {
      if (err) throw err; 
    });
    for (let i = 0; i < req.body.instructions.length; i++) {
      const sqlAddInstruction = 
        `INSERT INTO recipe${id}_${item}_instructions (instruction) 
        VALUES (?);`;
      connection.query(sqlAddInstruction, [
        req.body.instructions[i]
      ], (err, result) => {
        if (err) throw err; 
      });
    }
  });
});

/*
app.post(`${serverRoute}`, function(req, res){
  res.send('Got a POST request to update recipes.');
  var sql = `UPDATE recipes SET 
    item = '${req.body.item}',
    cook = '${req.body.cook}',
    description = '${req.body.description}' 
    WHERE id = '2' `;
  connection.query(sql, 
    function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
});
*/


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