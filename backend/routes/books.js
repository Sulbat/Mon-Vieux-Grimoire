//TOUTES LA LOGIQUE DE ROOTING

const express = require('express');
const router = express.Router();
const booksCtrl = require('../controllers/books');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');


//middleware, fonction qui recoit la requete depuis la base de données, la reponse et next pour passer à la prochaine fonction
router.get('/', booksCtrl.getAllBooks);

//recuperer les meilleures notes
router.get('/bestrating', booksCtrl.getBestRating);

//permet de récuperer l'id pour modifier un livre en particulier par exemple
router.get('/:id', booksCtrl.getOneBook);

// requete post pour intercepter les données et les enregistrer dans la base de données
router.post('/', auth, multer, multer.resizeImage, booksCtrl.createBook);

//creer une note
router.post('/:id/rating', auth, booksCtrl.createRating);

// pour modifier un livre
router.put('/:id', auth, multer, multer.resizeImage, booksCtrl.modifyBook);

// pour supprimer un livre
router.delete('/:id', auth, booksCtrl.deleteBook);


module.exports = router;