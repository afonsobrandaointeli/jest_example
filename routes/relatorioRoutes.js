const express = require('express');
const router = express.Router();

const RelatorioRepository = require('../repositories/RelatorioRepository');
const RelatorioService = require('../services/RelatorioService');
const RelatorioController = require('../controllers/RelatorioController');

const controller = new RelatorioController(new RelatorioService(new RelatorioRepository()));

router.get('/relatorio', controller.mostrarRelatorio.bind(controller));

module.exports = router;