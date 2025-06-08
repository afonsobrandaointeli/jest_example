const express = require('express');
const phrasesRoutes = require('./routes/phrasesRoutes');

const app = express();

app.use(express.json());
app.use('/phrases', phrasesRoutes);

app.get('/', (req, res) => {
  res.send('Motivational Phrases API');
});

module.exports = app;
