var http = require('http');
var path = require('path');
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.set('views',Path2D.join(__dirname,'views'));
app.set("view wngine",'ejs');

app.get('/', function (req, res){
    res.render("index");
});

app.get('/about', function(req,res){
    res.send("<h1>about page</h1>");
});

http.createserver(app).listen(port, function(){

});