const multer = require('multer');

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png'
};


//configuration de la sauvegarde via multer
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'images');
  },
  //generer le nom du fichier
  // Nom des images => nom d'origine, remplacement des espaces et des points par des underscores, ajout d'un timestamp pour le rendre unique
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_').replace(/.(jpg|png)$/, "");
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + '.' + extension);
  }
});

module.exports = multer({storage: storage}).single('image');