const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/hotelrouter'); // Assurez-vous du bon chemin


const app = express();

// Connexion à MongoDB
mongoose
  .connect('mongodb://127.0.0.1:27017/js-Hotel', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Database connection error:', err.message);
  });

// Middlewares
app.use(express.json());

// Routes
app.use('/Hotel', routes);


// Serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});