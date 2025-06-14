require('dotenv').config(); 
const http = require('http');
const app  = require('./app');

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`[Servidor] - Aplicação rodando em http://localhost:${PORT}`);
});

module.exports = server;
