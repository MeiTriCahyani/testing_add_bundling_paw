const express = require('express');
const { addPaket } = require('../controllers/paketController');
const authenticate = require('../middlewares/authenticate');
const isAdmin = require('../middlewares/isAdmin');
const upload = require('../middlewares/upload');

const router = express.Router();

router.post('/new', authenticate, isAdmin, upload.single('Gambar'), addPaket);

module.exports = router;
