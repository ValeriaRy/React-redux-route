var express = require('express');
var app = express();
var cors = require('cors');
var articlesTable = require("./server/articlesTable");

app.use(express.json());
app.use(express.urlencoded());
app.use(express.multipart());
app.use(cors());


app.post("/article", function(req, res) {
    articlesTable.insertArticle(req.body, function(insertedArticle) {
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
    console.log(req.params.id);
    articlesTable.getArticle(req.params.id, function(list) {
        res.send(list);
    });
});

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){});