//app.js

var express = require('express'); // Chay web
var app = express();
var port = 8080;

app.set('views', __dirname + '/views');// Dat duong dan file
app.use(express.static('public'));
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
function fetchAndRender(req, res, web, title, errMess) {
  client.query('SELECT * FROM films', async (err, result) => {
    if (!err) {
      let unverifiedFilms = "";
      let userUploads = "";
      let fetchData = result.rows;
      if(req.session.user) {
        const unverified = await client.query("SELECT * FROM films WHERE verified = 'false'");
        unverifiedFilms = unverified.rows;
        const userFilms = await client.query(
          'SELECT * FROM films WHERE author = $1',
          [req.session.user.name] // Use req instead of require
        );
        userUploads = userFilms.rows;
      }
      res.render(web, {
        title: title,
        url: req.originalUrl, // Use req instead of require
        dbData: fetchData,
        user_name: req.session.user ? req.session.user.name : "",
        user_favourite: req.session.user ? req.session.user.favourite : "",
        unfilter: unfilter,
        unverifiedFilms: req.session.user ? unverifiedFilms : "",
        userUploads: req.session.user ? userUploads : "",
        errorMessage: errMess ? errMess : ""
      });
    } else {
      console.log(err.message);
    }
  });
}
/*--------------------------------------render page--------------------------------------- */
app.get('/', function (req, res) {
  fetchAndRender(req, res, 'index.ejs', 'Trang chủ - Con hub');
});
app.get('/search/*', function (req, res) {
  fetchAndRender(req, res, 'search.ejs', 'Tìm kiếm - Con hub');
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
app.get('/submit', function (req, res) {
  fetchAndRender(req, res, 'filmSubmit.ejs', 'Đăng tải phim - Con hub');
});
app.get("/register", (req, res) => {
  fetchAndRender(req, res, 'register.ejs', 'Đăng kí - Con hub');
});
app.get("/login", (req, res) => {
  fetchAndRender(req, res, 'login.ejs', 'Đăng nhập - Con hub');
});
app.get("/favourite", (req, res) => {
  fetchAndRender(req, res, 'favourite.ejs', 'Phim yêu thích - Con hub');
});
app.get("/favourite/*", (req, res) => {
  fetchAndRender(req, res, 'favourite.ejs', 'Phim yêu thích - Con hub');
});
app.get("/test", (req, res) => {
  fetchAndRender(req, res, 'test.ejs', 'test - Con hub');
});
app.get('/form', (req, res) => {
  if (!req.session.user) {
      // Redirect to login if the user is not logged in
      return res.send(`
          <script>
              alert('You must be logged in to upload a film.');
              window.location.href = '/login';
          </script>
      `);
  }

  // Render the upload film page
  fetchAndRender(req, res, 'form.ejs', 'Đăng tải phim - Con hub');
});
/*------------------------------------------------------------------------------------------------------*/
app.listen(port); // Run web on port
console.log("web is running");

//body-parser
app.use(express.urlencoded({ extended: true })); // Use web URL

app.use(bodyParser.json()); // Su dung dinh dang JSON

//Filter special character
function filter(data) {
  let filted = data;
  filted = filted.replace(/'/g, "\\'"); // Escape single quotes
  filted = filted.replace(/"/g, '\\"'); // Escape double quotes
  filted = filted.replace(/`/g, '\\`'); // Escape backticks
  filted = filted.replace(/\r\n/g, '<br>'); // Replace newlines with <br>
  filted = filted.replace(/\n/g, '<br>'); // Handle other newline cases
  return filted;
}
// unfilter data
function unfilter(data) {
  let unfilted = data;
  unfilted = unfilted.replace(/\\'/g, "'"); // Unescape single quotes
  unfilted = unfilted.replace(/\\"/g, '"'); // Unescape double quotes
  unfilted = unfilted.replace(/\\`/g, '`'); // Unescape backticks
  unfilted = unfilted.replace(/<br>/g, '\n'); // Replace <br> with newlines
  return unfilted;
}
//Add film to database
function addData(name, description, author, url, source, verified, download, time) {
  console.log(name, "\n", `"${description}"`, "\n", author, "\n", url, "\n", source, "\n", verified, "\n", download, "\n", time);
  client.query(`INSERT INTO films (name, description, author, img, src, verified, download, time)
  VALUES ($$${name}$$,
      $$${description}$$,
      $$${author}$$,
      $$${url}$$,
      $$${source}$$,
      $$${verified}$$,
      $$${download}$$,
      $$${time}$$);`, (err, res) => {
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
        return fetchAndRender(req, res, 'register.ejs', 'Đăng kí - Con hub', "Tên người dùng đã bị đăng kí");
      }
      const hashedPassword = await password
      // Add user to database
      await client.query(
          "INSERT INTO users (name, password) VALUES ($1, $2)",
          [name, hashedPassword]
      );
      fetchAndRender(req, res, 'register.ejs', 'Đăng kí - Con hub', "Đăng kí thành công!"); // If successfully, return notification
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
          favourite: user.favourite,
          mod: user.mod
      };

      return res.redirect("/home"); // Login success - go to home page
      }
      // Wrong name or pass - Send error message
      fetchAndRender(req, res, 'login.ejs', 'Đăng nhập - Con hub', "Sai tên hoặc mật khẩu");
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
// Express example
app.get('/logout', (req, res) => {
  // Destroy session or clear authentication cookies
  req.session.destroy((err) => {
      if (err) {
          return res.status(500).send("Failed to logout.");
      }
      res.redirect('/'); // Redirect the user to the homepage or login page
  });
});


// upload file
const fs = require('fs');
const { google }= require('googleapis');
const multer = require('multer');

const apikeys = require('./drive-api.json');
const SCOPE = ['https://www.googleapis.com/auth/drive'];
const upload = multer({ dest: 'uploads/' }); // Files will be stored in the 'uploads/' directory

// Configure multer to handle multiple fields
const uploadFields = upload.fields([
  { name: 'url', maxCount: 1 },    // Handle the 'url' field (thumbnail)
  { name: 'source', maxCount: 1 } // Handle the 'source' field (video)
]);

// A Function that can provide access to google drive api
async function authorize(){
  const jwtClient = new google.auth.JWT(
      apikeys.client_email,
      null,
      apikeys.private_key,
      SCOPE
  );
  await jwtClient.authorize();
  return jwtClient;
}
// Function to upload a file to Google Drive
async function uploadFile(authClient, fileName, filePath, mimeType) {
  return new Promise((resolve, reject) => {
      const drive = google.drive({ version: 'v3', auth: authClient });
      const fileMetaData = {
          name: fileName,
          parents: ['1MObE-5Qs6DXk8ZWIqlHGHl93YYGqf4Ox'] // Replace with your Google Drive folder ID
      };
      const media = {
          mimeType: mimeType,
          body: fs.createReadStream(filePath)
      };
      drive.files.create(
          {
              resource: fileMetaData,
              media: media,
              fields: 'id, webViewLink, webContentLink' // Request file ID and links
          },
          (error, file) => {
              if (error) {
                  return reject(error);
              }
              resolve(file);
          }
      );
  });
}

// Route to handle file upload and upload to Google Drive
app.post('/submit', uploadFields, async (req, res) => {
  try {
      const { name, description, author, time } = req.body;

      if (!time) {
        console.log('Upload Time:', time); // Log the upload time
        throw new Error('Upload time is missing');
    }
    

      // Extract file details for the thumbnail
      const img_file = req.files['url'][0];
      const img_fileName = img_file.originalname;
      const img_filePath = img_file.path;
      const img_mimeType = img_file.mimetype;

      // Extract file details for the video
      const film_file = req.files['source'][0];
      const film_fileName = film_file.originalname;
      const film_filePath = film_file.path;
      const film_mimeType = film_file.mimetype;

      // Authorize Google Drive API
      const authClient = await authorize();

      // Upload the thumbnail to Google Drive
      const imgResponse = await uploadFile(authClient, img_fileName, img_filePath, img_mimeType);

      // Upload the video to Google Drive
      const filmResponse = await uploadFile(authClient, film_fileName, film_filePath, film_mimeType);

      // Delete the files from the server after uploading to Google Drive
      fs.unlinkSync(img_filePath);
      fs.unlinkSync(film_filePath);

      // Generate embed links
      const img_link = imgResponse.data.webContentLink.replace('/uc?', '/thumbnail?'); // Link to view the thumbnail
      const film_embedLink = filmResponse.data.webViewLink.replace('/view?usp=drivesdk', '/preview'); // Embed link for the video
      const film_downloadLink = filmResponse.data.webContentLink; // Link to download the video
      // Add the film data to the database
      addData(filter(name), filter(description), filter(author), img_link, film_embedLink, false, film_downloadLink, time);

      // Redirect back to the previous page
      res.redirect(req.get('referer'));
  } catch (error) {
      console.error('Error uploading file:', error);

      // Send an error response
      res.status(500).send({
          message: 'Error uploading file',
          error: error.message
      });
  }
});
//test
app.get('/user-uploads', async (req, res) => {
  if (!req.session.user) {
      // Send an alert and redirect to the login page
      return res.send(`
          <script>
              alert('You must be logged in to view this page.');
              window.location.href = '/login';
          </script>
      `);
  }

  try {
      fetchAndRender(req, res, 'userUploads.ejs', 'Your Uploaded Films - Con hub');
  } catch (err) {
      console.error('Error fetching user uploads:', err);
      res.status(500).send('Error fetching user uploads');
  }
});
//delete film
app.post('/delete-film', async (req, res) => {
  const { filmId, reason } = req.body;

  try {
      // Update the film status to "Deleted" and set the reason
      await client.query(
          'UPDATE films SET verified = $1, note = $2 WHERE id = $3',
          ['deleted', filter(reason), filmId]
      );

      // Redirect back to the previous page
      res.redirect(req.get('referer'));
  } catch (err) {
      console.error('Error deleting film:', err);
      res.status(500).send('Error deleting film');
  }
});
//verify film
app.get('/admin/verify-films', async (req, res) => {
  if (!req.session.user || req.session.user.mod !== true) {
      return res.send(`
          <script>
              alert('You must be an admin to access this page.');
              window.location.href = '/login';
          </script>
      `);
  }

  try {
      fetchAndRender(req, res, 'verifyFilms.ejs', 'Admin - Verify Films');
  } catch (err) {
      console.error('Error fetching films:', err);
      res.status(500).send('Error fetching films');
  }
});
//verify film	
app.post('/verify-film', async (req, res) => {
  const { filmId } = req.body;

  if (!req.session.user || req.session.user.mod !== true) {
      return res.status(403).send('You are not authorized to verify films.');
  }

  try {
      // Update the film's status to "verified"
      await client.query("UPDATE films SET verified = 'true' WHERE id = $1", [filmId]);

      // Redirect back to the admin verification page
      res.redirect('/admin/verify-films');
  } catch (err) {
      console.error('Error verifying film:', err);
      res.status(500).send('Error verifying film');
  }
});