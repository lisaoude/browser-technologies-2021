// Externals
const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();
const app = express();
const mongoose = require('mongoose');
// const { render } = require('ejs');

// Routes
const resultRoutes = require('./routes/resultRoutes')

// Internals
const PORT = process.env.PORT || 3000;
const dbURI = process.env.DBURI;


// Connect to mongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(PORT), console.log(`App is launched on http://localhost:${PORT}`))
  .catch((err) => console.log(err));


// Middleware & Static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');


// Result routes
app.use('/results', resultRoutes);


// Routing
app.get('/enquete', (req, res) => {
  res.render('enquete', {
    title: 'Minor WDD Enquête',
  });
});

app.get('/home', (req, res) => {
  res.render('home', {
    title: 'Minor WDD Enquête',
    headTwo: 'hoi'
  });
});

app.get('/login', (req, res) => {
  res.render('login', {
    title: 'Inloggen',
  });
});

app.get('/wafs1', (req, res) => {
  res.render('wafs1', {
    title: 'WAFS1',
  });
});

app.get('/wafs2', (req, res) => {
  res.render('wafs2', {
    title: 'WAFS2',
  });
});

app.get('/wafs3', (req, res) => {
  res.render('wafs3', {
    title: 'WAFS3',
  });
});

app.get('/wafs4', (req, res) => {
  res.render('wafs4', {
    title: 'WAFS4',
  });
});

app.get('/wafs5', (req, res) => {
  res.render('wafs5', {
    title: 'WAFS5',
  });
});

app.get('/wafs6', (req, res) => {
  res.render('wafs6', {
    title: 'WAFS6',
  });
});

app.get('/submit', (req, res) => {
  res.render('submit', {
    title: 'SUBMIT',
  });
});

app.get('/end', (req, res) => {
  res.render('end', {
    title: 'Einde',
  });
});




// 404 page
app.use((req, res) => {
  res.render('404', {
    title: '404'
  });
});

