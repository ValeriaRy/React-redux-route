var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer({ dest: 'server/img/' });

var articlesTable = require("./server/articlesTable");
var usersTable = require("./server/usersTable");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.post("/article", upload.single('img'), function(req, res, next) {
    articlesTable.insertArticle(req.body, req.file.path, function(insertedArticle) {
        res.send(insertedArticle);
    });
});

app.delete('/article/:id', function (req, res) {
    articlesTable.deleteArticle(req.params.id, function(message) {
        res.send(message);
    });
});

app.get("/article", function(req, res) {
    articlesTable.getFromArticleTable(function(list) {
        res.send(list);
    });
});

app.get("/article/:id", function(req, res) {
    articlesTable.getArticle(req.params.id, function(list) {
        res.send(list);
    });
});

app.post("/user/login", function(req, res) {
    usersTable.getUser(req.body, function(answer) {
        res.send(answer);
    });
});

app.post("/user/registration", function(req, res) {
    usersTable.insertUser(req.body, function(loginUser) {
        res.send(loginUser);
    });
});

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){});