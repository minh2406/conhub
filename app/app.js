//app.js

var express = require('express');
var app = express();
var port = 8080;

app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/views'));
var bodyParser = require('body-parser');
//dotenv
require('dotenv').config();
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