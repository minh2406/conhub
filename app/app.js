//app.js
/*
const http = require('http')
const port = 8080
//asdasdsa
var fs = require('fs');
//express
app.use(express.static(__dirname + '/public'));

fs.readFile('./index.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(port);
});
*/
var express = require('express');
var app = express();
var port = 8080;

app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/views'));
/*
//mysql
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'minhphudeptrai',
  database: 'mydb'
});
connection.query(
  'SELECT * FROM films',
  (err,results,fields) => {

  }
);
*/
//dotenv
require('dotenv').config();
//postgreSQL
const User = process.env.PG_User;
const Password = process.env.PG_Password;
const Database =  process.env.PG_Database;
const Host = process.env.PG_Host;
const Port = process.env.PG_Port;
const {Client} = require('pg');
const client = new Client({
  host: Host,
  user: User,
  port: Port,
  password: Password,
  database: Database,
  ssl: true
})

client.connect();
client.query('Select * from films', (err, res)=>{
    if(!err){
      let fetchData = res.rows;
      app.get('/', function(req, res){
        res.render('index.ejs', {
              title: 'Trang chủ - Con hub',
              dbData: fetchData,
        });
      });
      console.log(fetchData);
      app.get('/home', function(req, res){
        res.render('index.ejs', {
              title: 'Trang chủ - Con hub',
              dbData: fetchData,
        });
      });
      app.get('/watch/*', function(req, res){
        res.render('viewFilm.ejs', {
          title: 'Xem phim - Con hub',
          url: req.originalUrl,
          dbData: fetchData,
        });
      });
      app.get('/year/(*)', function(req, res){
        res.render('yearFilter.ejs', {
          title: 'Năm phát hành - Con hub',
          url: req.originalUrl,
          dbData: fetchData,
        });
      });
      
      app.listen(port);
      console.log("web is running");
    }
    else {
      console.log(err.message);
    }
    client.end;
});