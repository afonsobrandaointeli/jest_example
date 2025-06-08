class RelatorioService {
    constructor(repository) {
        this.repository = repository;
    }

    async obterRelatorio() {
        console.log('[RelatorioService] - obterRelatorio acionado');
        return await this.repository.listarTodas();
    }
}

module.exports = RelatorioService;