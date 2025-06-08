const pool = require('../config/database');

class PhrasesRepository {
  async findAll() {
    const result = await pool.query('SELECT * FROM phrases');
    return result.rows;
  }
}

module.exports = new PhrasesRepository();