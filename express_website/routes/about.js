/**
 * Created by Vader on 08/03/2016.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('about', { title: 'About' });
});

module.exports = router;
