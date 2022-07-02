const express = require('express');
const mongoose = require('mongoose');
const postRoutes = require('./routes/post');
const userRoutes = require('./routes/user');
const path = require('path');
const cors = require('cors');
const app = express();

// connexion to mongoDB
mongoose
  .connect(
    'mongodb+srv://FormationOP:Project7@cluster0.ohdod8x.mongodb.net/?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('Connected to MongoDB !'))
  .catch((e) => console.log('Failed to connect to MongoDB !', e));

// CORS in the header
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

// app.use() allows to assign a middleware to a specific route of the application.
app.use(express.json());
app.use(cors());

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/post', postRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;
