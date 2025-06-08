const phrasesService = require('../services/phrasesService');

const PhrasesController = {
  async list(req, res) {
    try {
      const phrases = await phrasesService.listPhrases();
      res.json(phrases);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = PhrasesController;