// Externals
const express = require('express');
const Enquete = require('../models/enquete');

// Router
const router = express.Router();

// wafs opslaan
router.post('/wafs', (req, res) => {
  const enquete = new Enquete(req.body)

  enquete.save()
    .then((result) => {
      res.redirect('/cssttr')
    })
    .catch((err) => {
      console.log(err);
    });
});


module.exports = router;
