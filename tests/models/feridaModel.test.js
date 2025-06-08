const FeridaModel = require('../../models/FeridaModel');

describe('FeridaModel.schema', () => {
    //Arrange
  const dadosValidos = {
    paciente_nome: 'Maria da Silva',
    tipo: 'Queimadura',
    tempo: 6,
    descricao: 'Queimadura de segundo grau no braço direito'
  };

  it('deve aceitar dados válidos', () => {
    //Act 
    const { error, value } = FeridaModel.schema.validate(dadosValidos);

    //Assert
    expect(error).toBeUndefined();
    expect(value).toEqual(dadosValidos);
  });

  it('deve falhar se faltar um campo obrigatório', () => {
    const { error } = FeridaModel.schema.validate({
      ...dadosValidos,
      paciente_nome: undefined
    });
    expect(error).toBeDefined();
    expect(error.details[0].message).toMatch(/paciente_nome/);
  });

  it('deve falhar se o tipo não estiver na lista permitida', () => {
    const { error } = FeridaModel.schema.validate({
      ...dadosValidos,
      tipo: 'Infecção'
    });
    expect(error).toBeDefined();
    expect(error.details[0].message).toMatch(/tipo/);
  });

  it('deve falhar se o tempo for maior que 12', () => {
    const { error } = FeridaModel.schema.validate({
      ...dadosValidos,
      tempo: 15
    });
    expect(error).toBeDefined();
    expect(error.details[0].message).toMatch(/tempo/);
  });

  it('deve aceitar descrição vazia', () => {
    const { error } = FeridaModel.schema.validate({
      ...dadosValidos,
      descricao: ''
    });
    expect(error).toBeUndefined();
  });
});