const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('dashboard', { title: 'Demo_JustFinancial', user:req.user, });
});

module.exports = router;
