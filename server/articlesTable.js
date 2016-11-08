var mongodb = require('mongodb');
var ObjectId = require("mongodb").ObjectID;

function insertArticle(article, imgPath, callback) {
	console.log(article.author);
	if (article) {
		var db = new mongodb.Db('test', new mongodb.Server('localhost', 27017, {}), {safe:false});
			db.open(function(err, db) {
			var collection = db.collection("poi");
			collection.insert({
				title: article.title, 
				text: article.text,
				imgPath: imgPath,
				author: article.author
			}, function(err, result) {
				article._id = result.insertedIds;
				callback(article);
			});
			db.close();
		});
	}
}

function deleteArticle(id, result) {
	var db = new mongodb.Db('test', new mongodb.Server('localhost', 27017, {}), {safe:false});
	db.open(function(err, db) {
		var collection = db.collection("poi");
		collection.remove({"_id": ObjectId(id)});
		db.close();
	});
	result("Article delete");
}

var getFromArticleTable = function(list) {
	var db = new mongodb.Db('test', new mongodb.Server('localhost', 27017, {}), {safe:false});
	db.open(function(err, db) {
		var collection = db.collection("poi");
		collection.find().sort({"_id":-1}).toArray(function(err, articles){
			//cut text of article up to 100 symbols
			for (var i=0; i<articles.length; i++) {
				articles[i].text = articles[i].text.substring(0, 100) + "...";	
			}
		    list(articles);
		});
		db.close();
	});
};

var getArticle = function(id, callback) {
	var db = new mongodb.Db('test', new mongodb.Server('localhost', 27017, {}), {safe:false});
	db.open(function(err, db) {
		var collection = db.collection("poi");
		collection.find({"_id": ObjectId(id)}).toArray(function(err, article){
		    callback(article);
		});
		db.close();
	});
};

exports.insertArticle = insertArticle;
exports.deleteArticle = deleteArticle;
exports.getFromArticleTable = getFromArticleTable;
exports.getArticle = getArticle;