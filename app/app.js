//app.js

var express = require('express');
var app = express();
var port = 8080;

app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/views'));
var bodyParser = require('body-parser');
//dotenv
require('dotenv').config();
//bcryptjs
const bcrypt = require('bcryptjs');
//session
const session = require('express-session');
app.use(session({
  secret: process.env.SESSION_SECRET,  // A secret key to sign the session ID cookie (should be stored securely in .env)
  resave: false,                      // Don't save session if it was not modified
  saveUninitialized: true,            // Create a session even if the user is not logged in
  cookie: { secure: false }           // Set `secure: true` if using HTTPS
}));
//postgreSQL
const User = process.env.PG_User;
const Password = process.env.PG_Password;
const Database = process.env.PG_Database;
const Host = process.env.PG_Host;
const Port = process.env.PG_Port;
const { Client } = require('pg');
const client = new Client({
  host: Host,
  user: User,
  port: Port,
  password: Password,
  database: Database,
  ssl: true
})
app.use(async (req, res, next) => {
  if (req.session.user) {
    try {
      // Fetch the current user's data from the database (you can also fetch other data like 'favourite' if needed)
      const result = await client.query('SELECT * FROM users WHERE id = $1', [req.session.user.id]);

      // Update session with the latest user data
      const user = result.rows[0];
      
      // Update session user information (you can add more session properties if needed)
      req.session.user.name = user.name;
      req.session.user.favourite = user.favourite;

      // If the user has other session data (e.g., profile image, etc.), you can update them here.
      // For example:
      // req.session.user.profileImage = user.profile_image;

    } catch (err) {
      console.error(err);
      // Handle error (optional: you can send an error message or redirect to an error page)
      res.status(500).send("Error updating session");
      return;
    }
  }
  
  // Call next middleware or route handler
  next();
});
client.connect();
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
app.listen(port);
console.log("web is running");

//body-parser
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.post('/submit', function (req, res) {
  const { name, description, author, year, url, source } = req.body;
  addData(filter(name), filter(description), filter(author), filter(year), filter(url), filter(source));
  res.redirect('/submit');
})
function filter(data) {
  var filted = data;
  filted = filted.replace(/"/g, '\\"');
  filted = filted.replace(/\r\n/g, '<br>');
  return filted;
}
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
    //client.end;
    console.log("a");
  });
}
//register
app.get("/register", (req, res) => {
  fetchAndRender(req, res, 'register.ejs', 'Trang chủ - Con hub');
});

app.post("/register", async (req, res) => {
  const { name, password } = req.body;
  
  try {
    const result = await client.query("SELECT * FROM users WHERE name = $1", [name]);

      // If user already exists, return an error message
      if (result.rows.length > 0) {
        // If login fails, send an error message back to the EJS template
        res.render("register.ejs", { errorMessage: "The username is already taken" });
      }
      const hashedPassword = await password/*bcrypt.hash(password, 10)*/;
      await client.query(
          "INSERT INTO users (name, password) VALUES ($1, $2)",
          [name, hashedPassword]
      );
      res.render("register.ejs", { errorMessage: "User Registered Successfully!" });
  } catch (err) {
      console.error(err);
      res.status(500).send("Error registering user");
  }
});
//login
app.get("/login", (req, res) => {
  fetchAndRender(req, res, 'login.ejs', 'Trang chủ - Con hub');
});

app.post("/login", async (req, res) => {
  const { name, password } = req.body;

  try {
      const result = await client.query("SELECT * FROM users WHERE name = $1", [name]);
      const user = result.rows[0];

      if (user && (password == user.password/*await bcrypt.compare(password, user.password)*/)) {
        req.session.user = {
          id: user.id,
          name: user.name,
          favourite: user.favourite
      };

      return res.redirect("/home");
      }
      res.render("login.ejs", { errorMessage: "Invalid name or password" });
  } catch (err) {
      console.error(err);
      res.status(500).send("Server Error");
  }
});
//add favourite film
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