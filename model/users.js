var config = require("../dbconnection");
connection = config.init;
dbName = config.dbName;

module.exports.insert = function(obj,cb){
	connection( function(err,client){
		var db = client.db(dbName);
		db.collection("users").insert(obj, cb)
	});
}

module.exports.find=function(obj, cb){
	connection(function(err,client){
		var db = client.db('ngo');
		db.collection("users").insert(obj, cb);
	});
}
