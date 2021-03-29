// Externals
const express = require('express');
const Enquete = require('../models/enquete');

// Router
const router = express.Router();

// start page - index
router.get('/', (req, res) => {
  res.render('enquete', {
    title: 'Minor WDD Enquete',
  });
});


module.exports = router;
