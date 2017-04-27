var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 var db = req.db;
    var collection = db.get('categoria');
    collection.find({},{},function(e,docs){
    	console.log('docs');
        res.render('index', {
            "json" : docs
        });
    });
});

router.get('/dados', function(req, res, next) {
    var db = req.db;
    var collection = db.get('categoria');
    collection.find({},{},function(e,docs){
    	console.log('docs');
        res.json(
        	docs
        );
    });
});
module.exports = router;
