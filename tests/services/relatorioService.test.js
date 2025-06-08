const RelatorioService = require('../../services/RelatorioService');

describe('RelatorioService', () => {
  // Mock do repositório com método listarTodas
  const mockRepository = {
    listarTodas: jest.fn()
  };

  const service = new RelatorioService(mockRepository);

  const feridasMock = [
    {
      id: 1,
      paciente_nome: 'Maria da Silva',
      tipo: 'Úlcera',
      tempo: 6,
      descricao: 'Ferida grave',
      data_cadastro: '2025-06-07T10:00:00Z'
    },
    {
      id: 2,
      paciente_nome: 'Carlos Lima',
      tipo: 'Corte',
      tempo: 2,
      descricao: 'Corte leve',
      data_cadastro: '2025-06-06T14:00:00Z'
    }
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('deve retornar a lista de feridas do repositório', async () => {
    mockRepository.listarTodas.mockResolvedValue(feridasMock);

    const resultado = await service.obterRelatorio();

    expect(mockRepository.listarTodas).toHaveBeenCalledTimes(1);
    expect(resultado).toEqual(feridasMock);
  });
});