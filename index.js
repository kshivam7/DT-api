const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());

var MongoClient = require('mongodb').MongoClient;
const uri ="mongodb url";

let db_d; 
MongoClient.connect(uri, function(err, db) {
  if (err) throw err;
  db_d = db.db("mydb");
  console.log("DB Connected");
});


const ObjectId = require('mongodb').ObjectId; 

//Get user and Get page 
app.get('/api/v3/app/events',(req,res)=>{
	try{
		//1.
		// page = 1
		// limit = 5
		// skip = (page-1)*limit = 0

		//2.
		//page = 2
		// limit = 5
		// skip = (page-1)*limit = 5

			let limit = parseInt(req.query.limit);
			let skip= (parseInt(req.query.page)-1)*limit;
			let query={};
			if(req.query.id){
				query._id= new ObjectId(req.query.id);
				db_d.collection("users").findOne(query).then((data)=>{
					console.log(data);
					res.send(data);
				})
			}
			else if(req.query.type){
				 console.log(query);
  			 db_d.collection("users").find(query).skip(skip).limit(limit).toArray((err,data)=>{
  			 	console.log(data);
  			 	res.send(data);
  			 })

		// console.log(db_d);
 
}
}catch(err){
	console.log(err.message);
}
})

//Post
app.post('/api/v3/app', (req,res)=>{
	try{
   let myobj = req.body;
  db_d.collection("users").insertOne(myobj, function(err, res) {
    if (err) throw err;
    // db.close();
  });
  res.send(req.body)
}catch(err){
		console.log(err.message);
	}
	});

//Put
app.put('/api/v3/app', (req,res)=>{
	try{
   let myobj = req.body;
  db_d.collection("users").insertOne(myobj, function(err, re) {
  	if(err) throw err;
  	res.send(re)
  });
}catch(err){
		console.log(err.message);
	}
	});


//Delete
app.delete('/api/v3/app/events',(req,res)=>{
	try{
		MongoClient.connect(uri,(err,db)=>{
			if(err) throw err;
			const d_id = new ObjectId(req.query.id);
			db_d.collection("users").deleteOne({"_id":d_id}, function(err, result) {
    	if (err) throw err;
    	console.log(result);
   	 	res.send(result);
    	db.close();
  });
});
}catch(err){
	console.log(err.message);
}
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
