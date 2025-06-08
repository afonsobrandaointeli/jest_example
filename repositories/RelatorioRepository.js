const db = require('../config/database');

class RelatorioRepository {
    async listarTodas() {
        console.log('[RelatorioRepository] - listando todas as feridas');
        const result = await db.query(`
            SELECT id, paciente_nome, tipo, tempo, descricao, data_cadastro
            FROM feridas
            ORDER BY data_cadastro DESC
        `);
        console.log('[RelatorioRepository] - total de feridas recuperadas:', result.rows.length);
        return result.rows;
    }
}

module.exports = RelatorioRepository;