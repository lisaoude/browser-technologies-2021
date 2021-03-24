// Externals
const express = require('express');
const Enquete = require('../models/enquete');

// Router
const router = express.Router();

// alle enquetes
router.get('/', (req, res) => {
  Enquete.find().sort({ createdAt: -1 })
    .then((result) => {
      res.render('index', {
        title: 'Alle Ingevulde Enquetes',
        enquetes: result
      })
    })
    .catch((err) => {
      console.log(err);
    });
});


// ingevulde enquete opslaan
router.post('/', (req, res) => {
  const enquete = new Enquete(req.body)

  enquete.save()
    .then((result) => {
      res.redirect('/end')
    })
    .catch((err) => {
      console.log(err);
    });
});


// ingevulde enquetes per stuk
router.get('/:id', (req, res) => {
  const id = req.params.id;
  Enquete.findById(id)
    .then(result => {
      res.render('details', { enquete: result, title: 'Enquete details' });
    })
    .catch(err => {
      console.log(err);
    });
});


// ingevulde enquetes verwijderen
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Enquete.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/results' });
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;