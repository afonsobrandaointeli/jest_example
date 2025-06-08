const Joi = require('joi');

class FeridaModel {
    static get schema() {
        return Joi.object({
            paciente_nome: Joi.string().max(100).required(),
            tipo: Joi.string().valid('Queimadura', 'Corte', 'Escoriação', 'Úlcera', 'Outros').required(),
            tempo: Joi.number().integer().min(1).max(12).required(),
            descricao: Joi.string().allow('').optional()
        });
    }
}

module.exports = FeridaModel;