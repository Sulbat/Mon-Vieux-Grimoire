//import de express mongoose etc
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

//import du router livres et user
const booksRoutes = require('./routes/books');
const userRoutes = require('./routes/user');

//creation d'une app express
const app = express();

//logique pour se connecter à MangoDB
mongoose.connect('mongodb+srv://Sami:tTCWjKASqQYHyAhe@cluster0.phnqu7z.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

//permet d'acceder au corps de la requete
app.use(express.json());

//middleware qui gère l'erreur de CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });  


// Enregistrement des routeurs
app.use('/api/books', booksRoutes);
app.use('/api/auth', userRoutes);

// autorise à acceder aux images depuis le front
app.use('/images', express.static(path.join(__dirname, 'images')));
  
//export de l'app
module.exports = app;