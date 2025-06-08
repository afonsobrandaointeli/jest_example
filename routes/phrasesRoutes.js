const express = require('express');
const PhrasesController = require('../controllers/phrasesController');

const router = express.Router();

router.get('/', PhrasesController.list);

module.exports = router;