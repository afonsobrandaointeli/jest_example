const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const homeRoutes = require('./routes/homeRoutes');
const feridaRoutes = require('./routes/feridaRoutes');
const relatorioRoutes = require('./routes/relatorioRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use((req, res, next) => {
    console.log(`[Servidor] - ${req.method} ${req.url}`);
    next();
});

app.use('/', homeRoutes);
app.use('/', feridaRoutes);
app.use('/', relatorioRoutes);

app.listen(PORT, () => {
    console.log(`[Servidor] - Aplicação rodando em http://localhost:${PORT}`);
});