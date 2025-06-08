class RelatorioController {
    constructor(service) {
        this.service = service;
    }

    async mostrarRelatorio(req, res) {
        console.log('[RelatorioController] - mostrarRelatorio acionado');
        try {
            const feridas = await this.service.obterRelatorio();
            console.log('[RelatorioController] - feridas recuperadas:', feridas.length);
            res.render('relatorio', { feridas });
        } catch (err) {
            console.error('[RelatorioController] - erro ao obter relatório:', err.message);
            res.status(500).send(err.message);
        }
    }
}

module.exports = RelatorioController;