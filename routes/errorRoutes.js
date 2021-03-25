// Externals
const express = require('express');
const Enquete = require('../models/enquete');

// Router
const router = express.Router();

// 404 page
router.use((req, res) => {
  res.render('404', {
    title: '404'
  });
});



module.exports = router;
