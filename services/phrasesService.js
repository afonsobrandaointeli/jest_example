const phrasesRepository = require('../repositories/phrasesRepository');
const { phraseSchema } = require('../models/phraseModel');

class PhrasesService {
  async listPhrases() {
    return phrasesRepository.findAll();
  }
}

module.exports = new PhrasesService();