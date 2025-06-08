const RelatorioRepository = require('../../repositories/RelatorioRepository');
const db = require('../../config/database');

jest.mock('../../config/database', () => ({
  query: jest.fn()
}));

describe('RelatorioRepository', () => {
  const repository = new RelatorioRepository();

  const mockReturn = {
    rows: [
      {
        id: 1,
        paciente_nome: 'Ana Paula',
        tipo: 'Úlcera',
        tempo: 5,
        descricao: 'Ferida crônica',
        data_cadastro: '2025-06-07T10:00:00Z'
      },
      {
        id: 2,
        paciente_nome: 'Carlos Silva',
        tipo: 'Corte',
        tempo: 2,
        descricao: 'Ferimento superficial',
        data_cadastro: '2025-06-06T09:00:00Z'
      }
    ]
  };

  beforeEach(() => {
    db.query.mockClear();
  });

  it('deve retornar todas as feridas ordenadas por data de cadastro', async () => {
    db.query.mockResolvedValue(mockReturn);

    const result = await repository.listarTodas();

    expect(db.query).toHaveBeenCalledTimes(1);
    expect(db.query.mock.calls[0][0]).toMatch(/SELECT id, paciente_nome/);
    expect(result).toEqual(mockReturn.rows);
    });
});