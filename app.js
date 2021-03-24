// Externals
const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();
const app = express();
const mongoose = require('mongoose');

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
app.get('/', (req, res) => {
  res.render('enquete', {
    title: 'Minor WDD Enquête',
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

//