const FeridaModel = require('../models/FeridaModel');

class FeridaService {
    constructor(repository) {
        this.repository = repository;
    }

    async cadastrar(ferida) {
        console.log('[FeridaService] - validar ferida');
        const { error } = FeridaModel.schema.validate(ferida);
        if (error) {
            console.error('[FeridaService] - validação falhou:', error.details[0].message);
            throw new Error(error.details[0].message);
        }
        console.log('[FeridaService] - validação ok, enviando para repository');
        return await this.repository.inserir(ferida);
    }
}

module.exports = FeridaService;