var express = require('express');
var router = express.Router();

/* GET reviewlist. */
router.get('/reviewlist', function(req, res) {
  var db = req.db;
  var collection = db.get('reviewlist');
  collection.find({},{},function(e,docs){
    res.json(docs);
  });
});

/* POST to addreview. */
router.post('/addreview', function(req, res) {
  var db = req.db;
  var collection = db.get('reviewlist');
  collection.insert(req.body, function(err, result){
    res.send(
      (err === null) ? { msg: '' } : { msg: err }
    );
  });
});

/* DELETE to deletereview. */
router.delete('/deletereview/:id', function(req, res) {
  var db = req.db;
  var collection = db.get('reviewlist');
  var userToDelete = req.params.id;
  collection.remove({ 'id' : userToDelete }, function(err) {
    res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
  });
});

module.exports = router;