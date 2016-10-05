var express = require('express');
var user = require('../model/user');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {});
});

/* POST conforim page. */
router.post('/confirm', function(req, res, next) {
   req.session.form = req.body;
  res.render('confirm', req.session.form);
});

/* POST complete page. */
router.post('/complete', function(req, res, next) {
    var doc = req.session.form;
    user.addUser(doc, function(err){
        if(err){
            next(err);
        }else{
            res.render('complete', doc);
        }
    });
});
module.exports = router;
