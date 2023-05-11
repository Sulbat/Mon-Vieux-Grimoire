//TOUTES LA LOGIQUE DE ROOTING

const express = require('express');
const router = express.Router();
const booksCtrl = require('../controllers/books');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');


//middleware, fonction qui recoit la requete depuis la base de données, la reponse et next pour passer à la prochaine fonction
router.get('/', auth, booksCtrl.getAllBooks);

//permet de récuperer l'id pour modifier un livre en particulier par exemple
router.get('/:id', auth, booksCtrl.getOneBook);

// requete post pour intercepter les données et les enregistrer dans la base de données
router.post('/', auth, multer, booksCtrl.createBook);

// pour modifier un livre
router.put('/:id', auth, multer, booksCtrl.modifyBook);

// pour supprimer un livre
router.delete('/:id', auth, booksCtrl.deleteBook);


module.exports = router;