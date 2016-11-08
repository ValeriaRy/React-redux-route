var mongodb = require('mongodb');

function insertUser(user, callback) {
    console.log(user);
	var db = new mongodb.Db('test', new mongodb.Server('localhost', 27017, {}), {safe:false});
		db.open(function(err, db) {
		var collection = db.collection("userp");
		collection.insert({
			login: user.login, 
			email: user.email,
			password: user.password
		}, function(err, result) {
		    console.log(result);
			callback(user.login);
		});
		db.close();
	});
}

var getUser = function(user, callback) {
	var db = new mongodb.Db('test', new mongodb.Server('localhost', 27017, {}), {safe:false});
	db.open(function(err, db) {
		var collection = db.collection("userp");
		collection.find({"login": user.login}).toArray(function(err, result){
		    if (result.length) {
		        if (result[0].password === user.password) {
		            callback(user.login);    
		        } else {
		            callback("password");
		        }
		    } else {
		        callback("login");    
		    }
		});
		db.close();
	});
};

exports.insertUser = insertUser;
exports.getUser = getUser;