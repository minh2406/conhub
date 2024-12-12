//app.js

var express = require('express'); // Chay web
var app = express();
var port = 8080;

app.set('views', __dirname + '/views');// Dat duong dan file
app.use(express.static(__dirname + '/views'));// Dat duong dan file
var bodyParser = require('body-parser');
//dotenv
require('dotenv').config(); // Read file .env
//bcryptjs
const bcrypt = require('bcryptjs'); // Ma hoa password
//session
const session = require('express-session'); // Local storage - bo nho tam thoi
app.use(session({
  secret: process.env.SESSION_SECRET,  // A secret key to sign the session ID cookie (should be stored securely in .env)
  resave: false,                      // Don't save session if it was not modified
  saveUninitialized: true,            // Create a session even if the user is not logged in
  cookie: { secure: false }           // Set `secure: true` if using HTTPS
}));
//postgreSQL
const User = process.env.PG_User; // Username sql
const Password = process.env.PG_Password; // Password sql
const Database = process.env.PG_Database; // Name database
const Host = process.env.PG_Host; // Host sql
const Port = process.env.PG_Port; // Port sql
const { Client } = require('pg'); // Call Postgresql module
const client = new Client({ // Create connection
  host: Host,
  user: User,
  port: Port,
  password: Password,
  database: Database,
  ssl: true
})
// Update session theo database
app.use(async (req, res, next) => { 
  if (req.session.user) {
    try {
      // Fetch the current user's data
      const result = await client.query('SELECT * FROM users WHERE id = $1', [req.session.user.id]); 
      // Update session
      const user = result.rows[0];
      req.session.user.name = user.name;
      req.session.user.favourite = user.favourite;
    } catch (err) {
      console.error(err);
      // Handle error
      res.status(500).send("Error updating session");
      return;
    }
  }
  // Call next middleware or route handler
  next(); // khong biet de lam gi that nhung co ve no can thiet
});
client.connect(); // Connect to database
// Get database infor and render web
function fetchAndRender(require, result, web, title) 
{
  client.query('Select * from films', (err, res) => {
    if (!err) {
      let fetchData = res.rows;
        result.render(web, {
        title: title,
        url: require.originalUrl,
        dbData: fetchData,
        user_name: require.session.user ? require.session.user.name : "",
        user_favourite: require.session.user ? require.session.user.favourite : "",
        errorMessage: ""
      });
    }
    else {
      console.log(err.message);
    }
  });
}
/*--------------------------------------render page--------------------------------------- */
app.get('/', function (req, res) {
  fetchAndRender(req, res, 'index.ejs', 'Trang chủ - Con hub');
});
app.get('/page/*', function (req, res) {
  fetchAndRender(req, res, 'index.ejs', 'Trang chủ - Con hub');
});
app.get('/home', function (req, res) {
  fetchAndRender(req, res, 'index.ejs', 'Trang chủ - Con hub');
});
app.get('/home/*', function (req, res) {
  fetchAndRender(req, res, 'index.ejs', 'Trang chủ - Con hub');
});
app.get('/watch/*', function (req, res) {
  fetchAndRender(req, res, 'viewFilm.ejs', 'Xem phim - Con hub');
});
app.get('/year/(*)', function (req, res) {
  fetchAndRender(req, res, 'yearFilter.ejs', 'Năm phát hành - Con hub'); 
});
app.get('/year/(*)/*', function (req, res) {
  fetchAndRender(req, res, 'yearFilter.ejs', 'Năm phát hành - Con hub'); 
});
app.get('/form', function (req, res) {
  fetchAndRender(req, res, 'form.ejs', 'Đăng tải phim - Con hub');
});
app.get('/submit', function (req, res) {
  fetchAndRender(req, res, 'filmSubmit.ejs', 'Đăng tải phim - Con hub');
});
app.get("/register", (req, res) => {
  fetchAndRender(req, res, 'register.ejs', 'Trang chủ - Con hub');
});
app.get("/login", (req, res) => {
  fetchAndRender(req, res, 'login.ejs', 'Trang chủ - Con hub');
});
/*------------------------------------------------------------------------------------------------------*/
app.listen(port); // Run web on port
console.log("web is running");

//body-parser
app.use(express.urlencoded({ extended: true })); // Use web URL

app.use(bodyParser.json()); // Su dung dinh dang JSON

//Post film
app.post('/submit', function (req, res) {
  const { name, description, author, year, url, source } = req.body;
  addData(filter(name), filter(description), filter(author), filter(year), filter(url), filter(source));
  res.redirect('/submit');
})
//Filter special character
function filter(data) {
  var filted = data;
  filted = filted.replace(/"/g, '\\"');
  filted = filted.replace(/\r\n/g, '<br>');
  return filted;
}
//Add film to database
function addData(name, description, author, year, url, source) {
  console.log(name, "\n", `"${description}"`, "\n", author, "\n", year, "\n", url, "\n", source);
  client.query(`INSERT INTO films (name, description, author, year, img, src)
  VALUES ($$${name}$$,
      $$${description}$$,
      $$${author}$$,
      ${year},
      $$${url}$$,
      $$${source}$$);`, (err, res) => {
    if (!err) {
      console.log(res.rows);
    }
    else {
      console.log(err.message);
    }
    console.log("a");
  });
}
//Register
app.post("/register", async (req, res) => {
  const { name, password } = req.body;
  
  try {
    const result = await client.query("SELECT * FROM users WHERE name = $1", [name]);

      if (result.rows.length > 0) {
        // If user already exists, return an error message
        return res.render("register.ejs", { errorMessage: "The username is already taken" });
      }
      const hashedPassword = await password/*bcrypt.hash(password, 10)*/; //Phan /*  */ de ma hoa mat khau - da cancel
      // Add user to database
      await client.query(
          "INSERT INTO users (name, password) VALUES ($1, $2)",
          [name, hashedPassword]
      );
      res.render("register.ejs", { errorMessage: "User Registered Successfully!" }); // If successfully, return notification
  } catch (err) {
    //Handling error
      console.error(err);
      res.status(500).send("Error registering user");
  }
});
//login
app.post("/login", async (req, res) => {
  const { name, password } = req.body;

  try {
      const result = await client.query("SELECT * FROM users WHERE name = $1", [name]);
      const user = result.rows[0];
      // Check user password and update user information to web
      if (user && (password == user.password/*await bcrypt.compare(password, user.password)*/)) { // Phan /* */ la ma hoa nhung da cancel
        req.session.user = {
          id: user.id,
          name: user.name,
          favourite: user.favourite
      };

      return res.redirect("/home"); // Login success - go to home page
      }
      // Wrong name or pass - Send error message
      res.render("login.ejs", { errorMessage: "Invalid name or password" });
  } catch (err) {
      // Handling error
      console.error(err);
      res.status(500).send("Server Error");
  }
});
// Add favourite film
app.post("/fav", async (req, res) => {
  const { name, password } = req.body;
  const {fav_film} = req.body;
  try {
    if(req.session.user)
    {
      const result = await client.query('SELECT * FROM users WHERE id = $1', [req.session.user.id]);
      let favourite = result.rows[0].favourite;
      favourite = favourite + "id=" + fav_film;
      await client.query(
          `UPDATE users
          SET favourite = '${favourite}'
          WHERE id = ${req.session.user.id}`
      );
    }
      res.redirect(req.get('referer'));
  } catch (err) {
      console.error(err);
      res.status(500).send("Error");
  }
});
// Remove favourite film
app.post("/unfav", async (req, res) => {
  const { fav_film } = req.body;
  try {
    if (req.session.user) {
      // Fetch the user's current 'favourite' field from the database
      const result = await client.query('SELECT * FROM users WHERE id = $1', [req.session.user.id]);
      let favourite = result.rows[0].favourite;

      if (favourite.includes(`id=${fav_film}`)) {
        // Remove the `fav_film` from the 'favourite' string
        favourite = favourite.replace(`id=${fav_film}`, '');

        // Clean up any extra commas or redundant separators
        favourite = favourite.replace(/,,/g, ',');  // Remove double commas
        favourite = favourite.replace(/^,|,$/g, '');  // Remove leading/trailing commas

        // Update the user's 'favourite' in the database
        await client.query(
          `UPDATE users
          SET favourite = $1
          WHERE id = $2`,
          [favourite, req.session.user.id]
        );
      }
    }
    res.redirect(req.get('referer')); // Redirect back to the previous page
  } catch (err) {
    // Handling error
    console.error(err);
    res.status(500).send("Error removing favorite film");
  }
});