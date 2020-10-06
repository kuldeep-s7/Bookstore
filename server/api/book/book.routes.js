const controller = require('./book.controller');
const express = require('express');
const router = express.Router();

router.get('/allbooks',controller.allBooks);
router.post('/saveUserBook', controller.saveUserBook);
module.exports = router;