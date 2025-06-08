const FeridaService = require('../../services/FeridaService');

const mockRepository = {
  inserir: jest.fn()
};

describe('FeridaService', () => {
  const service = new FeridaService(mockRepository);

  const feridaValida = {
    paciente_nome: 'Joana Teste',
    tipo: 'Queimadura',
    tempo: 4,
    descricao: 'Queimadura leve no braço'
  };

  const feridaInvalida = {
    paciente_nome: '',               // inválido: string vazia
    tipo: 'OutroTipoInvalido',       // inválido: valor fora do enum
    tempo: 15                        // inválido: acima de 12
  };

  beforeEach(() => {
    jest.clearAllMocks(); // limpa chamadas anteriores do mock
  });

  it('deve cadastrar uma ferida válida chamando o repositório', async () => {
    const respostaMock = {
      id: 1,
      ...feridaValida,
      data_cadastro: '2025-06-07T00:00:00Z'
    };

    mockRepository.inserir.mockResolvedValue(respostaMock);

    const resultado = await service.cadastrar(feridaValida);

    expect(mockRepository.inserir).toHaveBeenCalledTimes(1);
    expect(mockRepository.inserir).toHaveBeenCalledWith(feridaValida);
    expect(resultado).toEqual(respostaMock);
  });

  it('deve lançar erro se os dados forem inválidos e não chamar o repositório', async () => {
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {}); // silencia o console.error

    await expect(service.cadastrar(feridaInvalida)).rejects.toThrow('"paciente_nome" is not allowed to be empty');
    expect(mockRepository.inserir).not.toHaveBeenCalled();

    spy.mockRestore(); // restaura o comportamento original
  });
});
