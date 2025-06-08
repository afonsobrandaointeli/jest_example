const FeridaRepository = require('../../repositories/FeridaRepository');
const db = require('../../config/database');

jest.mock('../../config/database', () => ({
  query: jest.fn()
}));

describe('FeridaRepository', () => {
  const repository = new FeridaRepository();

  const mockFerida = {
    paciente_nome: 'João Teste',
    tipo: 'Corte',
    tempo: 3,
    descricao: 'Pequeno corte na perna'
  };

  const mockReturn = {
    rows: [{
      id: 1,
      paciente_nome: 'João Teste',
      tipo: 'Corte',
      tempo: 3,
      descricao: 'Pequeno corte na perna',
      data_cadastro: '2025-06-07T12:00:00Z'
    }]
  };

  beforeEach(() => {
    db.query.mockClear();
  });

  it('deve inserir uma ferida no banco e retornar os dados inseridos', async () => {
    db.query.mockResolvedValue(mockReturn);

    const result = await repository.inserir(mockFerida);

    expect(db.query).toHaveBeenCalledTimes(1);
    expect(db.query).toHaveBeenCalledWith(expect.stringContaining('INSERT INTO feridas'), [
      mockFerida.paciente_nome,
      mockFerida.tipo,
      mockFerida.tempo,
      mockFerida.descricao
    ]);

    expect(result).toEqual(mockReturn.rows[0]);
  });
});
