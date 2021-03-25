// Externals
const express = require('express');

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
