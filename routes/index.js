var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Rebase Exercise' });
});


router.get('/dashboard', function(req, res, next) {
  res.render ('dashboard');
});

module.exports = router;
