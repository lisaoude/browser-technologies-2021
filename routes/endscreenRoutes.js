// Externals
const express = require('express');
const Enquete = require('../models/enquete');

// Router
const router = express.Router();

// endscreen after survey is completed
// /end
router.get('/', (req, res) => {
  res.render('end', {
    title: 'Einde',
  });
});


module.exports = router;
