const PhrasesService = require('../services/phrasesService');
const PhrasesRepository = require('../repositories/phrasesRepository');

jest.mock('../repositories/phrasesRepository');

describe('Phrases Service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should list all phrases', async () => {
    const mockPhrases = [
      { id: 1, text: 'Mocked phrase 1', author: 'Test Author' },
      { id: 2, text: 'Mocked phrase 2', author: 'Test Author' }
    ];
    PhrasesRepository.findAll.mockResolvedValue(mockPhrases);

    const result = await PhrasesService.listPhrases();
    expect(result).toEqual(mockPhrases);
    expect(PhrasesRepository.findAll).toHaveBeenCalledTimes(1);
  });

  it('should throw an error if repository fails', async () => {
    PhrasesRepository.findAll.mockRejectedValue(new Error('Database error'));

    await expect(PhrasesService.listPhrases()).rejects.toThrow('Database error');
    expect(PhrasesRepository.findAll).toHaveBeenCalledTimes(1);
  });
});
