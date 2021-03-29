// Externals
const express = require('express');
const Enquete = require('../models/enquete');

// Router
const router = express.Router();

// start page - index
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Minor WDD Enquete | Start',
  });
});

// enquete
router.get('/enquete', (req, res) => {
  res.render('enquete', {
    title: 'Minor WDD Enquete',
  });
});

// // 'login' - name & studentnumber
// router.get('/login', (req, res) => {
//   res.render('login', {
//     title: 'Algemeen',
//   });
// });

// // wafs
// router.get('/wafs', (req, res) => {
//   res.render('wafs', {
//     title: 'Web App From Scratch',
//   });
// });

// // cssttr
// router.get('/cssttr', (req, res) => {
//   res.render('cssttr', {
//     title: 'CSS to the Rescue',
//   });
// });

// // pwa
// router.get('/pwa', (req, res) => {
//   res.render('pwa', {
//     title: 'Progressive Web App',
//   });
// });

// // bt
// router.get('/bt', (req, res) => {
//   res.render('bt', {
//     title: 'Browser Technologies',
//   });
// });

// // rtw
// router.get('/rtw', (req, res) => {
//   res.render('rtw', {
//     title: 'Real-Time Web',
//   });
// });

// // hcd
// router.get('/hcd', (req, res) => {
//   res.render('hcd', {
//     title: 'Human Centred Design',
//   });
// });


module.exports = router;
