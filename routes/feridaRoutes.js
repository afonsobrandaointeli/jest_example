const express = require('express');
const router = express.Router();

const FeridaRepository = require('../repositories/FeridaRepository');
const FeridaService = require('../services/FeridaService');
const FeridaController = require('../controllers/FeridaController');

const controller = new FeridaController(new FeridaService(new FeridaRepository()));

router.get('/cadastro', controller.formCadastro.bind(controller));
router.post('/cadastro', controller.cadastrar.bind(controller));

module.exports = router;