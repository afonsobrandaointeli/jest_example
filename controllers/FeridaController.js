class FeridaController {
    constructor(service) {
        this.service = service;
    }

    formCadastro(req, res) {
        console.log('[FeridaController] - formCadastro acionado');
        res.render('cadastro');
    }

    async cadastrar(req, res) {
        console.log('[FeridaController] - cadastrar acionado');
        try {
            await this.service.cadastrar(req.body);
            console.log('[FeridaController] - cadastro realizado com sucesso');
            res.redirect('/relatorio');
        } catch (err) {
            console.error('[FeridaController] - erro no cadastro:', err.message);
            res.status(400).send(err.message);
        }
    }
}

module.exports = FeridaController;