var express = require('express');
var router = express.Router();
var mongo=require('mongodb');

var url='mongodb://127.0.0.1:27017/test';


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.post('/saveUser',function(req,res){
var item={
	first:req.body.first,
	last:req.body.last,
	email:req.body.email,
	number:req.body.number,
	pwd:req.body.pwd

};
mongo.connect(url,function(err,db){
	if(err){
		throw err;
	}
	else{
db.collection('users').insertOne(item,function(err,result){
if(err){
	throw err;
}
else{
	console.log("data inserted");
	db.close();
}
	});

	}
	
});
});

router.get('/getUsers',function(req,res){
	var resultArray=[];
	mongo.connect(url,function(err,db){
	if(err){
		throw err;
	}
	else{
var one=db.collection('users').find();
one.forEach(function(result,err){
if(err){
	throw err;
}
else{
	resultArray.push(result);
	console.log("data fetched");
	db.close();
}
	});
res.json(resultArray);

	}
	
});


});

router.get('/getUser',function(req,res){
	mongo.connect(url,function(err,db){
	if(err){
		throw err;
	}
	else{
	var user=db.collection('users').find({first:req.body.first,last:req.body.last});
	if(user.pwd===req.body.pwd){
		res.render("user.ejs",{name:user.first+' '+user.last});
	}
}

});
});

router.get('/getPhotos',function(req,res){
	mongo.connect(url,function(err,db){
	if(err){
		throw err;
	}
	else{
	var user=db.collection('users').find({first:req.body.first,last:req.body.last});
	
		res.json(user.photos);
	
}

});
});

router.get('/getAlbums',function(req,res){
	mongo.connect(url,function(err,db){
	if(err){
		throw err;
	}
	else{
	var user=db.collection('users').find({first:req.body.first,last:req.body.last});
	
		res.json(user.albums);
	
}

});
});

router.post('/saveAlbum',function(req,res){
	mongo.connect(url,function(err,db){
	if(err){
		throw err;
	}
	else{
	db.collection('users').UpdateOne({first:req.body.first,last:req.body.last},
      { $set: { album.name : req.body.name, album.photos: req.body.photoArray } }
   );
	}
});
});

router.post('/savePhotos',function(req,res){
	mongo.connect(url,function(err,db){
	if(err){
		throw err;
	}
	else{
	db.collection('users').UpdateOne({first:req.body.first,last:req.body.last},
      { $set: { photo.name : req.body.name, photo.url: req.body.ur } }
   );
	}
});
});

module.exports = router;
