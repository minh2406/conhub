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
//app.use(express.static('public'));
app.use(express.static(__dirname + '/views'));


app.get('/', function(req, res){
  res.render('index.ejs', {
        title: 'My Site',
    nav: ['Home','About','Contact'] 
  });
});

app.get('/home', function(req, res){
  res.render('index.ejs', {
        title: 'My Site',
    nav: ['Home','About','Contact'] 
  });
});

app.get('/watch', function(req, res){
  res.render('viewFilm.ejs', {
    title: 'About',
     nav: ['Home','About','Contact']
  });
});

app.get('/year', function(req, res){
  res.render('yearFilter.ejs', {
    title: 'Contact',
     nav: ['Home','About','Contact']
  });
});

app.listen(port);
console.log("web is running");
//mysql
/*const mysql = require('mysql2');
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
);*/
