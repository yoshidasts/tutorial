var express = require('express');
var fs = require('fs');
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
    var form = req.session.form;
    fs.writeFile('output.txt', JSON.stringify(form), function(err){
        res.render('complete', form);
    });
});
module.exports = router;
