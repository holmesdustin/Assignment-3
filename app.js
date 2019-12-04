var http = require('http');
var path = require('path');
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var port = process.env.PORT || 3000;


app.set('views',path.join(__dirname,'views'));
app.set("view engine",'ejs');
app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req, res) {
    var request = require('request');
    request("https://xkcd.com/info.0.json", function(error, response, body) {
        if (!error && response.statusCode === 200) {
            var object = JSON.parse(body);
            res.render("index", { img_url: object.img, title: object.title, year: object.year });
        }
    });
});

app.get('/comic', function(req, res) {
    var ran_num = Math.floor(Math.random() * 1000) + 1;
    getComic(ran_num, res, "comic");
});
app.get('random', function(req, res) {
    var ran_num = Math.floor(Math.random() * 1000) + 1;
    getComic(ran_num, res, "random");
});


function getComic(ran_num, res, page){
    var request = require('request');
    request("https://xkcd.com/" + ran_num + "/info.0.json", function(error, response, body) {
        if (!error && response.statusCode === 200) {
            var object = JSON.parse(body);

            res.render(page, { img_url: object.img, title: object.title, year: object.year });
        }
    });
}

http.createServer(app).listen(port, function() {

});


















