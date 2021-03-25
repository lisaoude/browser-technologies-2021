// Externals
const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();
const app = express();
const mongoose = require('mongoose');


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


// Routes
const endscreenRoutes = require('./routes/endscreenRoutes')
const resultRoutes = require('./routes/resultRoutes')
const errorRoutes = require('./routes/errorRoutes')


// Routing
app.use('/end', endscreenRoutes);
app.use('/results', resultRoutes);
app.use('/404', errorRoutes);
